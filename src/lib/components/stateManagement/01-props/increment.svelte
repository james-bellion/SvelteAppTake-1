<!-- This component exports an increment function. It shows a button
   that calls this function when clicked. -->

   <!-- CHILD COMPOENENT -->

<script lang="ts">
  export let increment: () => void
</script>

<div class="flex items-center justify-center p-1">
  <button type="button" class="btn-icon variant-filled" on:click={increment}>+</button>
</div>