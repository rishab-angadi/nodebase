import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { Logout } from "./signout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className="min-h-screen w-screen flex items-center justify-center gap-6 flex-col">
      {JSON.stringify(data, null, " ")}
      <Logout />
    </div>
  );
};

export default Page;
