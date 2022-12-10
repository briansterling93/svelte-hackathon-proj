<script lang="ts">
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="header">
  <div class="header-text">{currentOrg.name}</div>
</div>

<style>
  .header {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 72px;
    border-bottom: 1px solid rgb(232, 232, 232);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .header-text {
    padding: 32px;
    font-weight: 700;
    color: rgb(38, 38, 38);
    font-size: 24px;
  }
</style>
