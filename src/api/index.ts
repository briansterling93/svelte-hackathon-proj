import { organization } from "../store";

export const getOrganizationData = async (uuid: string, token: string) => {
  try {
    const res = await fetch(
      `https://int-central.resi.io/api_v2.svc/customers/${uuid}`,
      {
        headers: {
          authorization: `X-Bearer ${token}`,
        },
      }
    );

    if (!res.ok)
      throw new Error(
        `Failed to get organization data: ${res.status} ${res.statusText}`
      );

    const json = await res.json();
    organization.set(json);
  } catch (error) {
    console.error(error);
  }
};
