
"use client";
import Image from "next/image";

import { UploadDropzone } from "@/utils/uploadthing";

const ImageUpload = ({value, setValue}) => {


  return (
    <div>
      <UploadDropzone
        appearance={{
          container: "border-white-300",
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setValue(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {value.length ? (
        <div>
          <Image src={value} alt="my image" width={500} height={300} />
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
