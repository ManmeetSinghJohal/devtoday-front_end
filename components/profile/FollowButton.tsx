"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

import { Button } from "../ui/button";

const FollowButton = ({
  id,
  userIsFollowed,
}: {
  id: string;
  userIsFollowed: boolean;
}) => {
  console.log("user follows <followButton>", userIsFollowed);
  const [isFollowing, setIsFollowing] = useState<boolean>(userIsFollowed);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  console.log("viewer id: <followButton>", `${session?.data?.user.id}`);
  console.log("follow id: <followButton>", `${id}`);

  async function handleFollow() {
    const url = `http://localhost:3005/api/user/${id}/follow?viewerId=${session?.data?.user.id}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        return;
      }
      if (response.ok) {
        setIsFollowing(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }
  // ??
  const handleUnfollow = async () => {
    setIsLoading(true);
    const unfollowRes = await fetch(
      `http://localhost:3005/api/user/${id}/unfollow?viewerId=${session?.data?.user.id}`,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (unfollowRes.ok) {
      setIsFollowing(false);
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isFollowing ? (
        <Button
          className="w-full bg-primary1-500 text-white-100"
          onClick={handleUnfollow}
        >
          Unfollow
          {isLoading && (
            <div className="loader size-3 rounded-full border-2 border-t-primary1-500 ease-linear"></div>
          )}
        </Button>
      ) : (
        <Button
          className="flex w-full items-center justify-center gap-2 bg-primary1-500 text-white-100"
          onClick={handleFollow}
        >
          Follow
          {isLoading && (
            <div className="loader size-3 rounded-full border-2 border-t-primary1-500 ease-linear"></div>
          )}
        </Button>
      )}
    </div>
  );
};

export default FollowButton;
