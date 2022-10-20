<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { blogs } from "../../../lib/blog.js";
  const blogObj = JSON.parse(blogs);
</script>

<p>{blogObj[data.index].blogtext}</p>

<div class="Container">
  <div class="box">
    <span />
  </div>
</div>
