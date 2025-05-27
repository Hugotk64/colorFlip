import { writable } from "svelte/store";
// Declare variables
export const input = writable(''); //empty input
export const output = writable(''); // empty output 
export const previewColor =  writable('#B2CD9C'); // preview color from placeholder example