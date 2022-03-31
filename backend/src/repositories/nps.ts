import Data from "../models/data";

interface NPSGroups {
  promoters: number,
  passives: number,
  detractors: number,
  total: number,
}

export const getNpsGroups = async () => {
  // Get the number of NPS responses per group using the Mongo aggregation pipeline
  const data: { _id: 'promoters' | 'passives' | 'detractors', count: number }[] = await Data.aggregate([
    { $match: { type: 'NPS' } },
    {
      $group: {
        _id: {
          $cond: {
            if: { $gte: ["$value", 9] },
            then: "promoters",
            else: {
              $cond: {
                if: { $gte: ["$value", 7] },
                then: "passives",
                else: "detractors",
              },
            },
          },
        },
        count: { $sum: 1 },
      },
    },
  ]);

  return data.reduce<NPSGroups>((acc, { _id, count }) => {
    acc[_id] = count;
    acc.total += count;
    return acc;
  }, { promoters: 0, detractors: 0, passives: 0, total: 0 });
};
