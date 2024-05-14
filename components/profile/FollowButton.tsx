"use client";

import { Button } from "../ui/button";

const FollowButton = ({ id }: { id: string }) => {
  const follows = true;
  // getting this form DB

  const handleFollow = async () => {
    await fetch(`http://localhost:3005/api/user/${id}/follow`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
  };
  const handleUnfollow = async () => {
    await fetch(`http://localhost:3005/api/user/${id}/unfollow`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div>
      {follows ? (
        <Button
          className="w-full bg-primary1-500 text-white-100"
          onClick={handleFollow}
        >
          Follow
        </Button>
      ) : (
        <Button
          className="w-full bg-primary1-500 text-white-100"
          onClick={handleUnfollow}
        >
          Unfollow
        </Button>
      )}
    </div>
  );
};

export default FollowButton;
