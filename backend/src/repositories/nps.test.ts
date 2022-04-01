import { getNpsGroups } from "./nps";
import Data from "../models/data";

jest.mock("../models/data");

test('getNpsGroups properly aggregates data', async () => {
  // @ts-ignore
  Data.aggregate.mockResolvedValue([
    { _id: 'promoters', count: 10, },
    { _id: 'passives', count: 15, },
    { _id: 'detractors', count: 5, },
  ]);

  const result = await getNpsGroups();

  expect(result).toMatchObject({ promoters: 10, passives: 15, detractors: 5, total: 30 });
});
