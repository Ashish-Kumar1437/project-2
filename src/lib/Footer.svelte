<script>
  import fb from "../img/facebook.png";
  import insta from "../img/instagram.png";
  import youtube from "../img/youtube.png";
  import twitter from "../img/twitter.png";
</script>

<div class="Upper-Container">
  <div class="upper-Box">
    <div class="col">
      <h1>Slider Revolution</h1>
      <ul>
        <li>Build Anything Visually</li>
        <li>Pro-Level Design</li>
        <li>Templates</li>
        <li>Advanced Transitions</li>
        <li>Addons</li>
        <li>Upgrade To Premium</li>
        <li>Jobs</li>
      </ul>
    </div>
    <div class="col">
      <h1>Support</h1>
      <ul>
        <li>Help Center</li>
        <li>Documentation</li>
        <li>FAQs</li>
        <li>Open a Ticket</li>
      </ul>
    </div>
    <div class="col">
      <h1>Versions</h1>
      <ul>
        <li>WordPress <span>v6.x</span></li>
        <li>jQuery <span>v6.x</span></li>
        <li>Shopify <span>v6.x</span></li>
        <li>Magento <span>v6.x</span></li>
        <li>Prestashop <span>v6.x</span></li>
        <li>OpenCast <span>v6.x</span></li>
        <li>TYPO3 <span>v6.x</span></li>
        <li>Essential Grid Gallery</li>
      </ul>
    </div>
    <div class="col">
      <h1>resources</h1>
      <ul>
        <li>Pricing</li>
        <li>Terms of Use</li>
        <li>Legal Disclosure (Impressum)</li>
        <li>Privacy Policy (Datenschutz)</li>
        <li>Licensing</li>
        <li><a href="/blogs">Blog</a></li>
        <li>Newsletter</li>
      </ul>
    </div>
  </div>
</div>
<div class="lower-Container">
  <div class="img">
    <img src={fb} alt="Facebook" />
    <img src={insta} alt="Instagram" />
    <img src={youtube} alt="youtube" />
    <img src={twitter} alt="twitter" />
  </div>
  <div class="copyrt">&copy; Copyright 2022 by xyz</div>
</div>

<style>
  .Upper-Container {
    width: 100vw;
    background: linear-gradient(to bottom, #150a33 0%, #1c0950 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
    cursor: default;
  }
  .upper-Box {
    width: 80vw;
    display: flex;
    justify-content: space-around;
    color: white;

    /* gap: 30px; */
  }
  .col {
    min-width: 25%;
  }
  .col > h1 {
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 900;
    margin-bottom: 40px;
  }
  li {
    font-size: 1em;
    margin: 10px 0;
    color: #a08fc3;
    cursor: pointer;
  }
  li > span {
    background: linear-gradient(to right, purple, aqua);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  .lower-Container {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 20px 10vw;
    align-items: center;
    background-color: #c9aeff;
    cursor: default;
  }
  .img {
    display: flex;
    gap: 5px;
    cursor: pointer;
  }
  .img > img {
    width: 40px;
    transition: transform 0.25s;
  }
  .img > img:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 800px) {
    .upper-Box {
      flex-wrap: wrap;
      width: 90vw;
    }
    .lower-Container {
      padding: 10px 5vw;
    }
    .col {
      width: 40%;
      margin-bottom: 20px;
    }
    .col > h1 {
      font-size: 1.2em;
    }
    li {
      font-size: 0.8em;
    }
    .img > img {
      width: 30px;
    }
  }
  @media screen and (max-width: 450px) {
    .col {
      width: 40%;
    }
    .col > h1 {
      font-size: 1em;
      margin-bottom: 20px;
    }
    li {
      font-size: 0.8em;
      padding: 2px 0;
    }
    .img {
      width: 100%;
      justify-content: center;
    }
    .lower-Container {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
