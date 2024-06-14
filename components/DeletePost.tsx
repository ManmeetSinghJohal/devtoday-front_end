"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useToast } from "@/components/ui/use-toast";
import { deletePost } from "@/utils/methods";

interface DeleteProps {
  deletePostId: string;
}

const DeletePost = ({ deletePostId }: DeleteProps) => {
  const { toast } = useToast();

  return (
    <div className="flex space-x-2.5 bg-white-200">
      <Image src="/assets/trash.svg" alt="trash" width={18} height={18} />
      <Link
        href={`/profile`}
        className="paragraph-3-medium"
        onClick={async () => {
          const result = await deletePost(deletePostId);
          if (result.ok) {
            toast({
              variant: "success",
              description: "Post Deleted",
            });
          }
        }}
      >
        Delete Post
      </Link>
    </div>
  );
};

export default DeletePost;
