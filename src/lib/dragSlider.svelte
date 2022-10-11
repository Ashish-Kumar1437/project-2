<script>
  import DragSliderCard from "./dragSliderCard.svelte";
  import user from "../img/user.png";
  import { onMount } from "svelte";
  import { add_styles } from "svelte/internal";
  const data = [
    [
      {
        rate: 5,
        titlename: "No hesitation in recommending Slider Revolution",
        text: "Its easy to use and converts visits into sales. They are always updating and there are a wealth of templates to choose from. Thank you Themepunch!",
        url: user,
        author: "Chris Beveridge",
      },
      {
        rate: 5,
        titlename: "Great effects and a lot of inspiration",
        text: "I often use Slider Revolution for customer projects where I want to achieve special optical effects that I could not achieve with any other program I know or only with a lot of programming effort. The many templates keep bringing me new ideas.",
        url: user,
        author: "Andy Brandon",
      },
    ],
    [
      {
        rate: 5,
        titlename: "Design much more and much better",
        text: "I've actually been working with Slider Revolution on and off for several years now, but have never used it as a Pro version, only free. However, now that I have installed the slider as a Pro version and built it into the header area of the page, I am able to not only easily change and customize each slide, but also design much more and much better on top of that.",
        url: user,
        author: "Ronny Schlichter",
      },
      {
        rate: 5,
        titlename: "The best dynamic website creator tool out there",
        text: "Silder Revolution is exactly that: A Revolution! I just learned about this last week, and I WISH i learned about it sooner. An immense library of refined templates to choose from is included. Inspirational. It Revolutionized the services I can offer my clients going forward. Thank you Themepunch!",
        url: user,
        author: "Einstein Mail",
      },
    ],
    [
      {
        rate: 5,
        titlename: "Great effects and a lot of inspiration",
        text: "I often use Slider Revolution for customer projects where I want to achieve special optical effects that I could not achieve with any other program I know or only with a lot of programming effort. The many templates keep bringing me new ideas.",
        url: user,
        author: "Gerhard Jager",
      },
      {
        rate: 5,
        titlename:
          "Slider Revolution has been an awesome addition to my design arsenal",
        text: "I've enjoyed Slider Revolution. It allowed me to take my design capabilities to a greater level, so I'm beyond satisfied and my client is as well.",
        url: user,
        author: "Tim Williams",
      },
    ],
  ];
  let box, slide;
  let slides = [];
  let sliding = 0;
  let startClientX = 0;
  let startPixelOffset = 0;
  let currentSlide = 1;
  let pixelOffset, slideCount;
  let firstClone, lastClone;
  const transitionend = () => {
    if (slides[currentSlide].id === firstClone.id) {
      slide.style.transition = "none";
      currentSlide = 1;
      pixelOffset = -slide.clientWidth;
      slide.style.trasform = `translateX(${pixelOffset}px)`;
    }
    if (slides[currentSlide].id === lastClone.id) {
      slide.style.transition = "none";
      currentSlide = slides.length - 2;
      pixelOffset = -currentSlide * slide.clientWidth;
      slide.style.trasform = `translateX(${pixelOffset}px)`;
    }
  };

  function startSlide(event) {
    if (event.touches) {
      event = event.touches[0];
    }
    if (sliding == 0) {
      sliding = 1;
      startClientX = event.clientX;
    }
  }
  function startSliding(event) {
    event.preventDefault();
    if (event.touches) {
      event = event.touches[0];
    }

    let deltaSlide = event.clientX - startClientX;

    if (sliding == 1 && deltaSlide != 0) {
      sliding = 2;
      startPixelOffset = pixelOffset;
    }

    if (sliding == 2) {
      pixelOffset = startPixelOffset + deltaSlide;
      slide.style.transition = "none";
      slide.style.transform = `translateX(${pixelOffset}px)`;
    }
  }
  function endSlide() {
    if (sliding == 2) {
      currentSlide =
        pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;

      pixelOffset = currentSlide * -slide.clientWidth;
      slide.style.transition = "1s ease-out";
      slide.style.transform = `translateX(${pixelOffset}px)`;
    }
    sliding = 0;
  }
  function oncircleClick(num) {
    currentSlide = num;
    pixelOffset = -currentSlide * slide.clientWidth;
    slide.style.transition = "1s ease-out";
    slide.style.transform = `translateX(${pixelOffset}px)`;
  }
  onMount(() => {
    slideCount = slides.length;
    firstClone = slides[1].cloneNode(true);
    lastClone = slides[slideCount - 1].cloneNode(true);
    slide.prepend(lastClone);
    slide.append(firstClone);
    slides[0] = lastClone;
    slides[slideCount] = firstClone;
    slideCount = slides.length;
    pixelOffset = -slide.clientWidth;
    slide.style.transform = `translateX(${pixelOffset}px)`;
  });
</script>

<div
  class="box"
  bind:this={box}
  on:mousedown={startSlide}
  on:mousemove={startSliding}
  on:mouseup={endSlide}
  on:touchstart={startSlide}
  on:touchmove={startSliding}
  on:touchend={endSlide}
>
  <div class="slides" bind:this={slide} on:transitionend={transitionend}>
    {#each { length: data.length / 2 + 1 } as _, i}
      <div class="slide" id={i} bind:this={slides[i + 1]}>
        {#each { length: 2 } as _, j}
          <DragSliderCard {...data[i][j]} />
        {/each}
      </div>
    {/each}
  </div>
  <div class="circle">
    {#each { length: 3 } as _, i}
      <span
        style={`background-color:${
          currentSlide - 1 == i ? "#0b0268" : "#d3cffc"
        }`}
        on:click={() => {
          oncircleClick(i + 1);
        }}
      />
    {/each}
  </div>
</div>

<style>
  .box {
    margin: 50px 0 20px;
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    cursor: grab;
  }
  .slides {
    display: flex;
    width: 100%;
    min-height: 100%;
    margin-bottom: 20px;
  }
  .slide {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .circle > span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #d3cffc;
    transition: 1s;
    cursor: pointer;
  }
  @media screen and (max-width: 750px) {
    .slide {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
