<script lang='ts'>
  export let data: { summeries: { slug: string; title: string }[] };

</script>

<h1>Movies</h1>
<p>Click on a movie title to find out more</p>

{#each data.summeries as { slug, title }}
  <a class="block card card-hover p-4 m-4 variant-ghost-tertiary" href='/movies/{slug}'>{title}</a>
{/each}