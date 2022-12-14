<svelte:options tag="org-overview" />

<script lang="ts">
  import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { getOrganizationData } from "./api";
  export let selectedOrganization: CurrentOrganization;
  import OrgOverview from "./pages/OrgOverview/org-overview.svelte";
  import { organization } from "./store";
  import type { CurrentOrganization } from "./types";

  // onMount(() => {
  //   getOrganizationData("", "");
  // });

  const setSelectedOrganization = () => {
    organization.set(selectedOrganization);
  };

  setSelectedOrganization();
</script>

<main>
  <OrgOverview />
</main>

<style>
  main {
    text-align: center;
    height: 100vh;
  }
</style>
