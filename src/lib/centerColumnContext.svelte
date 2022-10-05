<script>
  export let id = 1,
    text;
</script>

<div class="text">
  <div class="name">NATURAL BLEND</div>
  <div class="order">
    <div class="number">0{id}</div>
    <div class="content">
      {text}
    </div>
  </div>
</div>

<style>
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 100vw;
  }
  .name {
    /* background-color: violet; */
    font-size: 5vw;
    width: 20vw;
    margin-right: 5rem;
    color: white;
  }
  .order {
    /* background-color: aqua; */
    width: 30vw;
    color: white;
  }
  .number {
    font-size: 2.5vw;
    font-weight: 900;
  }
  .content {
    font-size: 2vw;
  }
  @media screen and (max-width: 600px) {
    .name {
      font-size: 7vw;
    }
    .number {
      font-size: 4.5vw;
    }
    .content {
      font-size: 4vw;
    }
  }
</style>
