import { organization } from "../store";
import axios from "axios";

export const getOrganizationData = async (uuid: string, token: string) => {
  try {
    const res = await axios.get(
      `https://int-central.resi.io/api_v2.svc/customers/${uuid}`,
      { withCredentials: true },
      {
        headers: {
          method: "GET",
          authorization: `X-Bearer ${token}`,
        },
      }
    );
    console.log({ res }, "Svelte Microfrontend Call");

    organization.set(res.data);
  } catch (error) {
    console.log(error);
  }
};
