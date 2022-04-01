import config from "../config";
import { IPexelsResponse } from "../interfaces/IPexelsResponse";
import axios from "axios";

const getPexelsImage = async (
  query: string,
  per_page: number = 1
): Promise<IPexelsResponse> => {
  query = query.replace(/\s/g, "+");
  const { data } = await axios({
    method: "GET",
    headers: {
      Authorization: config.pexels.randomId,
    },
    url: `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`,
  });

  return data;
};

export default getPexelsImage;
