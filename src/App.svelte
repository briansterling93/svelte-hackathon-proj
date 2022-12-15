<svelte:options tag="org-overview" />

<script lang="ts">
  import { getOrganizationData } from "./api";
  export let selectedOrganization: { currentOrg: string; authToken: string };
  import OrgOverview from "./pages/OrgOverview/org-overview.svelte";
  import { mockedOrg, organization } from "./store";

  getOrganizationData(
    selectedOrganization.currentOrg,
    selectedOrganization.authToken
  );
  organization.set(mockedOrg); //needed in order to properly update props (uuid, access token) passed from main repo
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
