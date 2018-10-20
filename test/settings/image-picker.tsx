<ImagePicker
	title="Image Picker"
	description="Pick an image to use in this app"
	label="Pick an Image"
	sublabel="Settings image picker"
	settingsKey="image"
	imageWidth="300"
	imageHeight="300"
/>;
declare const doSomethingWithImage;
<ImagePicker
	title="Image Picker"
	description="Pick an image to use in this app"
	label="Pick an Image"
	sublabel="Settings image picker"
	imageWidth="300"
	imageHeight="300"
	// @ts-ignore Check the image property, because it is not documented
	onImagePicked={({ image, imageSize }) =>
		// @ts-ignore
		doSomethingWithImage(image, imageSize)
	}
/>;
