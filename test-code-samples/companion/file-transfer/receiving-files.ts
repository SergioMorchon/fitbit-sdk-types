import { inbox } from 'file-transfer';

// Process the inbox queue for files, and read their contents as text
async function processAllFiles() {
	let file;
	while ((file = await inbox.pop())) {
		const payload = await file.text();
		console.log(`file contents: ${payload}`);
	}
}

// Process new files as they are received
inbox.addEventListener('newfile', processAllFiles);

// Also process any files that arrived when the companion wasn’t running
processAllFiles();
