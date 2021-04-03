<script>
  import successkid from "images/successkid.jpg";
</script>

<style>
	h1,
	figure,
	p {
	  text-align: center;
	  margin: 0 auto;
	}
  
	h1 {
	  font-size: 2.8em;
	  text-transform: uppercase;
	  font-weight: 700;
	  margin: 0 0 0.5em 0;
	}
  
	figure {
	  margin: 0 0 1em 0;
	}
  
	img {
	  width: 100%;
	  max-width: 400px;
	  margin: 0 0 1em 0;
	  text-align: center;
	  display: block;
	}
  
	p {
	  margin: 1em auto;
	}
  
	@media (min-width: 480px) {
	  h1 {
		font-size: 4em;
	  }
	}

  </style>
  
<svelte:head>
  <title>Smart Study</title>
</svelte:head>

<div>
  <img src="smartStudy.png"/>

  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore minima ex
    id quod adipisci doloremque amet, repellat debitis officia quos!
  </p>
  <a href="form" class="btn"> View forms</a>
</div>
