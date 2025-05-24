"use client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "./ui/button";

import { useToast } from "@/components/ui/use-toast";
import { handleFileDelete } from "@/utils/fileUtils";
import { UploadButton } from "@/utils/uploadthing";

interface ProfileImageUploadProps {
  value: string | undefined;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  value,
}) => {
  const { toast } = useToast();
  const [fileIsDeleting, setFileIsDeleting] = useState(false);

  const deleteFile = (value: string) => {
    handleFileDelete(value, setFileIsDeleting, toast);
  };

  return (
    <>
      {value?.length ? (
        <div className="border-white-border bg-white-100 relative flex h-11 w-full items-center rounded-lg pl-2.5">
          <div className="subtitle-small bg-white-200 rounded-lg p-2.5">
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
        </div>
      ) : (
        <div className="border-white-border bg-white-100 flex h-11 flex-row justify-start rounded-lg pl-2.5">
          <UploadButton
            appearance={{
              button:
                "ut-ready:bg-white-200 ut-uploading:cursor-not-allowed  h-5 w-[74px] subtitle-small ml-2.5",
              container: "flex flex-row justify-start",
              allowedContent:
                "flex h-8 flex-col items-center justify-center px-2 text-white",
            }}
            endpoint="profileImageUploader"
            onClientUploadComplete={() => {
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
        </div>
      )}
    </>
  );
};

export default ProfileImageUpload;
