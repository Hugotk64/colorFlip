<div class="menu">
	<h1>THE COLOR PROJECT</h1>

	<a href="/hex-to-rgb" class="button">HEX TO RGB</a>
	<a href="/rgb-to-hex" class="button">RGB TO HEX</a>
</div>

<style>
    :root {
        --color-body-bg: #F2F2F2;

        --color-menu-bg: #FFF;
        --color-menu-border: #222;
        --color-menu-shadow: #0000001a;

        --color-button-bg: #98bc7a;
        --color-button-txt: #FFF;
        --color-button-hover: #334624;
    }

    :global(body){
        font-family: Helvetica,sans-serif;
        background-color: var(--color-body-bg);
        /* Center content */
        display: flex;
        justify-content: center;
        align-items: center;
        /* Cover full screen */
        height: 100vh;
        width: 100wh;

        margin: 0;
    }

    .menu {
        background-color: var(--color-menu-bg);
        border: 5px solid var(--color-menu-border);
        box-shadow: 0 0 10px var(--color-menu-shadow);

        text-align: center;
        padding: 32px;
        width: 300px;
    }
    /* Title */
    .menu h1 {
        margin-bottom: 64px;
    }

    .button {
        background-color: var(--color-button-bg);
        /* Remove link decoration */
        color: var(--color-button-txt);
        text-decoration: none;
        font-weight: bold;

        margin: 16px 0;
        padding: 16px;
        /* Buttons and title set by colum */
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        /* Background hover smooth */
        transition: background-color 2s ease;
    }
    
    .button:hover {
        background-color: var(--color-button-hover);
    }
</style>