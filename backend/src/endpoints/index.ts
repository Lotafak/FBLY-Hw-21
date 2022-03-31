import { Router } from "express"

import Data from '../models/data';
import { getNpsGroups } from "../repositories/nps";

const router = Router();

const delay = () => new Promise(resolve => setTimeout(resolve, 3000))

router.get("/emoticon-average", async (_, res) => {
  const [data] = await Data.aggregate([
    { $match: { type: 'Emoticon' } },
    {
      $group: {
        _id: null,
        avg: { $avg: "$value" },
        total: { $sum: 1 },
      },
    },
  ]);
  await delay();
  res.json({ average: data.avg, total: data.total });
})

router.get("/nps-groups", async (_, res) => {
  const npsGroups = await getNpsGroups();

  await delay();
  res.json(npsGroups);
})


router.get("/nps-score", async (_, res) => {
  const npsGroups = await getNpsGroups();
  const score = Math.round((npsGroups.promoters - npsGroups.detractors) / npsGroups.total * 100);

  await delay();
  res.json({ score })
})


export default router;
