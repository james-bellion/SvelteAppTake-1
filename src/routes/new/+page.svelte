<script lang="ts">
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/store';
	import { InputChip,  type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
	// **using tags**
	// requiers us to combine an array of string to the components value prop

	const toastStore = getToastStore();

	//define an empty array of strings.
	// bind it to the value of the input chip component.
	// add a content variable to bind to the textarea.
	// bind the tagsvariable to the input chip component.
	let tags: string[] = [];
	let content: string;

	// trigger the toast: call the toast store.trigger
	const t: ToastSettings = {
		message: 'Note created successfully',
		background: 'variant-filled-success'
	};

	// this func will add a click handler to the button
	// use the note store created earlier to actually add the note
	// then reset the content and tags after the note has been added.
	function createNote(): void {
		noteStore.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				tags
			}
		]);
		content = '';
		tags = [];
		toastStore.trigger(t);
		goto('/');
	}
	console.log(tags)
</script>

<!-- build out the form to add new notes -->

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<h2>New Note</h2>
		<textarea bind:value={content} class="textarea" rows="5" placeholder="Note content..." />
		<InputChip bind:value={tags} name="tags" placeholder="Tags..." />
		<button type="button" on:click={createNote} class="btn variant-ghost-primary self-end">Post</button>
	</form>
</div>
