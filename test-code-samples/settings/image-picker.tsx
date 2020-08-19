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

// with typed settings
interface ImagePickerSettingsType {
	validKey: {
		imageUri: string;
		imageSize: {
			width: number;
			height: number;
		};
	};
	assignableKey: {
		imageUri: string;
		imageSize: {
			width: number;
		};
		somethingElse?: string;
	};
	otherKey: 'something-else';
}

<ImagePicker<ImagePickerSettingsType>
	settingsKey="validKey"
	imageWidth="300"
	imageHeight="300"
/>;

<ImagePicker<ImagePickerSettingsType>
	settingsKey="assignableKey"
	imageWidth="300"
	imageHeight="300"
/>;

/*

// should not and do not work

<ImagePicker<ImagePickerSettingsType>
	settingsKey="otherKey"
	imageWidth="300"
	imageHeight="300"
/>;

*/
