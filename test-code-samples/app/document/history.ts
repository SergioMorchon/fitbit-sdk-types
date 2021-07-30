import { document } from 'document';

console.log(document.history.length);
document.history.go(2);
document.history.forward();
document.history.back();
