<!-- Back button to home /-->
<a href="/" class="backButton"> ← </a>

<div class="card">
	<!-- Preview picked color -->
	<div class="preview"></div>
	<div class="content">
		<!-- Indicates the page -->
		<label for="input">HEX TO RGB</label>
		<!-- Input element -->
		<input type="text" id="input" placeholder="#B2CD9C" />
		<!-- Show the output -->
		<output class="valueOutput" id="output" for="input">rgb(178, 205, 156)</output>
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
		/* Set elements as column */
		display: flex;
		flex-direction: column;

		width: 250px;
		height: 370px;
	}

	.preview {
        background-color: #B2CD9C;
		/* Cover full width and set height */
		width: 100%;
		height: 250px;
	}

	.content {
		background-color: #fff;
		padding: 12px;

		display: flex;
		flex-grow: 1; /* If there is space left it fill it */
		flex-direction: column;
	}

	.content label {
		/* Make label big and bold*/
		font-size: 24px;
		font-weight: bolder;

		margin-bottom: 16px;
	}

	.content input[type='text'] {
		/* Make font but ligh */
		font-size: 16px;
		font-weight: lighter;
		/* border and focus remove to look like text */
		border: none;
		outline: none;
        /* Remove spacing */
		margin: 0;
        padding: 0;
	}

	.valueOutput {
        font-size: 14px;
		font-weight: bolder;
        color: #555;
	}
</style>
