"use client";

import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { handleFileDelete } from "@/utils/fileUtils";
import { UploadButton } from "@/utils/uploadthing";

import { Button } from "./ui/button";

interface AudioUploadProps {
  value: string | undefined;
  setValue: (value: string) => void;
}

const AudioUpload: React.FC<AudioUploadProps> = ({ value, setValue }) => {
  const { toast } = useToast();
  const [audioFileName, setAudioFileName] = useState("");
  const [fileIsDeleting, setFileIsDeleting] = useState(false);

  const deleteFile = (value: string) => {
    handleFileDelete(value, setFileIsDeleting, setValue, toast);
  };

  return (
    <>
      {value?.length ? (
        <div className="relative flex h-11 w-full items-center rounded-lg border-white-border bg-white-100 pl-2.5">
          <div className="subtitle-small rounded-lg bg-white-200 p-2.5">
            {audioFileName || value}
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
        <div className="flex h-11 flex-row justify-start rounded-lg border-white-border bg-white-100 pl-2.5">
          <Image
            src="/assets/microphone.svg"
            alt="microphone"
            height={16}
            width={12}
          />
          <UploadButton
            appearance={{
              button:
                "ut-ready:bg-white-200 ut-uploading:cursor-not-allowed  h-5 w-[74px] subtitle-small ml-2.5",
              container: "flex flex-row justify-start",
              allowedContent:
                "flex h-8 flex-col items-center justify-center px-2 text-white",
            }}
            endpoint="audioUploader"
            onClientUploadComplete={(res) => {
              setValue(res[0].url);
              setAudioFileName(res[0].name);
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

export default AudioUpload;
