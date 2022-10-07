<script>
  import img from "../img/template1.png";
</script>

<div class="Container">
  <div class="box">
    <span>SLIDER REVOLUTION HERO, SLIDER, SPECIAL FX TEMPLATE</span>
    <h1>Motion Blur Portfolio Showcase</h1>
    <p>
      This clean showcase slider with an optional video popup is using a fancy
      motion blur transition! Packed with a logo and menu it’s ready to
      visualize your wildest ideas.
    </p>
    <div class="content">
      <img src={img} alt="img" />
      <div class="text">
        <span> Slider Revolution Templates Are 100% Responsive </span>
        <p>
          We designed the Motion Blur Portfolio Showcase to look good no matter
          what device your visitors are on.<br />
          We’ve also given you an easy-to-use responsive editor that allows you to
          edit and preview your Slider Revolution module from different views.
        </p>
      </div>
    </div>
    <div class="button">Get This Template When You Sign Up For Revolution</div>
  </div>
</div>

<style>
  .Container {
    width: 100vw;
    min-height: 100vh;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: default;
  }
  .box {
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vw 0;
  }
  .box > span {
    color: red;
    word-spacing: 2px;
    font-weight: 600;
  }
  .box > h1 {
    font-weight: 900;
    font-size: 2em;
    margin: 10px 0px 20px;
    color: rgb(40, 3, 75);
  }
  .box > p {
    font-size: 1.5em;
    margin: 10px 0 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .content > img {
    max-width: 45vw;
    border-radius: 5px;
  }
  .text {
    text-align: start;
  }
  .text > span {
    display: inline-block;
    font-weight: 800;
    font-size: 1.5em;
    margin: 10px 0px 20px;
    color: rgb(40, 3, 75);
    margin: 10px 0 20px;
  }
  .text > p {
    font-size: 1.1em;
    color: rgb(135, 134, 135);
  }

  .button {
    background-color: red;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    margin-top: 30px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background 0.5s;
  }
  .button:hover {
    background-color: aqua;
  }
  @media screen and (max-width: 800px) {
    .content {
      flex-direction: column;
    }
    .content > img {
      max-width: 100%;
    }
  }
</style>
