import { outbox } from 'file-transfer';
declare const filename: string, data: any;
outbox
	.enqueue(filename, data)
	.then(ft => {
		console.log(`Transfer of ${ft.name} successfully queued.`);
	})
	.catch(error => {
		console.log(`Failed to enqueue ${filename}. Error: ${error}`);
	});
