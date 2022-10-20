<script>
  import logo from "../img/logo.png";
</script>

<nav>
  <div class="col1">
    <div class="logo">
      <img src={logo} alt="logo" />
    </div>
  </div>
  <div class="col2">
    <span>Motion Blur Portfolio Showcase - Slider Template</span>
  </div>
  <div class="col3">
    <a class="btn" href="/">Home</a>
    <a class="btn" href="/gallary">Gallery</a>
    <a class="btn" href="/form">Form</a>
    <a class="btn" href="/blogs">Blog</a>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    padding: 8px 25px;
    width: 100vw;
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    cursor: default;
    z-index: 10;
  }
  img {
    max-width: 140px;
    height: auto;
  }
  .col1 {
    display: flex;
  }
  .btn {
    background-color: red;
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 0.8em;
  }
  @media screen and (max-width: 1000px) {
    .col2 {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 800px) {
    nav {
      padding: 10px 22px;
      justify-content: space-between;
    }
    .logo > img {
      width: 110px;
    }
    .col2 {
      display: none;
    }
    .btn {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 400px) {
    nav {
      padding: 10px 12px;
    }
    .logo > img {
      width: 110px;
    }
    .btn {
      font-size: 0.5rem;
      padding: 5px 10px;
    }
  }
</style>
