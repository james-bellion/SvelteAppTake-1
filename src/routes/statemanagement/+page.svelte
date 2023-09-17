<!-- - this is a higer-level component in my root folder
- <details> element that can be toggled open/closed to reveal the Props component. -->

<script lang="ts">
  import Props from '$lib/components/stateManagement/01-props/index.svelte'
  import Bind from '$lib/components/stateManagement/02-bind/index.svelte'
  import Events from '$lib/components/stateManagement/03-events/parent.svelte'

</script>

<div class="flex items-center justify-center p-4">
  <h1>Welcome to My svelte state management Guide</h1>
</div>

<div class="flex items-center justify-center p-4">
  <img height="500px" width="300px" src="https://raw.githubusercontent.com/mattcroat/joy-of-code/main/posts/svelte-state-management/images/props.webp" alt="data flow diagram" />
</div>

<div class="flex items-center justify-center p-4">
  <p>Remember, by default the data in your app flows down from the parent to child component like a waterfall</p>
</div>

<div class="flex items-center justify-center p-4">
  <p>You can co-locate or lift state up to the parent component thats going to pass the props to children</p>
</div>

<details class="card p-4 m-2">
  <summary><strong>Props</strong></summary>
  <Props />
  <h2 class="p-2">Data flow</h2>
  <p class="p-2">The count, increment, and decrement variables and functions are defined in index.svelte.</p>
  <code>
    <p class="p-2">
      These values and functions are passed as props to the child components (Count, Increment, and Decrement) when you use them like this: <code>&lt;Increment increment /&gt;</code>.
    </p>
  </code>
  <h3 class="p-2">Summary</h3>
  <ul class="p-2">
    <li class="p-1">👉 I have a clear seperation of components in my '01-props' folder, making the code modular and easier to maintain.</li>
    <li class="p-1">👉 The +page.svelte component imports and displays the Props component.</li>
    <li class="p-1">👉 The Props component itself doesn't define any data but relies on the count, increment, and decrement props provided by its parent (index.svelte).</li>
    <li class="p-1">👉 This set up alows me to manage the state('count') abd the functions ('increment') and ('decrement') in a parent component 'index.svelte' and pass them down to child components('Cont', 'Increment' and 'decrement') as needed. </li>
    <li class="p-1">👉 When You interact with the buttons in 'Index.svelte', they call the 'increment' and decrement functions, which update the 'count variable', and this change is reflected in the child components that display the count</li>
    <li class="p-1">👉 In summary, this structure allows us to manage state and functions in a parent component and share them with child components, creating a clear flow of data and making your code organized and maintainable.</li>
  </ul>
</details>

<details class="card p-4  m-2">
  <summary><strong>Bind</strong></summary>
  <Bind />
  <h2>In summary, when you run this code:</h2>
  <ul>
    <li class="p-1">👉 The input variable in index.svelte serves as a shared state.</li>
    <li class="p-1">👉 The Input component allows users to input text, and any changes to this input are reflected in the input variable.</li>
    <li class="p-1">👉The Output component displays the value of the input variable in a paragraph element.</li>
    <li class="p-1">👉 Thanks to two-way binding, changes in the input field are immediately displayed in the output paragraph.</li>
    <p class="p-2">This setup demonstrates how Svelte's two-way binding simplifies the process of syncing data between components and the UI.</p>
  </ul>
</details>


<details  class="card p-4  m-2">
  <summary><strong>Component Events</strong></summary>
  <Events />
  <p class="p-3">Dispatch a custom event from a child component and listen to it in the parent component... So here we have the parent component as the listener, the commen state and then we can fire an event from the children and then the data flows in two directions.. note that events dont bubble like regular dom events harder if you have lots of nested elements because you have to pass them along to the other components.  </p>
  <ul>
    <li class="p-1">👉 The Child component uses the createEventDispatcher function to create an event dispatcher instance (dispatch). It also maintains the message variable to store the message content and a messageSent flag to track whether the message is sent or removed.</li>
    <li class="p-1">👉 The sendMessage function in the Child component toggles between sending and removing the message based on the messageSent flag. It dispatches the message event to the Parent component with the message content or dispatches the messageRemoved event to clear the message.</li>
    <li class="p-1">👉 The button text in the Child component dynamically changes based on the messageSent flag.</li>
    <li class="p-1">👉 In the Parent component, it imports the Child component and initializes a variable (message) to store the received message.</li>
    <li class="p-1">👉 The handleMessage function in the Parent component is triggered when the Child component dispatches the message event. It updates the message variable with the received message content.</li>
    <li class="p-1">👉 The handleMessageRemoved function in the Parent component is triggered when the Child component dispatches the messageRemoved event. It clears the message variable.</li>
    <li class="p-1">👉 The index.svelte file imports and displays the Parent component.</li>
    <p class="p-1">This setup allows the Child component to send or remove a message, and the Parent component receives and displays the message accordingly.</p>
  </ul>
</details>

<details class="card p-4  m-2">
  <summary><strong>Svelte Stores</strong></summary>
  <!-- add store component -->

</details>

