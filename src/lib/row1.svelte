<!-- <script>
  import { onMount } from "svelte";

  import CenterColumn from "../lib/centerColumn.svelte";
  import LeftColumn from "../lib/leftColumn.svelte";
  import RightColumn from "../lib/rightColumn.svelte";
  import SlidingList from "../lib/SlidingList.svelte";
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
  let slide = 1;
  function changeSlide(no) {
    slide = no;
  }
  import img1 from "../img/1.jpg";
  import img2 from "../img/2.jpg";
  import img3 from "../img/3.jpg";
  import img4 from "../img/4.jpg";
  import img5 from "../img/5.jpg";
  import circle from "../img/circle.png";

  const imgarr = [img1, img2, img3, img4, img5];
  onMount(() => {
    handleOut();
  });
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

<style>
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
</style> -->
<script>
  import { onMount } from "svelte";
  import SlidingList from "../lib/SlidingList.svelte";
  import Cursor from "../lib/cursor.svelte";
  //images
  import img1 from "../img/1.jpg";
  import img2 from "../img/2.jpg";
  import img3 from "../img/3.jpg";
  import img4 from "../img/4.jpg";
  import img5 from "../img/5.jpg";
  const imgArr = [img1, img2, img3, img4, img5];
  const textData = [
    { yr: "1876", event: "where it all started" },
    {
      yr: "1948",
      event: "humble beginnings",
    },
    { yr: "1995", event: "we went global" },
    { yr: "2012", event: "growing strong" },
    { yr: "2021", event: "where we are now" },
  ];

  //variables
  let currentSlide = 1;
  let slide;
  let slides = [];
  let slideCount;
  let firstClone, lastClone;
  let pixelOffset = 0;

  const transitionend = () => {
    if (slides[currentSlide].id === firstClone.id) {
      slide.style.transition = "none";
      currentSlide = 1;
      pixelOffset = -slide.clientWidth;
      slide.style.transform = `translateX(${pixelOffset}px)`;
    }
    if (slides[currentSlide].id === lastClone.id) {
      slide.style.transition = "none";
      currentSlide = slides.length - 2;
      pixelOffset = -currentSlide * slide.clientWidth;
      slide.style.transform = `translateX(${pixelOffset}px)`;
    }
  };

  function changeSlide(num) {
    if (currentSlide > 0 && currentSlide < slides.length - 1) {
      let slide1 = currentSlide;
      currentSlide += num;
      let slide2 = currentSlide;
      if (num == 1) {
        slides[slide1].querySelector(".text").classList.add("do-text-for-next");
        slides[slide2]
          .querySelector(".text")
          .classList.add("do-text-back-next");
        slides[slide1]
          .querySelector(".subtext")
          .classList.add("do-text-for-prev");
        slides[slide2]
          .querySelector(".subtext")
          .classList.add("do-text-back-prev");
      } else {
        slides[slide1].querySelector(".text").classList.add("do-text-for-prev");
        slides[slide2]
          .querySelector(".text")
          .classList.add("do-text-back-prev");
        slides[slide1]
          .querySelector(".subtext")
          .classList.add("do-text-for-next");
        slides[slide2]
          .querySelector(".subtext")
          .classList.add("do-text-back-next");
      }
      slides[slide1].querySelector("img").classList.add("do-blur");
      slides[slide2].querySelector("img").classList.add("do-blur");

      setTimeout(() => {
        slides[slide1].querySelector("img").classList.remove("do-blur");
        slides[slide2].querySelector("img").classList.remove("do-blur");
        // slides[slide1].querySelector('.text').classList.remove("do-text-for");
        // slides[slide2].querySelector('.text').classList.remove("do-text-back");
        if (num == 1) {
          slides[slide1]
            .querySelector(".text")
            .classList.remove("do-text-for-next");
          slides[slide2]
            .querySelector(".text")
            .classList.remove("do-text-back-next");
          slides[slide1]
            .querySelector(".subtext")
            .classList.remove("do-text-for-prev");
          slides[slide2]
            .querySelector(".subtext")
            .classList.remove("do-text-back-prev");
        } else {
          slides[slide1]
            .querySelector(".text")
            .classList.remove("do-text-for-prev");
          slides[slide2]
            .querySelector(".text")
            .classList.remove("do-text-back-prev");
          slides[slide1]
            .querySelector(".subtext")
            .classList.remove("do-text-for-next");
          slides[slide2]
            .querySelector(".subtext")
            .classList.remove("do-text-back-next");
        }
      }, 2000);
      pixelOffset = -currentSlide * slide.clientWidth;
      slide.style.transition = "1s 0.4s";
      slide.style.transform = `translateX(${pixelOffset}px)`;
    }
  }

  //cursor function
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
  import circle from "../img/circle.png";
  let cursorSymbol = dot;

  function changeSlideNum(no) {
    let num = no - currentSlide;
    changeSlide(num);
  }

  onMount(() => {
    slideCount = slides.length;
    firstClone = slides[1].cloneNode(true);
    lastClone = slides[slideCount - 1].cloneNode(true);
    slide.prepend(lastClone);
    slide.append(firstClone);
    slides[0] = lastClone;
    slides[slideCount] = firstClone;
    slideCount = slide.length;
    pixelOffset = -slide.clientWidth;
    slide.style.transition = "none";
    slide.style.transform = `translateX(${pixelOffset}px)`;
  });
