<script>
  import { onMount } from "svelte";
  import { imgGallery } from "../../lib/ImgGallery.js";
  let el, h1;
  onMount(() => {
    imgGallery(el);
  });
</script>

<svelte:window />
<canvas bind:this={el} />

<style>
  canvas {
    width: 100vw !important;
  }
</style>
