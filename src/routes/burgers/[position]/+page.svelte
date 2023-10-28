<!-- src/routes/burgers/[position]/+page.svelte -->


<script lang="ts">
  export let data: { summary: { position: number; name: string; symbol: string; price: number } };

  const { position, name, symbol, price } = data.summary;
</script>

<h1>{name}</h1>
<p>Position: {position}</p>
<p>Symbol: {symbol}</p>
<p>Price: ${price}</p>
<button on:click={() => history.back()}>Back</button>
