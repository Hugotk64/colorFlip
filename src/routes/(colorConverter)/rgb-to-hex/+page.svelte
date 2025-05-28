<script lang="ts">
    import { input,output,previewColor } from "$lib/stores";

    $: {
        // Remove spaces
        const rgb = $input.trim();
        // Validate structure
        // rgb with optional a
        // Spaces allow number from 0 to 9 between 1 3 digits
        // Optinal alpha.
        // Case insensitivity R-r
        const rgbRegex = /^rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i;

        if (!rgb) {
            output.set('');
            previewColor.set('rgb(178, 205, 156)');
        } else if (!rgbRegex.test(rgb)) {
            output.set('Invalid RGB or RGBA format.');
        }
    }
</script>