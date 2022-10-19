<script>
  const jsontxt =
    '[ { "id": 1, "question": "What is 2*2-2?", "options": [{ "id": 1, "option": "2" },{"id":2,"option":"4"},{"id":3,"option":"0"},{"id":4,"option":"None of these"}] },{ "id": 2, "question": "How many alphabets are there in English?", "options": [{ "id": 1, "option": "7" },{"id":2,"option":"26"},{"id":3,"option":"20"},{"id":4,"option":"9"}]}]';
  const txt = JSON.parse(jsontxt);
  const result = [];

  function returnResult() {
    for (const ques in txt) {
      const radioName = document.getElementsByName(`question${txt[ques].id}`);
      for (const radio in radioName) {
        if (radioName[radio].checked)
          result[txt[ques].id - 1] = radioName[radio].value;
      }
    }
    console.log(JSON.stringify(result));
  }
</script>

<div class="Container">
  <div class="form">
    {#each txt as ques}
      <h3>{ques.question}</h3>
      <ul>
        {#each ques.options as opt}
          <li>
            <input
              type="radio"
              name={`question${ques.id}`}
              id={`question${ques.id}option${opt.id}`}
              value={`${opt.option}`}
            />
            <label for={`question${ques.id}option${opt.id}`}>{opt.option}</label
            >
          </li>
        {/each}
      </ul>
    {/each}
    <button on:click={returnResult}>Submit</button>
  </div>
</div>

<style>
  .Container {
    width: 100vw;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
  }
  .form {
    width: 90vw;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 30%;
    padding-bottom: 20px;
  }
  button {
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background 0.5s ease-out;
  }
  button:hover {
    background-color: aqua;
  }
</style>
