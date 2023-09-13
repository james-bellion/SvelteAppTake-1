<script lang="ts">

	
	

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		Modal,
		Toast,
		getDrawerStore,
		LightSwitch,

		initializeStores

	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen():void {
		drawerStore.open()
	}

	
</script>


<Toast position="tr"/>
<Modal />

<Drawer>
	<Navigation />
</Drawer>

<!-- change the style of the slotSidebarLeft prop on the app shell component, set the background to a slightly whiter background than the page content -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10"> 
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- hamburger menu here: svg inside of a btn-->
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl uppercase">James Notes</strong></svelte:fragment>
				<LightSwitch />
			<svelte:fragment slot="trail">
				<Avatar initials="JB" width="w-10" background="bg-primary-500" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	

	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	
	<!-- ---- / ---- -->

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment> -->

</AppShell>

<!-- dev notes 
fragments are a way to group elements without adding an extra node to the dom
in this case it gives us the ability to place content in a name slot without having to wrap it in a div
good pratice in svelte?   -->

