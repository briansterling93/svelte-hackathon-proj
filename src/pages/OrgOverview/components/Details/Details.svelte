<script lang="ts">
  import Badge from "../../../../components/Badge/Badge.svelte";
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="main">
  <div style="display:flex;flex-direction: column;">
    <div class="header">Details</div>
    <div class="fields">
      <!-- Name/ID Row-->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Name</div>
          <div class="field-data">{currentOrg.name}</div>
        </div>
        <div class="field">
          <div class="field-title">ID</div>
          <div class="field-data">{currentOrg.uuid}</div>
        </div>
      </div>
      <!-- Status/Scheduler Version Row -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Status</div>
          <div class="field-data"><Badge status={currentOrg.active} /></div>
        </div>
        <div class="field">
          <div class="field-title">Scheduler Version</div>
          <div class="field-data">
            {currentOrg.schedulerVersion === 1 ? "v1" : "v2"}
          </div>
        </div>
      </div>
      <!-- Managed By Row -->
      <!-- Status/Scheduler Version Row -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Managed By</div>
          <div class="field-data">{currentOrg.managedBy || "-"}</div>
        </div>
      </div>
      <!-- Notes Row -->
      <!-- Status/Scheduler Version Row -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Notes</div>
          <div class="field-data">{currentOrg.notes || "-"}</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    box-shadow: 4px 4px 4px rgb(245, 245, 245);
    display: flex;
    justify-content: flex-start;
    padding: 3rem;
    width: 95%;
  }

  .header {
    font-size: 1.125rem;
    font-weight: 700;
    padding-bottom: 15px;
  }

  .field {
    display: flex;
    flex-direction: column;
    min-width: 900px;
  }

  .fields-row {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    width: 900px;
  }

  .field-title {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.9;
    text-transform: uppercase;
  }

  .field-data {
    padding-top: 15px;
    color: #595959;
    font-size: 16px;
    opacity: 0.9;
  }
</style>
