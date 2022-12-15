<script lang="ts">
  import PlanBadge from "../../../../components/PlanBadge/PlanBadge.svelte";
  import { formatTimeStamp } from "../../../../helpers";
  import { convertGbToTb } from "../../../../helpers/convertGBtoTB/convert-gb-to-tb";
  import { getPlanBadgeColor } from "../../../../helpers/getPlanBadgeColor/get-plan-badge-color";
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="main">
  <div style="display:flex;flex-direction: column;">
    <div class="header">Content Library Platform</div>
    <div class="fields">
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Plan Level</div>
          <div class="field-data">
            <PlanBadge
              badgeColor={getPlanBadgeColor(currentOrg.vodPlanName)}
              planName={currentOrg.vodPlanName ?? "INACTIVE"}
            />
          </div>
        </div>
        <div class="field">
          <div class="field-title">Billing Frequency</div>
          <div class="field-data">
            {currentOrg.billingYearlyVod ? "Annually" : "N/A"}
          </div>
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Joined</div>
          <div class="field-data">
            {currentOrg.vodStartDate
              ? formatTimeStamp(currentOrg.vodStartDate)
              : "N/A"}
          </div>
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Storage Space</div>
          <div class="field-data">
            {`${convertGbToTb(currentOrg.additionalVodStorageGb)} TB`}
          </div>
        </div>
        <div class="field">
          <div class="field-title">Download Bandwidth</div>
          <div class="field-data">
            {`${convertGbToTb(currentOrg.additionalVodBandwidthGb)} TB`}
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
    font-size: 15px;
    opacity: 0.9;
  }
</style>
