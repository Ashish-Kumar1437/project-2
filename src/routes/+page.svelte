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
  import SlidingList from "../lib/SlidingList.svelte";
  let cursorSymbol = dot;
  let slide = 0;
  function changeSlide(no) {
    slide = no;
  }

  // images
  import img1 from "../img/1.jpg";
  import img2 from "../img/2.jpg";
  import img3 from "../img/3.jpg";
  import img4 from "../img/4.jpg";
  import img5 from "../img/5.jpg";
  import circle from "../img/circle.png";
  import Row2 from "../lib/row2.svelte";
  const imgarr = [img1, img2, img3, img4, img5];
</script>

<svelte:body />
<Cursor class="circle" img={cursorSymbol} />
<div
  class="row1"
  style={`cursor: url(${circle}) 11 11, auto;`}
  on:mouseleave={handleOut}
  on:mouseenter={handleIn}
>
  <div
    on:mouseenter={() => {
      cursorSymbol = leftArrow;
    }}
    on:click={() => {
      slide -= 1;
      if (slide < 0) {
        slide = 4;
      }
    }}
  >
    <LeftColumn />
  </div>
  <div
    on:mouseenter={() => {
      cursorSymbol = dot;
    }}
  >
    <CenterColumn {slide} {imgarr} />
  </div>
  <div
    on:mouseenter={() => {
      cursorSymbol = rightArrow;
    }}
    on:click={() => {
      slide += 1;
      if (slide >= 5) {
        slide = 0;
      }
    }}
  >
    <RightColumn />
  </div>
  <div
    class="slider"
    on:mouseenter={() => {
      cursorSymbol = dot;
    }}
  >
    <SlidingList {changeSlide} {slide} {imgarr} />
  </div>
</div>

<Row2 />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Laila:wght@500&display=swap");
  .row1 {
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .slider {
    z-index: 4;
    position: relative;
  }
</style>
