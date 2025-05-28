<script lang="ts">
	import { input,output,previewColor } from "$lib/stores";
	
	$: {
		// Remove spaces
		const hex = $input.trim();
		// Validate structure
		// optional #
		// 3 or 4 HEX #abc ABCD
		// 6 HEX #112233
		// 8 HEX #1234abCD
		// Case insensitivity A-a
		const hexRegex = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

		if (!hex) { // Empty
			output.set('');
			previewColor.set('#B2CD9C');
		} else if (!hexRegex.test(hex)) { // Invalid input structure
			output.set('Invalid HEX format');
		} else {
			//Remove # from input
			let hexFull = hex.replace(/^#/, '');
			// If input trimed and without # is 3 or 4 digits
			if ( hexFull.length === 3 || hexFull.length === 4 ) {
				// convert into array of char, duplicate each and join them
				hexFull = hexFull.split('').map(c => c+c).join(''); // #abc => #aabbcc
			}
		}
	}
</script>