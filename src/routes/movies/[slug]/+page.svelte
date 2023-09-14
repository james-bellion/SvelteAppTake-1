<script lang="ts">
  export let data
</script>

<div class='card p-4'>
  <div class="flex justify-center p-2">
    <h1>{data.movie.title}</h1>
  </div>
  <img src={data.movie.img} alt={data.movie.title} />
  <div>{@html data.movie.bio}</div>
</div>

<div class="flex justify-center">
  <button type="button" class="btn mt-2 variant-ghost-primary"><a href="/movies">Back to Movies</a></button>
</div>


