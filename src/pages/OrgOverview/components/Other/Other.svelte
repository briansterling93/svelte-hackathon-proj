<script lang="ts">
  import AudioBadge from "../../../../components/16ChannelAudioBadge/AudioBadge.svelte";
  import type { CurrentOrganization } from "../../../../types";
  export let currentOrg: CurrentOrganization;
</script>

<div class="main">
  <div style="display:flex;flex-direction: column;">
    <div class="header">Other</div>
    <div class="fields">
      <div class="fields-row">
        <div class="field">
          <div class="field-title">16-Channel Audio</div>
          <div class="field-data">
            <AudioBadge allowedSubtitles={currentOrg.allowed16ChannelAudio} />
          </div>
        </div>
        <div class="field">
          <div class="field-title">Software Encoder Licenses</div>
          <div class="field-data">
            {`${currentOrg.usageSummary.softwareEncoderLicenses} licenses`}
          </div>
        </div>
      </div>
      <div class="fields-row">
        <div class="field">
          <div class="field-title">Subtitle Hours Per Month</div>
          <div class="field-data">
            {`${
              currentOrg.subscriptionDetails.subtitlesHoursPerMonth || "0"
            } hours`}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    margin-top: 0;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
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
