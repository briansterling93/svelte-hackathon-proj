<script lang="ts">
  import { getOrganizationData } from "./api";
  import OrgOverview from "./pages/OrgOverview/org-overview.svelte";
  import { mockedOrg, organization } from "./store";

  export let authToken: string;
  export let currentOrg: string;
  
  getOrganizationData(
    currentOrg,
    authToken
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
