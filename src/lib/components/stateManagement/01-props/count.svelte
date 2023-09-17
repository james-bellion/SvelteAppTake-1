<!-- This component exports a count variable of type number. It displays the value of count. -->

<!-- CHILD COMPOENENT -->

<script lang="ts">
  export let count: number
</script>
<div class="flex items-center justify-center p-1">
  <p>{count}</p>
</div>
