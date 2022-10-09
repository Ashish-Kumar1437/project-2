<script>
  import DragSlider from "./dragSlider.svelte";
</script>

<div class="Container">
  <div class="box">
    <div class="heading">
      See What Slider Revolution Users Have to Say About Our Templates
    </div>
    <div class="rating">
      Excellent - 4.6 / 5 rating <br />
      <span>See our reviews on <span class="name">Trustpilot</span> </span>
    </div>
    <DragSlider />
    <div class="button">Get This Template When You Sign Up For Revolution</div>
  </div>
</div>

<style>
  .Container {
    width: 100vw;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(240, 255, 254);
  }
  .box {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .heading {
    font-size: 2em;
    font-weight: 900;
    line-height: 1em;
    margin-bottom: 30px;
  }
  .rating {
    font-size: 1.3em;
    font-weight: 600;
  }
  .rating > span {
    font-weight: 100;
    font-size: 0.8em;
  }
  .name {
    font-weight: 600;
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
</style>
