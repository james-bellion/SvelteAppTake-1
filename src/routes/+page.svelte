<script lang="ts">
	import { noteStore } from"$lib/store"
	import { Modal, getModalStore, type ToastSettings, getToastStore  } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
import { initializeStores } from '@skeletonlabs/skeleton';



const modalStore = getModalStore();
const toastStore = getToastStore();

	function deleteNote(noteId: string): void {
		const confirmDelete: ModalSettings = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete this note?',
			response: (r: boolean) => {
				if (r) {
					noteStore.update((notes: any[]) => notes.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: 'Note deleted successfully',
						background: 'variant-filled-success'
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-ghost-error'
				});
			}
		};
		modalStore.trigger(confirmDelete);
	}
</script>


<!-- heading with link to create a new note -->
<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<h2>Notes</h2>
		<a href="/new" class="btn variant-ghost-primary">New Note</a>
	</div>

	<!-- render out the notes in a grid using skeletons card elements -->
	<!-- use the note store to get the notes, then map over them to render out a card for each note -->
	<!-- use the btn icon class to add a delete button to each card -->
	<div class="grid grid-cols-3 gap-4">
		{#each $noteStore as note}
		<div class="card p-4 variant-ghost-warning flex flex-col gap-2 relative">
			<button
				on:click={() => deleteNote(note.id)}
				class="btn-icon btn-icon-sm variant-filled-error absolute top-1.5 right-1.5">
				X
			</button>
			<div>
				{note.content}
			</div>
			<div class="flex gap-1 flex-wrap">
				{#each note.tags as tag}
				  <span class="badge variant-filled-secondary">{tag}</span>
				{/each}  
			</div>
		</div>
		{/each}
		</div>
	</div>

