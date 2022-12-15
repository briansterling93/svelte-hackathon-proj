import App from "./App.svelte";

(window as any).renderPaneViewCurrentOrg = (
  containerId: string,
  props?: { authToken: string; currentOrg: string }
) => {
  const authToken = process.env.AUTH_TOKEN; // Update env with your refreshed token
  const currentOrg = "6dcebe46-41c1-49f9-a318-8081d14394e3"; // Resi

  if (!props) props = { authToken, currentOrg };
  if (!props.authToken) props.authToken = authToken;
  if (!props.currentOrg) props.currentOrg = currentOrg;

  new App({
    target: document.getElementById(containerId),
    props,
  });
};

(window as any).unmountPaneViewCurrentOrg = (containerId: string) => {
  new App({
    target: document.getElementById(containerId),
  }).$destroy();
};
