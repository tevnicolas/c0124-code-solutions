import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body: form,
      });
      const result = await response.json();
      setImageFile(result);
      console.log(imageFile);
    } catch (err) {
      console.error(err);
    }
    /* Prevent the browser's default behavior for form submissions.
     * Create a `new` FormData object from the `event`.
     *
     * Use fetch() to send a POST request to /api/uploads.
     * The body should be the form data object you created (not a JSON string).
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Parse the JSON response body and log the parsed response body.
     * Set the `imageFile` state to the parsed response body.
     * Log any errors to the console (using `console.error`).
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     */
  }

  return (
    <div>
      <h3>React File Uploads</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input required autoFocus type="text" id="caption" name="caption" />
        </label>
        <br />
        <input
          required
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload</button>
      </form>
      {imageFile ? (
        <img src={imageFile?.url} alt={imageFile.caption}></img>
      ) : undefined}
    </div>
  );
}
