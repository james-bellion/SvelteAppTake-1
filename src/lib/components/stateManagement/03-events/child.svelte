<!-- child.svelte -->
<script lang="ts">
   // Import the createEventDispatcher function from Svelte
  import { createEventDispatcher } from 'svelte'

  // Create an event dispatcher instance
  const dispatch = createEventDispatcher()

    // Initialize variables for the message and its sent state
  let message = ''
  let messageSent = false

  // function to send or remove messages
  function sendMessage() {

    //check if the message is not sent
    if (!messageSent) {
      // set the message content
      message = 'Hello from Child!'
      //dispatch the "message" event to the parent component with the message content
      dispatch('message', message)
      // update the message
      messageSent = true
    } else {

      // clear the message content
      message = ''
      // Dispatch the 'messageRemoved' event to the Parent component
      dispatch('messageRemoved', message)
      // Update the message sent state
      messageSent = false
    }
  }
</script>

<!-- Button to send or remove the message -->
<button on:click={sendMessage}>
  {messageSent ? "Remove Message from Parent" : "Send Message to Parent"}
</button>


