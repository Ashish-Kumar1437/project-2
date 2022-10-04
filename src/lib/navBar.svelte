<script>
  import logo from "../img/logo.png";
</script>

<nav>
  <div class="col1">
    <div class="logo">
      <img src={logo} alt="logo" />
    </div>
    <div class="name">
      <span>Slider</span>
      <span>Revolution</span>
    </div>
  </div>
  <div class="col2">
    <span>Motion Blur Portfolio Showcase - Slider Template</span>
  </div>
  <div class="col3">
    <a class="btn" href="/gallary">Go to Gallery</a>
    <a class="btn" href="/">Go to Home</a>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    padding: 4px 25px;
    width: 100vw;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    cursor: default;
    z-index: 10;
  }
  img {
    width: 4vw;
    height: 4vw;
  }
  .col1 {
    display: flex;
  }
  .name {
    display: flex;
    flex-direction: column;
  }
  .name span {
    text-transform: uppercase;
  }
  .name span:first-child {
    font-weight: 900;
    font-size: 1.5rem;
  }
  .name span:last-child {
    font-size: 0.8rem;
  }
  .btn {
    background-color: red;
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 0.8em;
  }
</style>
