<!-- 
  
  input.svelte: This component handles user input.

- It exports a variable input of type string, indicating that it will receive a string as a prop.
- It contains an HTML input element of type text.
The bind:value={input} attribute binds the value of the input element to the input variable,
creating a two-way binding. This means that any changes made in this input field will update
the input variable in the parent component (index.svelte). -->


<script lang="ts">
  export let input: string
</script>

<input type="text"  bind:value={input} />