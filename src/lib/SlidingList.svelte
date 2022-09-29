<script>
  let menu = 0;
  function togglemenu() {
    menu = menu == 0 ? 1 : 0;
  }
  export let changeSlide, slide, imgarr;
  import img1 from "../img/1.jpg";
</script>

<div class="togglebtn {menu == 0 ? '' : 'active'}" on:click={togglemenu}>
  <span class="line" />
  <span class="line" />
  <span class="line" />
</div>
<div
  class="container"
  style={`transform: translateX(${menu == 0 ? 0 : -30}vw);`}
>
  <div class="before" style={`background: url(${imgarr[4 - slide]}) right;`} />
  <ul>
    <li
      on:click={() => {
        changeSlide(0);
      }}
    >
      <span class="SNo">1.</span>Thought
    </li>
    <li
      on:click={() => {
        changeSlide(1);
      }}
    >
      <span class="SNo">2.</span>Thought
    </li>
    <li
      on:click={() => {
        changeSlide(2);
      }}
    >
      <span class="SNo">3.</span>Thought
    </li>
    <li
      on:click={() => {
        changeSlide(3);
      }}
    >
      <span class="SNo">4.</span>Thought
    </li>
    <li
      on:click={() => {
        changeSlide(4);
      }}
    >
      <span class="SNo">5.</span>Thought
    </li>
  </ul>
</div>

<style>
  .container {
    width: 30vw;
    height: 100vh;
    font-size: 3rem;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    /* transform: translateX(-30vw); */
    transition: transform 1s;
  }
  .togglebtn {
    transform: translate(-7vw, 20px);
    z-index: 5;
    width: 5vw;
    height: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
  }
  .line {
    width: 2vw;
    height: 3px;
    margin-bottom: 3px;
    background-color: black;
    transition: 0.2s;
  }

  .togglebtn.active {
    transition-delay: 0.1s;
    transform: translate(-7vw, 20px) rotate(45deg);
  }
  .togglebtn.active .line:nth-child(1) {
    transform: translateY(6px) rotate(90deg);
  }
  .togglebtn.active .line:last-child {
    transform: translateY(-6px);
  }
  /* transform: translateY(7px) rotate(90deg);
    transform: translate(-7vw, 20px) rotate(45deg); */
  .before {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 30vw;
    filter: blur(5px);
    background-position: right;
  }
</style>
