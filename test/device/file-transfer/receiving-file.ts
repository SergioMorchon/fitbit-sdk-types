import { inbox } from 'file-transfer';

function processAllFiles() {
	let fileName;
	while ((fileName = inbox.nextFile())) {
		console.log(`/private/data/${fileName} is now available`);
	}
}
inbox.addEventListener('newfile', processAllFiles);
processAllFiles();
