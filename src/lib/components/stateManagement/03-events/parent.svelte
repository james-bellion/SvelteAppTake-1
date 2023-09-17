<!-- parent.svelte -->
<script lang="ts">
  import Child from './child.svelte'

  // Initialize a variable to store the received message
  let message = ''

  // Function to handle the 'message' event from Child component
  function handleMessage(event: CustomEvent<string>) {
    // Update the message variable with the received message content
    message = event.detail
  }

   // Function to handle the 'messageRemoved' event from Child component
  function handleMessageRemoved(event: CustomEvent<string>) {
    message = event.detail
  }
</script>

<h1>Parent Component</h1>
<p>Message from Child: {message}</p>

<!-- Separate buttons for sending and removing messages -->
<button type="button" class="btn variant-filled">
   <!-- Bind Child's 'message' and 'messageRemoved' events to Parent's handlers -->
  <Child on:message={handleMessage} on:messageRemoved={handleMessageRemoved} />
</button>


