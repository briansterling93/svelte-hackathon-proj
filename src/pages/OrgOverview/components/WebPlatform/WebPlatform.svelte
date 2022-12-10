<script lang="ts">
  import PlanBadge from "../../../../components/PlanBadge/PlanBadge.svelte";
  import { formatTimeStamp } from "../../../../helpers";
  import { getPlanBadgeColor } from "../../../../helpers/getPlanBadgeColor/get-plan-badge-color";
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="main">
  <div style="display:flex;flex-direction: column;">
    <div class="header">Web Platform</div>
    <div class="fields">
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Plan Level</div>
          <div class="field-data">
            <PlanBadge
              badgeColor={getPlanBadgeColor(currentOrg.webPlanName)}
              planName={currentOrg.webPlanName ?? "INACTIVE"}
            />
          </div>
        </div>
        <div class="field">
          <div class="field-title">Billing Frequency</div>
          <div class="field-data">
            {currentOrg.billingYearlyWeb ? "Annually" : "N/A"}
          </div>
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Joined</div>
          <div class="field-data">
            {formatTimeStamp(currentOrg.webStartDate) || "N/A"}
          </div>
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <div class="field-title">CONCURRENT WEB LICENSES</div>
          <div class="field-data">
            {`${currentOrg.additionalConcurrentWebEvents} licenses`}
          </div>
        </div>
        <div class="field">
          <div class="field-title">Streaming Bandwidth</div>
          <div class="field-data">
            {`${currentOrg.webBandwidth} TB`}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    border-bottom: 1px solid #bfbfbf;
    margin-top: 0;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    box-shadow: 4px 4px 4px rgb(245, 245, 245);
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
    width: 90%;
  }

  .header {
    font-size: 1.125rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

  .field {
    display: flex;
    flex-direction: column;
    min-width: 700px;
  }

  .fields-row {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    width: 700px;
  }

  .field-title {
    font-size: 12px;
    text-transform: uppercase;
  }

  .field-data {
    padding-top: 10px;
    color: #595959;
    font-size: 15px;
    opacity: 0.8;
  }
</style>
