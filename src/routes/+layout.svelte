<script>
  import "../app.css";
</script>

<nav>
  <h1 class="text-3xl font-bold underline">Using Tailwind CSS</h1>
</nav>
<slot />
<footer>
  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">Much longer nav link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true"
        >Disabled</a
      >
    </li>
  </ul>
</footer>
