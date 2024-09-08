import axios from "./axiosInstance";
import { TDataResponse, TGetDataRequestBody } from "types";

export async function getInfo(
  body: TGetDataRequestBody
): Promise<TDataResponse> {
  const res = await axios.post(`infections/_search`, body);

  return res.data;
}
