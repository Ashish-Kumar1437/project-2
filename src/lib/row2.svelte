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
      }vw)`}
    >
      <img src={template1} alt="t1" />
    </div>
    <div class="imgs" style={`transform:translateX(${flag == 0 ? 16 : 1}vw)`}>
      <img src={template2} alt="t2" />
    </div>
    <div class="imgs" style={`transform:translateY(${flag == 0 ? 16 : 1}vw)`}>
      <img src={template3} alt="t3" />
    </div>
  </div>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .box.active {
    width: 75vw;
    height: 70vh;
    padding: 10vw;
  }
  .box {
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
    width: 30vw;
    height: 30vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: cent; */
    padding: 3vw;
    transition: all 1s;
  }
  .box.active > .text {
    font-size: 3rem;
    width: 40vw;
  }
  .text {
    font-size: 1rem;
    font-weight: 900;
    color: white;
    width: 10vw;
  }
  .box.active > .subtext {
    font-size: 1.2rem;
  }
  .subtext {
    font-size: 0.8rem;
    color: rgb(177, 175, 175);
    margin-top: 10px;
  }
  .box.active > .button {
    width: 20vw;
    font-size: 1rem;
    margin-top: 30px;
  }
  .button {
    background-color: red;
    width: 10vw;
    text-align: center;
    border-radius: 20vw;
    margin-top: 10px;
    padding: 1%;
    font-size: 0.5rem;
    color: white;
  }
  .imgBox {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    width: 40vw;
    flex-wrap: wrap;
    justify-content: baseline;
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
</style>
