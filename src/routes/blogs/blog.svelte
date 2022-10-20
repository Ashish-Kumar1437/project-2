<script>
  import { blogs } from "../../lib/blog";
  const blogsObj = JSON.parse(blogs);
</script>

<div class="Container">
  <div class="box">
    {#each blogsObj as blog}
      <div id={`blog${blog.id}`} class="blog-Container">
        <div class="content">
          <a href={`/blogs/blog${blog.id}`}>
            <span>{blog.author}</span>
            <h2>{blog.title}</h2>
            <h4>{blog.subtitle}</h4>
          </a>
        </div>
        <div class="img">
          <img src={blog.img} alt="img" />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .Container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
  .Container::-webkit-scrollbar {
    display: none;
  }
  .box {
    width: 80vw;
    height: 100vh;
  }
  .blog-Container {
    width: 80vw;
    display: flex;
    padding: 10px 0px;
    margin: 10px 0px;
    justify-content: space-between;
    cursor: default;
  }
  .blog-Container > div {
    cursor: pointer;
  }
  .blog-Container > .img > img {
    width: 10vw;
  }
  .blog-Container h4 {
    font-size: 1.5em;
  }
  .blog-Container h2 {
    font-size: 3em;
    font-weight: 900;
  }
</style>
