<script>
  import bag from "../img/gif/bag.gif";
  import eye from "../img/gif/eye.gif";
  import easy from "../img/gif/easy.gif";
</script>

<div class="Container">
  <div class="box">
    <div class="headings">
      <h1>Why Should You</h1>
      <h2>Use This Slider Revolution Template?</h2>
      <h3>We’ll give you 3 very good reasons…</h3>
    </div>
    <div class="content-container">
      <div class="content">
        <img src={eye} alt="eye" />
        <span class="title">Instantly Captures Visitors’ Attention</span>
        <span class="text"
          >Half of the battle in getting people to engage with your website lies
          in getting them to stop and pay attention to your content. Your
          visitors aren’t likely to encounter websites that use a cool slider
          like this one, so consider the battle won.</span
        >
      </div>
      <div class="content">
        <img src={bag} alt="bag" />
        <span class="title">Customizations As Easy As 1-2-3</span>
        <span class="text"
          >You might be looking at this Slider Revolution template and wondering
          how the heck you’re going to repurpose it for your needs. Don’t worry.
          Whether you want to edit the logo, change the images, or add new text
          to the sliders, it can easily be done within minutes.</span
        >
      </div>
      <div class="content">
        <img src={easy} alt="easy" />
        <span class="title">Take Visitors On a Trip</span>
        <span class="text"
          >Explore different locations with this unique slider, featuring
          animated parallax elements. Whether it's a travel agency or a webshop,
          this Slider Revolution module will surely bring the "WOW" to your
          website.</span
        >
      </div>
    </div>
  </div>
</div>

<style>
  .Container {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
    text-align: center;
  }
  .box {
    width: 80vw;
  }
  .headings {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .headings > h1 {
    font-size: 4em;
    font-weight: 900;
    background: linear-gradient(-107deg, #82009f 0%, #f7345e 100%);
    transform: skew(-20deg);
    background-clip: content-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .headings > h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  .headings > h3 {
    font-size: 1.5em;
    margin: 10px 0px 30px;
  }
  .content-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ghostwhite;
    justify-content: center;
    padding: 30px;
  }
  .content > .title {
    font-size: 1.3em;
    font-weight: 700;
    text-align: center;
    margin: 5px 0px 20px;
    color: #540566;
  }
  .content > .text {
    font-size: 1em;
    text-align: center;
    color: #543c5a;
  }
  .content > img {
    width: 100px;
  }

  @media screen and (max-width: 800px) {
    .content-container {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 500px) {
    .headings > h1 {
      font-size: 2em;
    }
    .headings > h2 {
      font-size: 1.5em;
    }
    .headings > h3 {
      font-size: 1em;
    }
  }
</style>
