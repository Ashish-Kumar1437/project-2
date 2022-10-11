<!-- <script>
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
  import { onMount } from "svelte";
  const Mimgarr = [Mimg1, Mimg2, Mimg3, Mimg4, Mimg5];
  function moveImg(event) {
    let el = document.querySelector(".Mimgactive");
    var a = 50 + (event.clientY * 10) / window.innerWidth + "%";
    var b = -5 + (event.clientX * 8) / window.innerHeight + "%";
    el.style.top = b;
    el.style.left = a;
  }

  const transitionend = () => {
    if (backgrounds[slide].id === firstClone.id) {
      bg.style.transition = "none";
      slide = 1;
      let pixelOffset = -bg.clientWidth;
      bg.style.trasform = `translateX(${pixelOffset}px)`;
    }
    if (backgrounds[slide].id === lastClone.id) {
      bg.style.transition = "none";
      slide = backgrounds.length - 2;
      let pixelOffset = -slide * bg.clientWidth;
      bg.style.trasform = `translateX(${pixelOffset}px)`;
    }
  };
  let bg;
  let backgrounds = [];
  let firstClone, lastClone;
  let bgCount = 0;
  onMount(() => {
    bgCount = bg.length;
    firstClone = backgrounds[1].cloneNode(true);
    lastClone = backgrounds[5].cloneNode(true);
    bg.prepend(lastClone);
    bg.append(firstClone);
    backgrounds[0] = lastClone;
    backgrounds[bgCount] = firstClone;
    bgCount = bg.length;
  });
</script>

<svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0"
  viewBox="0 0 1366 768"
  xml:space="preserve"
>
  <defs>
    <filter id="blur0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
    </filter>
    <filter id="blur1">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
    </filter>
    <filter id="blur2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="12 0" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
    </filter>
    <filter id="blur4">
      <feGaussianBlur in="SourceGraphic" stdDeviation="35 1" />
    </filter>
    <filter id="blur5">
      <feGaussianBlur in="SourceGraphic" stdDeviation="50 1" />
    </filter>
  </defs>
</svg>

<div class="Container" on:mousemove={moveImg}>
  <div
    class="text-Container"
    style={`transform: translateX(-${slide * 100}vw)`}
  >
    {#each thoughts as thought, i}
      <CenterColumnContext id={i + 1} text={thought} />
    {/each}
  </div>
  <div
    class="mimg-Container"
    style={`transform: translateX(-${400 - slide * 100}vw)`}
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
    bind:this={bg}
    class="background-Container"
    style={`transform: translateX(-${400 - slide * 100}vw)`}
    on:transitionend={transitionend}
  >
    {#each { length: 5 } as _, i}
      <img
        bind:this={backgrounds[i + 1]}
        class="bg {4 - slide == i ? 'do-blur' : ' '}"
        src={imgarr[i]}
        alt="jpg"
        id={i}
      />
    {/each}
  </div>
</div>

<style>
  .Container {
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
    position: relative;
  }
  .text-Container {
    display: flex;
    width: 100vw;
    height: 100vh;
    transition: all 1s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
    z-index: 10;
  }
  .background-Container,
  .mimg-Container {
    display: flex;
    position: absolute;
    min-height: 100vh;
    min-width: 100.1vw;
    top: 0;
    z-index: -1;
    transition: all 0.5s 0.2s;
    transition-timing-function: cubic-bezier(0, 0.5, 0.75, 1);
  }
  .mimg-Container > div {
    min-width: 100vw;
    position: relative;
    max-height: 100vh;
    min-height: 100vh;
  }
  .mimg-Container {
    z-index: 1;
    transition: all 1s;
  }
  .bg {
    min-width: 100vw;
    height: 100vh;
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
  /* .active {
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
  } */

  @keyframes motion-blur {
    0% {
      filter: url(#blur0);
      transform: scale(1, 1);
    }
    15% {
      filter: url(#blur1);
      transform: scale(1, 0.98);
    }
    30% {
      filter: url(#blur2);
      transform: scale(1, 0.93);
    }
    45% {
      filter: url(#blur3);
      transform: scale(1.1, 0.9);
    }
    60% {
      filter: url(#blur4);
      transform: scale(1.2, 0.88);
    }
    75%,
    100% {
      filter: url(#blur5);
      transform: scale(1.35, 0.85);
    }
  }

  .do-blur {
    animation: motion-blur 0.1s linear forwards,
      motion-blur 0.4s linear reverse forwards 0.1s;
  }
</style> -->
