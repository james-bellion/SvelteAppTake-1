<!-- allow to render out our nav links in multiple different places throught the app  -->

<!-- added list nav class from skeleton  -->

<!-- import this component into our root layout and add to sidebar left Slot -->

<script lang="ts">
    import { getDrawerStore } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores'
    const drawerStore = getDrawerStore();

 function drawerClose(): void {
		drawerStore.close()
	}


</script>

<nav class="list-nav p-4">
    <ul>
        <li><a href="/" aria-current={$page.url.pathname === '/'} on:click={drawerClose}>Notes</a></li>
        <li><a href="/album" aria-current={$page.url.pathname === '/album'} on:click={drawerClose}>Album</a></li>
        <li><a href="/movies" aria-current={$page.url.pathname === '/movies'} on:click={drawerClose}>Movies</a></li>
        <li><a href="/?test=3" on:click={drawerClose}>Other Page 3</a></li>
    </ul>
</nav>

<!-- aria-current={$page.url.pathname === '/'} usefull for accessibility and css if you want to know what page your on to  -->