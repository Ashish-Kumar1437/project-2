<script>
  let ch = [];
</script>

<div class="Container">
  <div class="box">
    <div class="headings">
      <h1>Get The Most</h1>
      <h2>Out of This Slider Template</h2>
      <h3>
        Our in-depth resources will provide you with knowledge and instant
        solutions.
      </h3>
    </div>
    <div class="content-container">
      <div class="col col1">
        <div class="content">
          <input
            type="checkbox"
            name="toggle"
            class="toggle"
            bind:checked={ch[0]}
            id="toggle1"
          />
          <label class="heading" for="toggle1">
            <span>How To Install This Template?</span>
            <div
              style={`transform: rotateZ(${ch[0] ? "180deg" : "0"})`}
            /></label
          >
          <div class="collapse" style={`max-height:${ch[0] ? "1000px" : "0"}`}>
            <div class="text">
              Check out our comprehensive beginners guide to installing
              templates <a href="/">here</a>.
            </div>
          </div>
        </div>
        <div class="content">
          <input
            type="checkbox"
            name="toggle"
            class="toggle"
            id="toggle2"
            bind:checked={ch[1]}
          />
          <label class="heading" for="toggle2">
            <span>Getting Started With Slider Revolution</span>
            <div
              style={`transform: rotateZ(${ch[1] ? "180deg" : "0"})`}
            /></label
          >
          <div class="collapse" style={`max-height:${ch[1] ? "1000px" : "0"}`}>
            <div class="text">
              Our user manual starts with installing and registering Slider
              Revolution. From there, you will learn everything you need to know
              in order to work with the editor.
              <br />
              Whether you are a new or advanced user, you will surely get some knowledge
              out of our <a href="/">manual</a>.
            </div>
          </div>
        </div>
      </div>
      <div class="col col2">
        <div class="content">
          <input
            type="checkbox"
            name="toggle"
            class="toggle"
            id="toggle3"
            bind:checked={ch[2]}
          />
          <label for="toggle3" class="heading">
            <span>Customize This Template</span>
            <div
              style={`transform: rotateZ(${ch[2] ? "180deg" : "0"})`}
            /></label
          >
          <div class="collapse" style={`max-height:${ch[2] ? "1000px" : "0"}`}>
            <div class="text">
              Learn how to edit text, links and images:
              <br /><a href="/">Basic Module Editing Guide</a><br />

              Learn how to swap videos & customize colors:
              <br /><a href="/">Intermediate Template Editing Guide</a><br />

              The fundamentals of animation in Slider Revolution:
              <br /><a href="/">Animation Fundamentals</a>
            </div>
          </div>
        </div>
        <div class="content">
          <input
            type="checkbox"
            name="toggle"
            class="toggle"
            id="toggle4"
            bind:checked={ch[3]}
          />
          <label for="toggle4" class="heading">
            <span>FAQ & Tutorials</span>
            <div
              style={`transform: rotateZ(${ch[3] ? "180deg" : "0"})`}
            /></label
          >
          <div class="collapse" style={`max-height:${ch[3] ? "1000px" : "0"}`}>
            <div class="text">
              Instantly find solutions to the most commmon issues and follow
              in-depth tutorials:<br />
              <a href="/">FAQs & Tutorials</a><br />

              Watch practical, step-by-step exercises in our video guides
              section:
              <br />
              <a href="/">Video Guides</a>
            </div>
          </div>
        </div>
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
    background-color: rgb(220, 253, 254);
    padding: 10vw 0;
    text-align: center;
    cursor: default;
  }
  .box {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    justify-content: space-around;
    gap: 30px;
  }
  .col {
    min-width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .content {
    background-color: aliceblue;
    width: 100%;
    padding: 15px;
    text-align: start;
  }
  .toggle {
    display: none;
  }
  .heading {
    font-size: 1.2em;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    /* background-color: aquamarine; */
    cursor: pointer;
    position: relative;
  }
  .heading > div {
    content: " ";
    position: absolute;
    right: 0;
    background-color: #82009f;
    min-width: 0.8em;
    min-height: 0.8em;
    clip-path: polygon(51% 100%, 0 0, 100% 0);
    transition: transform 0.25s ease-in-out;
  }
  .heading:hover {
    color: rgb(54, 54, 54);
  }
  .collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }
  .text {
    text-align: left;
    padding: 20px 0 10px;
    font-size: 1.1em;
  }
  .text > a {
    color: red;
    transition: background 0.5s;
  }
  .text > a:hover {
    color: aqua;
  }
  .col2 a {
    display: inline-block;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1000px) {
    .content-container {
      flex-direction: column;
    }
  }
</style>
