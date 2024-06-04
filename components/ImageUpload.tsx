"use client";
import Image from "next/image";

import { useToast } from "@/components/ui/use-toast";
import { UploadDropzone } from "@/utils/uploadthing";

const ImageUpload = ({ value, setValue }) => {
  const { toast } = useToast();

  return (
    <>
      {value.length ? (
        <div className="relative h-[250px] overflow-hidden">
          <Image src={value} alt="my image" layout="fill" objectFit="cover" />
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
