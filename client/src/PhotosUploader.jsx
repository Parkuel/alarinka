import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    try {
      const { data: filename } = await axios.post("user/upload/link", {
        link: photoLink,
      });
      onChange((prev) => {
        return [...prev, filename];
      });
      setPhotoLink("");
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("/user/upload/image", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const {
          data: { uploadedFiles: filenames },
        } = response;

        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder="add photo with link"
        />
        <button
          className="primary text-text px-4 gap-2 rounded-2xl max-w-[8rem] max-h-[4rem]"
          disabled={!photoLink}
          onClick={addPhotoByLink}
        >
          Add&nbsp;Photo
        </button>
      </div>

      <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 font-bold">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="flex h-32" key={link}>
              <img
                className="rounded-2xl w-full object-cover "
                src={"http://localhost:4000/images/" + link}
                alt=""
              />
            </div>
          ))}
        <label className="h-32 flex cursor-pointer items-center justify-center gap-2 border bg-transparent rounded-2xl p-2">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
}
