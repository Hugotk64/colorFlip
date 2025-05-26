<!-- Back button to home /-->
<a href="/" class="backButton"> ← </a>

<div class="card">
	<!-- Preview picked color -->
	<div class="preview"></div>
	<div class="content">
		<!-- Group input elements label and input text -->
		<div class="inputGroup">
			<label for="input">input hex or rgb</label>
			<input type="text" id="input" placeholder="example" />
		</div>
		<!-- Group output elements label and output -->
		<div class="outputGroup">
			<label for="output">output hex or rgb</label>
			<output class="valueOuput" id="output" for="input">output rgb or hex</output>
		</div>
	</div>
</div>

<style>
    :global(body) {
        font-family: Helvetica, sans-serif;
        margin: 0;
        /* Center content */
        display: flex;
        align-items: center;
        justify-content: center;
        /* Full size */
        height: 100vh;
        width: 100vw;
        /* set background picture, cover full screen and no repeat */
        background-image: url(/src/lib/background.svg);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .card {
        background: transparent;
        border-radius: 8px;
        box-shadow: 0 4px 16px #0009;
        width: 336px;
    }
</style>