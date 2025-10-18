"use client";
import { prisma } from "@/lib/prisma";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;
