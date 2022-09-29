<script>
  import CenterColumnContext from "./centerColumnContext.svelte";
  export let slide, imgarr;
  const thoughts = [
    "Keep your face always toward the sunshine—and shadows will fall behind you",
    "Extraordinary things are always hiding in places people never think to look",
    "Setting goals is the first step in turning the invisible into the visible",
    "I’ve missed more than 9000 shots in my career I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
  ];
</script>

<div class="container">
  <div
    class="text-container"
    style={`transform: translateX(-${slide * 100}vw)`}
  >
    {#each thoughts as thought, i}
      <CenterColumnContext id={i + 1} text={thought} />
    {/each}
  </div>
  <div
    class="background-container"
    style={`transform: translateX(-${401 - slide * 100}vw)`}
  >
    {#each { length: 5 } as _, i}
      <img src={imgarr[i]} alt="jpg" />
    {/each}
  </div>
</div>

<style>
  .container {
    /* background-image: url(../img/1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
  }
  .text-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
  }
  .background-container {
    display: flex;
    position: absolute;
    min-height: 100vh;
    min-width: 100.1vw;
    top: 0;
    z-index: -1;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
  }
  .background-container > img {
    min-width: 100%;
    max-height: 100vh;
    min-height: 100vh;
  }
</style>
