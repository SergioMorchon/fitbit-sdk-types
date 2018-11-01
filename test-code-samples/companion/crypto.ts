import { getRandomValues } from 'crypto';
// get 8 random 16-bit unsigned integers
let myRandomValues = new Uint16Array(8);
getRandomValues(myRandomValues);
