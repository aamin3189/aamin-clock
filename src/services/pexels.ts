import config from "../config";
import { IPexelsResponse } from "../interfaces/IPexelsResponse";

const getPexelsImage = async (
  query: string,
  per_page: number = 1
): Promise<IPexelsResponse> => {
  const options = {
    headers: {
      Accept: "application/json",
      Authorization: config.pexels.randomId,
    },
  };
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`,
    options
  );
  const pexelImages = await response.json();
  return pexelImages;
};

export default getPexelsImage;
