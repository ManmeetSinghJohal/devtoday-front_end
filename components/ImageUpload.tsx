"use client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { handleFileDelete } from "@/utils/fileUtils";
import { UploadDropzone } from "@/utils/uploadthing";

import { Button } from "./ui/button";

const ImageUpload = ({ value, setValue }) => {
  const { toast } = useToast();
  const [fileIsDeleting, setFileIsDeleting] = useState(false);


 const deleteFile = (value) => {
   handleFileDelete(value, setFileIsDeleting, setValue, toast);
 };


  return (
    <>
      {value.length ? (
        <div className="relative h-[250px] overflow-hidden rounded-2xl">
          <Image src={value} alt="my image" layout="fill" objectFit="cover" />
          <Button
            onClick={() => deleteFile(value)}
            type="button"
            size="icon"
            variant="ghost"
            className="absolute -right-px top-0"
          >
            {fileIsDeleting ? <Loader2 /> : <XCircle />}
          </Button>
        </div>
      ) : (
        <UploadDropzone
          appearance={{
            container: "border-white-300",
            button: "bg-primary1-500 text-white-100",
            label: "text-primary1-500",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setValue(res[0].url);
            toast({
              variant: "success",
              description: "🎉  Upload Completed",
            });
          }}
          onUploadError={(error: Error) => {
            toast({
              variant: "destructive",
              description: `ERROR! ${error.message}`,
            });
          }}
        />
      )}
    </>
  );
};

export default ImageUpload;
