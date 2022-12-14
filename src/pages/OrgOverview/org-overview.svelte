<script lang="ts">
  import OrgHeader from "./components/OrgHeader/OrgHeader.svelte";
  import { organization } from "../../store/index";
  import Details from "./components/Details/Details.svelte";
  import MultisitePlateform from "./components/MultisitePlatform/MultisitePlateform.svelte";
  import WebPlatform from "./components/WebPlatform/WebPlatform.svelte";
  import ContentLibraryPlatform from "./components/ContentLibraryPlatform/ContentLibraryPlatform.svelte";
  import Other from "./components/Other/Other.svelte";
  import type { CurrentOrganization } from "../../types";

  organization.subscribe((value) => {
    value;
  });
</script>

<main>
  <OrgHeader currentOrg={$organization} />
  <div class="cards">
    <Details currentOrg={$organization} />
    <MultisitePlateform currentOrg={$organization} />
    <WebPlatform currentOrg={$organization} />
    <ContentLibraryPlatform currentOrg={$organization} />
    <Other currentOrg={$organization} />
  </div>
</main>

<style>
  main {
    overflow-x: hidden;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: start;
    width: 100%;
    margin-top: 40px;
    padding-bottom: 40px;
  }
</style>
