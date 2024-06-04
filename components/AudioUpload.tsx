"use client";

import Image from "next/image";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { UploadButton } from "@/utils/uploadthing";

const AudioUpload = ({ value, setValue }) => {
  const { toast } = useToast();
  const [audioFileName, setAudioFileName] = useState("")

  return (
    <>
    {value.length ? (
      <div>{audioFileName}</div>
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
            console.log(res)
            setValue(res[0].url);
            setAudioFileName(res[0].name)
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
