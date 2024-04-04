import axios from "axios";

export type RequestConfigurationType = {
  data?: object;
  headers?: object;
  method: string;
  params?: object;
  url: string;
};

export default async function request(
  requestConfiguration: RequestConfigurationType,
) {
  try {
    const response = await axios(requestConfiguration);
    return response.data;
  } catch (e) {
    throw e;
  }
}
