<script lang="ts">
    import { input,output,previewColor } from "$lib/stores";

    function toHex(value: number): string {
        // take a number turn base 16 if single digit at cero at start
        return value.toString(16).padStart(2,'0').toUpperCase();
    }
    function alphaToHex(alpha: number): string {
        // Multiply alpha by 255 round the number and turn to base 16, add 0 if sigle digit
        return Math.round(alpha * 255).toString(16).padStart(2, '0').toUpperCase();
    }
    $: {
        // Remove spaces
        const rgb = $input.trim();
        // Validate structure
        // rgb with optional a
        // Spaces allow number from 0 to 9 between 1 3 digits
        // Optinal alpha.
        // Case insensitivity R-r
        const rgbRegex = /^rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i;
        const match = rgb.match(rgbRegex);
        if (!rgb) {
            output.set('');
            previewColor.set('rgb(178, 205, 156)');
        } else if (!match) {
            output.set('Invalid RGB or RGBA format.');
        } else {
            // Extract each color from rgba
            const r = Number(match[1]);
            const g = Number(match[2]);
            const b = Number(match[3]);
            // if a is no defined get number and convert to float else null
            const a = match[4] !== undefined ? parseFloat(match[4]) : null;

            // Validate r g b are valid numbers between 0 and 255
            if ( [r,g,b].some(v => v < 0 || v > 255) ) {
                output.set("RGB values must be between 0 and 255.");
            } else {
                const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}${a !== null ? alphaToHex(a) : ''}`;
                output.set(hex);
                previewColor.set(rgb);
            }
        }
    }
</script>