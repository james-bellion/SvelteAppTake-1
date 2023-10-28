  <!-- <script lang='ts'>
  import { Table } from '@skeletonlabs/skeleton';
  import { tableMapperValues } from '@skeletonlabs/skeleton';
  import type { BurgerItem } from '../../types/types';
  

  // Your source data for burgers
  export const sourceData: BurgerItem[] = [
    { position: 1, name: 'Cheeseburger', Price: 10.00, symbol: 'CB' },
    { position: 2, name: 'ChickenBurger', Price: 11.00, symbol: 'CHX' },
    { position: 3, name: 'ManBearPig', Price: 15.00, symbol: 'MBP' },
    { position: 4, name: 'Vegasium', Price: 12.00, symbol: 'V' },
    { position: 5, name: 'BigAl', Price: 18.00, symbol: 'BAL' },
  ];

  // Create a TableSource object
  const tableData = {
    // A list of heading labels including the button column
    head: ['Name', 'Symbol', 'Price', 'Actions'],

   // Map BurgerItem objects to arrays including the button markup
    body: tableMapperValues(sourceData, ['name', 'symbol', 'Price']).map(item => {
      const burgerId = item[3]; // Assuming item[3] is the burger's unique identifier (position)
      return [...item, `<button type="button" class="btn variant-filled">Check me out</button>`];
    }),

    // Optional: The data returned when interactive is enabled and a row is clicked.
    meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'Price']),
  };

  // Event handler for row selection
  function mySelectionHandler(event: CustomEvent<string[] | BurgerItem>) {
    if (Array.isArray(event.detail)) {
      // Handle the case where event.detail is an array of strings
      // You might want to handle this differently based on your use case
      console.log('Selected Row Data (String Array):', event.detail);
    } else {
      // Handle the case where event.detail is a BurgerItem object
      console.log('Selected Row Data (BurgerItem):', event.detail);
    }
  }

</script>

<h1>Select Burger</h1>



 <Table source={tableData} interactive={true} on:selected={mySelectionHandler} />   -->

 <!-- <script lang="ts">
  import { burgers } from './data';
  import { Table } from '@skeletonlabs/skeleton';
  import { tableMapperValues } from '@skeletonlabs/skeleton';
  import { onNavigate } from '$app/navigation';
  import type { BurgerItem } from '../../types/types';

  const tableData = {
    head: ['Name', 'Symbol', 'Price', 'Actions'],
    body: tableMapperValues(burgers, ['name', 'symbol', 'Price']).map(item => {
      const burgerId = parseInt(item[3], 10);

      return [...item, `<button type="button" class="btn variant-filled" on:click={() => onNavigate(\`/burgers/details/\${burgerId}\`)}>Check me out</button>`];
    }),
    meta: tableMapperValues(burgers, ['position', 'name', 'symbol', 'Price']),
  };

  function mySelectionHandler(event: CustomEvent<string[] | BurgerItem>) {
    if (Array.isArray(event.detail)) {
      console.log('Selected Row Data (String Array):', event.detail);
    } else {
      console.log('Selected Row Data (BurgerItem):', event.detail);
    }
  }
</script>

<h1>Select Burger</h1>
<Table source={tableData} interactive={true} on:selected={mySelectionHandler} /> -->

<script lang='ts'>
  export let data: { summeries: {position: number; name: string; Price: number; symbol: string } [] }
  import type { BurgerItem } from '../../types/types';
  import { Table } from '@skeletonlabs/skeleton';
  import { tableMapperValues } from '@skeletonlabs/skeleton';

  export const sourceData: BurgerItem[] = [
    { position: 1, name: 'Cheeseburger', Price: 10.00, symbol: 'CB' },
    { position: 2, name: 'ChickenBurger', Price: 11.00, symbol: 'CHX' },
    { position: 3, name: 'ManBearPig', Price: 15.00, symbol: 'MBP' },
    { position: 4, name: 'Vegasium', Price: 12.00, symbol: 'V' },
    { position: 5, name: 'BigAl', Price: 18.00, symbol: 'BAL' },
  ];

  // Create a TableSource object
  const tableData = {
    // A list of heading labels including the button column
    head: ['Name', 'Symbol', 'Price', 'Actions'],

   // Map BurgerItem objects to arrays including the button markup
    body: tableMapperValues(sourceData, ['name', 'symbol', 'Price']).map(item => {
      const burgerId = item[3]; // Assuming item[3] is the burger's unique identifier (position)
      return [...item, `<button type="button" class="btn variant-filled">Check me out</button>`];
    }),

    // Optional: The data returned when interactive is enabled and a row is clicked.
    meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'Price']),
  };

  // Event handler for row selection
  function mySelectionHandler(event: CustomEvent<string[] | BurgerItem>) {
    if (Array.isArray(event.detail)) {
      // Handle the case where event.detail is an array of strings
      // You might want to handle this differently based on your use case
      console.log('Selected Row Data (String Array):', event.detail);
    } else {
      // Handle the case where event.detail is a BurgerItem object
      console.log('Selected Row Data (BurgerItem):', event.detail);
    }
  }
</script>

<h1>burgers</h1>

<Table source={tableData} interactive={true} on:selected={mySelectionHandler} />


<!-- fix thsi file -->

















