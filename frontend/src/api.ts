import axios from "axios";

const url = process.env.API_URL || "http://localhost:3000";

const makeRequest = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const response = await axios.get(`${url}${endpoint}`);

    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export type EmoticonAverageType = { average: number; total: number };
export const getEmoticonAverage = () =>
  makeRequest<EmoticonAverageType>("/emoticon-average");

export type NpsGroupsType = {
  promoters: number;
  detractors: number;
  passives: number;
  total: number;
};
export const getNpsGroups = () => makeRequest<NpsGroupsType>("/nps-groups");

export type NpsScoreType = { score: number };
export const getNpsScore = () => makeRequest<NpsScoreType>("/nps-score");
