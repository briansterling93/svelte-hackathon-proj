<script lang="ts">
  import PlanBadge from "../../../../components/PlanBadge/PlanBadge.svelte";
  import { formatTimeStamp } from "../../../../helpers";
  import { getPlanBadgeColor } from "../../../../helpers/getPlanBadgeColor/get-plan-badge-color";
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="main">
  <div style="display:flex;flex-direction: column;">
    <div class="header">Multisite Platform</div>
    <div class="fields">
      <!-- PLAN/BILLING FREQUENCY Row-->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Plan Level</div>
          <div class="field-data">
            <PlanBadge
              badgeColor={getPlanBadgeColor(currentOrg.multisitePlanName)}
              planName={currentOrg.multisitePlanName ?? "INACTIVE"}
            />
          </div>
        </div>
        <div class="field">
          <div class="field-title">Billing Frequency</div>
          <div class="field-data">
            {currentOrg.billingYearlyMultiSite ? "Annually" : "N/A"}
          </div>
        </div>
      </div>
      <!-- JOINED ROW -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Joined</div>
          <div class="field-data">
            {formatTimeStamp(currentOrg.multisiteStartDate) || "N/A"}
          </div>
        </div>
      </div>
      <!-- NON-PROD/PROFESSIONAL LICENSES Row -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Non-Production Licenses</div>
          <div class="field-data">
            {`${currentOrg.usageSummary.nonProductionSiteLicenses} licenses`}
          </div>
        </div>
        <div class="field">
          <div class="field-title">Professional Licenses</div>
          <div class="field-data">
            {`${currentOrg.usageSummary.professionalLicenses} licenses`}
          </div>
        </div>
      </div>
      <!-- ENTERPRISE/LAN+CLOUD Row -->
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Enterprise Licenses</div>
          <div class="field-data">
            {`${currentOrg.usageSummary.enterpriseLicenses} licenses`}
          </div>
        </div>
        <div class="field">
          <div class="field-title">Lan + Cloud Licenses</div>
          <div class="field-data">
            {`${currentOrg.usageSummary.lanCloudSiteLicenses} licenses`}
          </div>
        </div>
      </div>
      <!-- Notes Row -->
      <!-- Status/Scheduler Version Row -->
    </div>
  </div>
</div>

<style>
  .main {
    border-bottom: 1px solid #bfbfbf;
    margin-top: 2rem;
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
