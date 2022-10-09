<script>
  export let rate, titlename, text, url, author;
  import star from "../img/star.png";
</script>

<div class="Container">
  <div class="stars">
    {#each { length: rate } as i}
      <img src={star} alt="" />
    {/each}
  </div>
  <div class="title">{titlename}</div>
  <div class="text">{text}</div>
  <div class="user"><img src={url} alt="" /></div>
  <div class="name">{author}</div>
</div>

<style>
  .Container {
    width: 40%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px black;
    border-radius: 5px;
  }
  .stars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .stars > img {
    width: 20px;
  }
  .title {
    font-size: 1.3em;
    font-weight: 600;
    margin: 20px 0;
  }
  .text {
    font-size: 0.9em;
  }

  .user > img {
    width: 40px;
    margin: 5px 0;
  }
  .name {
    font-size: 1.2em;
    font-weight: 600;
  }
  @media screen and (max-width: 750px) {
    .Container {
      width: 80%;
      height: 50%;
    }
    .title {
      margin: 10px 0;
      font-size: 1em;
    }
    .text {
      font-size: 12px;
    }
  }
</style>
