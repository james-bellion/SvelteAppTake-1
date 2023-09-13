import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store'

// type for our notes
type Note = {
    id: string
    content: string
    tags: string[]
}


// pass the type to the generic writable type when we are defining our store

// the first value of the localstorage store function is the key that will be used to
// store the data in local storage
// and the second value is the defualt value.
export const noteStore: Writable<Note[]> = localStorageStore('notes', [])

// Log notes when retrieving them
console.log('Notes in store:', noteStore);