<div class="menu">
	<h1>THE COLOR PROJECT</h1>

	<a href="/" class="button">HEX TO RGB</a>
	<a href="/" class="button">RGB TO HEX</a>
</div>

<style>
    :root {
        --color-body-bg: #F2F2F2;
        --color-menu-bg: #FFF;
        --color-menu-border: #222;
        --color-menu-shadow: #0000001a;
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
</style>