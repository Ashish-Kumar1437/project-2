<script>
  import { onMount } from "svelte";
  import { rotatingCube } from "../lib/cube";

  let el;

  onMount(() => {
    rotatingCube(el);
  });
</script>

<canvas bind:this={el} />
