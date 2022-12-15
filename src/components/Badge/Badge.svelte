<script lang="ts">
  import { isStatusActive } from "../../derivables/status";
</script>

<div class="main">
  {#if $isStatusActive}
    <span id="active-badge" class="badge">ACTIVE</span>
  {:else}
    <span id="inactive-badge" class="badge">INACTIVE</span>
  {/if}
</div>

<style>
  .badge {
    box-sizing: border-box;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    width: fit-content;
    height: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1.57143;
    font-weight: 600;
    padding: 0px 0.5rem;
    text-transform: uppercase;
    border-radius: 2px;
    color: rgb(255, 255, 255);
  }

  #active-badge {
    background-color: rgb(45, 143, 20);
  }

  #inactive-badge {
    background-color: #bfbfbf;
  }
</style>
