import { getServerSession } from "next-auth";

import EditProfile from "@/components/profile/EditProfile";
import { authOptions } from "@/lib/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const resUser = await fetch(
    `${process.env.SERVER_URL}/api/user/${session?.user.id}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await resUser.json();

  return (
    <section className="flex items-center justify-center">
      <EditProfile user={userData} />
    </section>
  );
};

export default Page;
