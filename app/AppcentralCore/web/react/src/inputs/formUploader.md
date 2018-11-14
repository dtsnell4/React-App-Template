# Uploader

The `formUploader` component is an AppCnetral wrapper for the Syncfusion `UploaderComponent`.  You can find more information in Syncfusions docs here [https://ej2.syncfusion.com/react/demos/#/bootstrap/uploader/default].

The `formUploader` component has the option of displaying a list of thumbnails beneath the uploader when it is being used to upload images by adding the `showFileList` property.    

```
	<FormUploader 
		maxFileCount={1} 
		allowedExtensions={['png', 'jpg', 'PNG', 'JPG']} 
		showFileList 
		recommended="Recommended size - 500 x 230 pixels (PNG or JPG)" 
		fileList={files} 
		removeFile={removeFile} 
		handleUpload={manageImageUpload} />

```
