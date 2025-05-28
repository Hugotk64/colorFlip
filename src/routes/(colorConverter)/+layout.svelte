<script lang="ts">
	import { input,output,previewColor } from "$lib/stores";

	import { page } from "$app/stores";

	let currentPage: string;
	let placeHolder: string;
	// run all time
	$: {
		//  if url name includes hex-to-rgb set name else other name
		currentPage = $page.url.pathname.includes('hex-to-rgb') ? 'HEX to RGB' : 'RGB to HEX';
		// Display placeholder base in page in hex or rgb
		placeHolder = currentPage === 'HEX to RGB' ? '#B2CD9C' : 'rgb(178, 205, 156)';
	}
</script>

<!-- Back button to home /-->
<a href="/" class="backButton"> ← </a>

<div class="card">
	<!-- Preview picked color -->
	<div class="preview" style="background-color: {$previewColor}"></div>
	<div class="content">
		<!-- Indicates the page -->
		<label for="input">{currentPage}</label>
		<!-- Input element -->
		<!-- svelte-ignore component_name_lowercase -->
		<input type="text" id="input" bind:value={$input} placeholder={placeHolder} />
		<!-- Show the output -->
		<!-- svelte-ignore component_name_lowercase -->
		<output class="valueOutput" id="output" for="input">{$output}</output>
	</div>
</div>
<slot></slot>

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

    .backButton {
        background-color: #FFF;
        border-radius: 8px;
        /* Set button at top left */
        position: absolute;
        top: 16px;
        left: 16px;
        /* make arrow big and remove link decoration */
        color: #000;
        font-size: 24px;
        text-decoration: none;

        padding: 4px 8px;
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

        cursor: default;
	}
</style>
