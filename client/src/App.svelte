<script>
  import axios from "axios";
  import Transaction from "./components/transaction.svelte";
  import SummaryCard from "./components/SummaryCard.svelte";
  import Loading from "./components/loading.svelte";
  import { onMount } from "svelte";
  import {
    transactions,
    sortedTransactions,
    balance,
    income,
    expenses,
  } from "./stores";

  let typeb = [
    { id: 1, text: `text` },
    { id: 2, text: `checkbox` },
  ];
  let selection;
  
  let nomForm = "";
  var questiona = [];
  var typea = [];
  var question = [];

  let nbchamps = 1;

  function handleClick() {
    nbchamps += 1;
  }

  let input = 0;
  let typeOfTransaction = "+";
  $: disabled = !input;

  let loading = false;

  onMount(async () => {
    loading = true;
    const { data } = await axios.get("/api/transactions");
    $transactions = data;
    loading = false;
  });

  async function addTransaction() {
    const transaction = {
      date: new Date().getTime(),
      value: typeOfTransaction === "+" ? input : input * -1,
    };
    const response = await axios.post("/api/transactions", transaction);
    $transactions = [response.data, ...$transactions];
    input = 0;
  }

  async function addForm() {
    question.push([questiona, typea]); 
    const transaction = {
      nom: nomForm,
      question: question,
    };
    const response = await axios.post("/api/forms", transaction);
    $transactions = [response.data, ...$transactions];
    input = 0;
  }

  async function removeTransaction(id) {
    const response = await axios.delete("/api/transactions/" + id);
    if (response.data.id === id) {
      $transactions = $transactions.filter((t) => t._id !== id);
    }
  }
</script>

<div class="app container">
  <input
    class="input"
    type="text"
    bind:value={nomForm}
    placeholder="Nom du formulaire"
  />

  {#each Array(nbchamps) as _, i}
    <input
      class="input"
      type="text"
      bind:value={questiona[i]}
      placeholder="Question"
    />
   
    <input class="input" type="text" bind:value={typea[i]} placeholder="Type" />
	<select bind:value={selection}>
		{#each typeb as typeb}
			<option value={typeb}>
				{typeb.text}
			</option>
      <p>selected {selection ? selection.id : '[waiting...]'}</p>

  
		{/each}

   <!-- {#if selection}
    {#if selection.id == 1}
    
  {/if}
{/if} -->


	</select>
  {/each}
 

  <button on:click={handleClick}>
    Clicked {nbchamps}
    {nbchamps === 1 ? "time" : "times"}
  </button>
  <button class="button" on:click={addForm}>Envoyer form</button>
</div>

<!-- svelte
  <div class="app container">
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select bind:value={typeOfTransaction}>
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </span>
      </p>
      <p class="control is-expanded">
        <input
          class="input"
          type="number"
          bind:value={input}
          placeholder="Amount of money"
        />
      </p>
      <p class="control">
       
        <button class="button" on:click={addTransaction} {disabled}>
          Save
        </button>
      </p>
    </div>
    <hr />
    {#if loading}
      <Loading />
    {/if}

    <SummaryCard mode="balance" value={$balance} />

    <div class="columns">
      <div class="column">
        <SummaryCard mode="income" value={$income} />
      </div>
      <div class="column">
        <SummaryCard mode="expenses" value={$expenses} />
      </div>
    </div>
    <hr />

    {#each $sortedTransactions as transaction (transaction._id)}
      <Transaction {transaction} {removeTransaction} />
    {/each}
  </div>
</div>
-->
<style>
  .app {
    margin: 40px auto;
    max-width: 500px;
  }
</style>
