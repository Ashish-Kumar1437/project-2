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
  import Mimg1 from "../img/birds.png";
  import Mimg2 from "../img/clouds.png";
  import Mimg3 from "../img/rainbow.png";
  import Mimg4 from "../img/cloudy.png";
  import Mimg5 from "../img/clouds.png";
  const Mimgarr = [Mimg1, Mimg2, Mimg3, Mimg4, Mimg5];
  function moveImg(event) {
    let el = document.querySelector(".Mimgactive");
    var a = 50 + (event.clientY * 10) / window.innerWidth + "%";
    var b = -5 + (event.clientX * 8) / window.innerHeight + "%";
    el.style.top = b;
    el.style.left = a;
  }
</script>

<div class="container" on:mousemove={moveImg}>
  <div
    class="text-container"
    style={`transform: translateX(-${slide * 100}vw)`}
  >
    {#each thoughts as thought, i}
      <CenterColumnContext id={i + 1} text={thought} />
    {/each}
  </div>
  <div
    class="mimg-container"
    style={`transform: translateX(-${401 - slide * 100}vw)`}
  >
    {#each { length: 5 } as _, i}
      <div>
        <img
          class="mimg {4 - slide == i ? 'Mimgactive' : ' '}"
          src={Mimgarr[i]}
          alt="jpg"
        />
      </div>
    {/each}
  </div>
  <div
    class="background-container"
    style={`transform: translateX(-${401 - slide * 100}vw)`}
  >
    {#each { length: 5 } as _, i}
      <img
        class="bg {4 - slide == i ? 'active' : ' '}"
        src={imgarr[i]}
        alt="jpg"
      />
    {/each}
  </div>
</div>

<style>
  .container {
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
  }
  .text-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    transition: all 1s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
    z-index: 10;
  }
  .background-container,
  .mimg-container {
    display: flex;
    position: absolute;
    min-height: 100vh;
    min-width: 100.1vw;
    top: 0;
    z-index: -1;
    transition: all 1s 0.2s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
  }
  .mimg-container > div {
    min-width: 100vw;
    position: relative;
    max-height: 100vh;
    min-height: 100vh;
  }
  .mimg-container {
    z-index: 1;
    transition: all 1s;
  }
  .bg {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .mimg {
    width: 30%;
    height: 30%;
    position: absolute;
    top: -10%;
    z-index: 9;
    left: 50%;
    transition: all 1s;
    transform: translateX(-50%);
  }
  .active {
    animation: change 1s 0.2s;
  }
  @keyframes change {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(5);
    }
    100% {
      transform: scaleX(1);
    }
  }
</style>
