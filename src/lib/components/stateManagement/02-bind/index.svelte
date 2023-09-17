<!-- index.svelte: This is the main component where everything comes together.

It imports the Input and Output components.
It declares a variable input with an initial empty string.
It uses the Input component and binds the input variable to it using bind:input.
It passes the input variable as a prop to the Output component. -->


<script lang="ts">
  import Input from './input.svelte'
  import Output from './output.svelte'

  let input = ''

</script>
<p>type something......</p>
<Input bind:input />
<Output {input} />