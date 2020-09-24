import document from 'document';

let tumbler = document.getElementById('tumbler');

let selectedIndex = tumbler.value;
let selectedItem = tumbler.getElementById('item' + selectedIndex);
let selectedValue = selectedItem.getElementById('content').text;

console.log(`index: $‌{selectedIndex} :: value: $‌{selectedValue}`);

selectedItem.getElementById('content').text = 'New Value';
