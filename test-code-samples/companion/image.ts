import { outbox } from 'file-transfer';
import { Image } from 'image';

Image.from('image-uri')
	.then((image) =>
		image.export('image/jpeg', {
			background: '#FFFFFF',
			quality: 40,
		}),
	)
	.then((buffer) => outbox.enqueue(`${Date.now()}.jpg`, buffer))
	.then((fileTransfer) => {
		console.log(`Enqueued ${fileTransfer.name}`);
	});

fetch("https://.../some-file.png")
  .then(response => response.arrayBuffer())
  .then(buffer => Image.from(buffer, "image/png"))
  .then(image =>
    image.export("image/vnd.fitbit.txi", {
      background: "#FFFFFF"
    })
  )
  .then(buffer => outbox.enqueue(`${Date.now()}.jpg`, buffer))
  .then(fileTransfer => {
    console.log(`Enqueued ${fileTransfer.name}`);
  });