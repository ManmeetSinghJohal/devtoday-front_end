"use client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { UploadDropzone } from "@/utils/uploadthing";

import { Button } from "./ui/button";

const ImageUpload = ({ value, setValue }) => {
  const { toast } = useToast();
  const [imageIsDeleting, setImageIsDeleting] = useState(false);

  const handleImageDelete = (value: string) => {
    setImageIsDeleting(true);
    const imageKey = value.substring(value.lastIndexOf("/") + 1);

    fetch("/api/uploadthing/delete", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "applicaton/json" },
      body: JSON.stringify({ imageKey }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setValue("");
          toast({
            variant: "success",
            description: "Image removed",
          });
        } else {
          throw new Error("Deletion failed");
        }
      })
      .catch(() => {
        toast({
          variant: "destructive",
          description: "Something went wrong",
        });
      })
      .finally(() => {
        setImageIsDeleting(false);
      });
  };

  return (
    <>
      {value.length ? (
        <div className="relative h-[250px] overflow-hidden">
          <Image src={value} alt="my image" layout="fill" objectFit="cover" />
          <Button
            onClick={() => handleImageDelete(value)}
            type="button"
            size="icon"
            variant="ghost"
            className="absolute -right-px top-0"
          >
            {imageIsDeleting ? <Loader2 /> : <XCircle />}
          </Button>
        </div>
      ) : (
        <UploadDropzone
          appearance={{
            container: "border-white-300",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setValue(res[0].url);
            toast({
              variant: "success",
              description: "🎉 Upload Completed",
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
