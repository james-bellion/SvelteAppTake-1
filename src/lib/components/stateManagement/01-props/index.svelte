<!-- This is my main component in my '01-props folder'
- It imports the Count, Increment, and Decrement components from their respective Svelte files.

- It initializes a count variable and functions increment and decrement to manage the count.

- In the HTML, it displays buttons to increment and decrement the count and also displays
the current count value. -->

<!-- PARENT COMPONENT -->

<script lang=ts>
  import Count from './count.svelte'
  import Increment from './increment.svelte'
  import Decrement from './decrement.svelte'

  let count = 0

  const increment = () => (count += 1)
  const decrement = () => (count -= 1)

</script>

<div class="container">
  <Increment {increment} />
  <Count {count} />
  <Decrement {decrement} />
</div>