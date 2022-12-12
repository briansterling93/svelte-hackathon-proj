import App from "./App.svelte";

(window as any).renderPaneViewCurrentOrg = (containerId: string) => {
  new App({
    target: document.getElementById(containerId),
  });
};

(window as any).unmountPaneViewCurrentOrg = (containerId: string) => {
  new App({
    target: document.getElementById(containerId),
  }).$destroy();
};
