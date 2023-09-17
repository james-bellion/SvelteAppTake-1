<!-- 
  output.svelte: This component displays the input value.

- It exports a variable input of type string, indicating that it will receive a string as a prop.
- It displays the value of input within a paragraph element, showing the current value of the
input variable. -->

<script lang="ts">
  export let input: string
</script>

<p>{input}</p>