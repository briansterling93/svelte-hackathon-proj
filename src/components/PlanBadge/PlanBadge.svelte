<script lang="ts">
  export let badgeColor: string;
  export let planName: string;
</script>

<div>
  <span id={badgeColor} class="badge" style="text-transform: capitalize;"
    >{planName}</span
  >
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

  #enterprise {
    background-color: #ff585d;
  }

  #professional-premium {
    background-color: #475d7a;
  }

  #inactive {
    background-color: #bfbfbf;
  }

  #other {
    background-color: #008dca;
  }
</style>
