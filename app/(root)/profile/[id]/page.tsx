import { getServerSession } from "next-auth";

import ProfilePage from "@/components/profile";
import { authOptions } from "@/lib/auth";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { postType: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions);
  const resUser = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${params?.id}?viewerId=${session?.user.id}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await resUser.json();
  if (!resUser.ok) throw new Error("Failed to fetch user data");
  let type = searchParams.postType ?? "standard";
  if (type instanceof Array) type = type[0];

  if (!["standard", "meetup", "podcast", "group"].some((t) => t === type))
    type = "standard";

  let resPosts;
  if (type !== "group") {
    resPosts = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${params?.id}/posts?postType=${type.toUpperCase()}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    resPosts = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${params?.id}/groups`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const postsData = await resPosts.json();

  return (
    <ProfilePage
      user={userData}
      posts={resPosts.ok ? postsData : null}
      type={type}
      isOwner={false}
    />
  );
};

export default Page;
