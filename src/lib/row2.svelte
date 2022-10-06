<script>
  import template1 from "../img/template1.png";
  import template2 from "../img/template2.png";
  import template3 from "../img/template3.png";
  let flag = 0;
  let element;

  const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) -
        scrollOffset
    );
  };
  const handleScrollAnimation = () => {
    if (elementInView(element, 100)) {
      flag = 1;
    }
  };
</script>

<svelte:window on:scroll={handleScrollAnimation} />
<div class="container">
  <div class="box {flag == 0 ? '' : 'active'}" bind:this={element}>
    <div class="text">
      Join 9+ million building unique content with Slider Revolution
    </div>
    <div class="subtext">The #1 WordPress visual content building plugin</div>
    <div class="button">View Pricing Plans</div>
  </div>
  <div class="imgBox">
    <div
      class="imgs"
      style={`transform:translate(${flag == 0 ? 16 : 1}vw,${
        flag == 0 ? 16 : 1
      }vw);opacity:${flag}`}
    >
      <img src={template1} alt="t1" />
    </div>
    <div
      class="imgs"
      style={`transform:translateX(${flag == 0 ? 16 : 1}vw); opacity:${flag}`}
    >
      <img src={template2} alt="t2" />
    </div>
    <div
      class="imgs"
      style={`transform:translateY(${flag == 0 ? 16 : 1}vw);opacity:${flag}`}
    >
      <img src={template3} alt="t3" />
    </div>
  </div>
</div>

<style>
  .container {
    min-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
  }
  .box.active {
    transform: scale(1);
  }
  .box {
    transform: scale(0.5);
    width: 75vw;
    min-height: 70vh;
    padding: 5vw;
    background: linear-gradient(
      145deg,
      blue,
      blue,
      rgb(134, 51, 193),
      rgb(134, 51, 193),
      rgb(189, 50, 177),
      rgb(189, 50, 177),
      red,
      red
    );
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 1s;
  }
  .text {
    font-size: 4vw;
    width: 40vw;
    font-weight: 900;
    color: white;
  }
  .subtext {
    font-size: 1.2rem;
    color: rgb(177, 175, 175);
    margin-top: 10px;
  }
  .button {
    width: 20vw;
    font-size: 1rem;
    margin-top: 30px;
    background-color: red;
    text-align: center;
    border-radius: 20vw;
    padding: 1%;
    color: white;
  }
  .imgBox {
    position: absolute;
    bottom: -25px;
    right: 30px;
    display: flex;
    width: 45vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: translate(-6vw, -20vh);
  }
  .imgs {
    width: 15vw;
    height: 7vw;
    margin: 10px;
    transition: all 1s 0.2s;
  }
  .imgs > img {
    transform: rotate3d(2, 3, 2, 322deg);
  }
  @media screen and (max-width: 1100px) {
    .text {
      width: 60vw;
    }
    .imgBox {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 900px) {
    .text {
      width: 70vw;
    }
    .imgBox {
      display: none;
    }
    .box {
      min-height: 40vh;
    }
    .button {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 550px) {
    .box {
      padding: 3vw;
    }
  }
</style>
