import { organization, accessToken, orgUUID } from "../store";

export const getOrganizationData = async (
  uuid: string,
  accessToken: string
) => {
  const response = await fetch(
    `'https://int-central.resi.io/api_v2.svc/${uuid}`,
    {
      headers: {
        method: "GET",
        authorization: `X-Bearer ${accessToken}`,
      },
    }
  );

  return response.json();
  //   return organization.set(await response.json());
};

// export function getOrganizationData() {
//   console.log("mount");
// }
