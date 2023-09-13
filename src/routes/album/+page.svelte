<!-- album.svelte -->
<script lang="ts">
 import { FileDropzone } from '@skeletonlabs/skeleton';

let files: FileList | undefined;

// Define your accept and multiple variables
let accept = ".png, .jpg, .jpeg, .gif, JPG, PNG";
let multiple = true;
let name = "fileInput"; // Add a name prop
let uploadedImages: File[] = []; // Store uploaded images here

// Function to handle file uploads
function handleFileUpload(event: CustomEvent<FileList>) {
  const uploadedFiles = event.detail;
  // Append uploaded files to the existing list
  for (let i = 0; i < uploadedFiles.length; i++) {
    uploadedImages = [...uploadedImages, uploadedFiles[i]];
  }
}

  </script>
  
  <div>
    
    <div>
      <h1>Album page</h1>
      <div class="p-4 m-4">
        <FileDropzone placeholder="drop your file here" {accept} {multiple} name={name} bind:files on:file-input={handleFileUpload} />
      </div>
    
      <!-- Rest of your code -->
    </div> 
    <section class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
        </div>
      </div>
    
    </section>

    <section class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <!-- Display uploaded images -->
      {#each uploadedImages as image}
      <div class="grid gap-4">
        <div>
          <!-- Use URL.createObjectURL to display uploaded images -->
          <img class="h-auto max-w-full rounded-lg" src={URL.createObjectURL(image)} alt="" />
        </div>
      </div>
    {/each}
    </section>
  </div>