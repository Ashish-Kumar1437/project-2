<script>
  function handleMouse(e) {
    const circle = document.querySelector(".circle");
    const mouseX = e.clientX + 6;
    const mouseY = e.clientY + 6;
    circle.style.top = `${mouseY}px`;
    circle.style.left = `${mouseX}px`;
  }

  export let img;
</script>

<svelte:window on:mousemove={handleMouse} />
<div class="circle">
  <img src={img} alt="dot" />
</div>

<style>
  .circle {
    display: inline-block;
    position: fixed;
    z-index: 999;
    pointer-events: none;
    /* border: 2px solid black; */
    /* background-color: black;s */
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 600px) {
    .circle {
      display: none !important;
    }
  }
</style>
