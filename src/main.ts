import App from "./App.svelte";
import type { CurrentOrganization } from "./types";

(window as any).renderPaneViewCurrentOrg = (
  containerId: string,
  selectedOrganization: CurrentOrganization

  // props = {
  //   //resi UUID to test with API call..
  //   currentOrg: "285e1ddf-9337-479b-b717-b1ccef824fa6",
  //   accessToken: "resi-access-token"
  // }
) => {
  new App({
    target: document.getElementById(containerId),
    props: { selectedOrganization },
  });
};

(window as any).unmountPaneViewCurrentOrg = (containerId: string) => {
  new App({
    target: document.getElementById(containerId),
  }).$destroy();
};
