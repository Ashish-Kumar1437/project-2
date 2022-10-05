<script>
  let menu = 0;
  function togglemenu() {
    menu = menu == 0 ? 1 : 0;
  }
  export let changeSlide, slide, imgarr;
</script>

<div class="togglebtn {menu == 0 ? '' : 'active'}" on:click={togglemenu}>
  <span class="line" />
  <span class="line" />
  <span class="line" />
</div>
<div class={`container ${menu == 0 ? "" : "active"} `}>
  <div class="before" style={`background: url(${imgarr[4 - slide]}) right;`} />
  <ul>
    {#each { length: 5 } as _, i}
      <li
        on:click={() => {
          setTimeout(() => {
            changeSlide(i);
          }, 1000);
          menu = 0;
        }}
      >
        <span class="SNo">{i + 1}.</span>Thought
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    width: 30vw;
    height: 100vh;
    font-size: 3vw;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transform: translateX(0vw);
    transition: transform 1s;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .container.active {
    transform: translateX(-30vw);
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
  .before {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 30vw;
    filter: blur(5px);
    background-position: right;
  }

  @media screen and (max-width: 1000px) {
    .togglebtn {
      transform: translate(-14vw, 4vh);
    }
    .togglebtn.active {
      transform: translate(-14vw, 4vh) rotate(45deg);
    }
    .line {
      width: 4vw;
    }
  }
  @media screen and (max-width: 800px) {
    .line {
      width: 5vw;
    }
    .container.active {
      transform: translateX(-100vw);
    }
    .container {
      width: 100vw;
    }
    .before {
      width: 100vw;
    }
    ul {
      width: 50vw;
      font-size: 2rem;
    }
  }
</style>