</script>

<svelte:body />
<Cursor class="circle" img={cursorSymbol} />
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

<div
  class="Container"
  style={`cursor: url(${circle}) 11 11, auto;`}
  on:mouseleave={handleOut}
  on:mouseenter={handleIn}
>
  <div
    class="slides"
    bind:this={slide}
    on:transitionend={transitionend}
    on:mouseenter={() => {
      cursorSymbol = dot;
    }}
  >
    {#each imgArr as url, i}
      <div class={`slide`} bind:this={slides[i + 1]} id={i}>
        <img src={url} alt="img" />
        <div class="text">
          <div class="index"><span>0{i + 1}</span><span /><span>05</span></div>
          <div class="event">{textData[i].event}</div>
          <div class="yr">
            <span>{textData[i].yr[0]}</span>
            <span>{textData[i].yr[1]}</span>
            <span>{textData[i].yr[2]}</span>
            <span>{textData[i].yr[3]}</span>
          </div>
        </div>
        <div class="subtext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          consectetur obcaecati neque delectus ad! Soluta cumque, voluptates
          nesciunt laudantium sapiente consequatur eos et repudiandae dolor sit!
          Dolorum exercitationem neque reprehenderit?
        </div>
      </div>
    {/each}
  </div>
  <div
    class="prev"
    on:click={() => {
      changeSlide(-1);
    }}
    on:mouseenter={() => {
      cursorSymbol = leftArrow;
    }}
  />
  <div
    class="next"
    on:click={() => {
      changeSlide(1);
    }}
    on:mouseenter={() => {
      cursorSymbol = rightArrow;
    }}
  />
  <div
    class="slider"
    on:mouseenter={() => {
      cursorSymbol = dot;
    }}
  >
    <SlidingList {changeSlideNum} />
  </div>
</div>

<style>
  svg {
    display: block;
  }
  .Container,
  .slides {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    cursor: url("../img/circle.png");
  }
  .Container {
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .prev,
  .next {
    position: absolute;
    height: 100%;
    width: 15%;
  }
  .prev {
    left: 0;
    border-right: 5px solid white;
  }
  .next {
    right: 0;
    border-left: 5px solid white;
  }
  .slide {
    min-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .slide > img {
    width: 100%;
    height: 100%;
    transform: scale(1.5);
  }
  .text {
    position: absolute;
    top: 30%;
    width: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .text > .event {
    text-transform: capitalize;
    font-size: 1.5em;
    font-weight: 600;
    color: goldenrod;
  }
  .text > .index {
    font-size: 2em;
    font-weight: 900;
    color: white;
  }
  .text > .index > span:nth-child(2) {
    width: 3px;
    height: 40px;
    background: black;
    display: inline-block;
    transform: rotateZ(27deg) translate(5px, 9px);
  }
  .text > .index > span:first-child {
    transform: translateY(-10px);
    display: inline-block;
  }
  .text > .index > span:last-child {
    transform: translateY(10px);
    display: inline-block;
  }
  .text > .yr > span {
    font-size: 4em;
    font-weight: 900;
    display: inline-block;
    color: white;
  }

  .subtext {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    font-weight: 900;
    color: aqua;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 4;
  }

  /* @keyframes motion-blur {
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
  } */
  @keyframes index-motion-1 {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
    }
  }
  @keyframes index-motion-2 {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
    }
  }
  @keyframes rotate-yr {
    0% {
      -webkit-transform-origin: top;
      transform: rotateX(-90deg);
    }
    100% {
      -webkit-transform-origin: top;
      transform: rotateX(0deg);
    }
  }
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

  @keyframes motion-text-for {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    15% {
      transform: translate(-55%, -50%) scale(0.97);
    }
    30% {
      filter: url(#blur0);
      transform: scale(1, 0.93);
      transform: translate(-65%, -50%) scale(0.93);
    }
    45% {
      filter: url(#blur1);
      transform: translate(-75%, -50%) scale(0.88);
    }
    60% {
      opacity: 1;
      filter: url(#blur2);
      transform: translate(-90%, -50%) scale(0.82);
    }
    75%,
    100% {
      opacity: 0;
      filter: url(#blur3);
      transform: translate(-135%, -50%) scale(0.8);
    }
  }

  @keyframes motion-text-back {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    15% {
      transform: translate(-45%, -50%) scale(0.97);
    }
    30% {
      transform: scale(1, 0.93);
      transform: translate(-35%, -50%) scale(0.93);
    }
    45% {
      transform: translate(-25%, -50%) scale(0.88);
    }
    60% {
      opacity: 1;
      transform: translate(-10%, -50%) scale(0.82);
    }
    75%,
    100% {
      opacity: 0;
      transform: translate(35%, -50%) scale(0.8);
    }
  }
  @keyframes motion-zoom {
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .do-blur {
    animation: motion-zoom 0.5s ease-out forwards,
      motion-blur 0.1s linear forwards 0.5s,
      motion-blur 0.4s linear reverse forwards 0.6s,
      motion-zoom 0.3s ease-out reverse forwards 1s;
  }
  /* .do-blur {
    animation: 
    motion-blur 0.3s linear forwards 0.1,
    motion-blur 0.4s linear reverse forwards 0.4s;
  } */

  /* next */
  .do-text-back-next .index span:last-child,
  .do-text-back-prev .index span:last-child {
    animation: index-motion-2 1s ease-out 1.3s;
  }
  .do-text-back-next .index span:first-child,
  .do-text-back-prev .index span:first-child {
    animation: index-motion-1 1s ease-out 1.3s;
  }
  .do-text-back-next .yr span:nth-child(2),
  .do-text-back-prev .yr span:nth-child(2) {
    animation: rotate-yr 0.6s ease-out 1s;
    /* color: white; */
  }
  .do-text-back-next .yr span:nth-child(3),
  .do-text-back-prev .yr span:nth-child(3) {
    animation: rotate-yr 0.6s ease-out 1.2s;
    /* color: white; */
  }
  .do-text-back-next .yr span:nth-child(4),
  .do-text-back-prev .yr span:nth-child(4) {
    animation: rotate-yr 0.8s ease-out 1.3s;
    /* color: white; */
  }
  .do-text-for-next {
    animation: motion-text-for 0.7s linear forwards;
  }
  .do-text-back-next {
    animation: motion-text-back 0.7s linear reverse forwards 0.8s;
    transform: translate(35%, -50%) scale(0.8);
    opacity: 0;
  }

  /* prev */
  .do-text-for-prev {
    animation: motion-text-back 0.7s linear forwards;
  }
  .do-text-back-prev {
    animation: motion-text-for 0.7s linear reverse forwards 0.8s;
    transform: translate(-135%, -50%) scale(0.8);
    opacity: 0;
  }
</style>
