<!-- This component exports a decrement function. It shows a button
   that calls this function when clicked. -->

   <!-- CHILD COMPOENT -->

<script lang="ts">
  export let decrement: () => void
</script>

<div class="flex items-center justify-center p-1">
  <button type="button" class="btn-icon variant-filled" on:click={decrement}>-</button>
</div>