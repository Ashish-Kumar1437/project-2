<!-- <script>
  import { onMount } from "svelte";
  import { rotatingCube } from "../lib/cube";
  import Cursor from "../lib/cursor.svelte";

  let el;

  onMount(() => {
    rotatingCube(el);
  });
</script>

<Cursor />

<canvas bind:this={el} /> -->
<script>
  import CenterColumn from "../lib/centerColumn.svelte";
  import LeftColumn from "../lib/leftColumn.svelte";
  import RightColumn from "../lib/rightColumn.svelte";
  import Cursor from "../lib/cursor.svelte";
  function handleOut() {
    const circle = document.querySelector(".circle");
    circle.style.display = "none";
  }
  function handleIn() {
    const circle = document.querySelector(".circle");
    circle.style.display = "inline-block";
  }
  import dot from "../img/dot.png";
  import rightArrow from "../img/right-arrow.png";
  import leftArrow from "../img/left-arrow.png";
  let cursorSymbol = dot;
</script>

<svelte:body on:mouseleave={handleOut} on:mouseenter={handleIn} />
<Cursor class="circle" img={cursorSymbol} />
<div>
  <div
    on:mouseenter={() => {
      cursorSymbol = leftArrow;
      console.log("hello");
    }}
  >
    <LeftColumn />
  </div>
  <div
    on:mouseenter={() => {
      cursorSymbol = dot;
    }}
  >
    <CenterColumn />
  </div>
  <div
    on:mouseenter={() => {
      cursorSymbol = rightArrow;
    }}
  >
    <RightColumn />
  </div>
</div>

<style>
  div {
    display: flex;
  }
</style>
