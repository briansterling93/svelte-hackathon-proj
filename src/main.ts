import App from "./App.svelte";
import type { CurrentOrganization } from "./types";

(window as any).renderPaneViewCurrentOrg = (
  containerId: string,
  selectedOrganization: CurrentOrganization
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
