import Link from "next/link";
import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex flex-col min-h-svh justify-center gap-6 p-6 md:p-10 items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src={"/logos/logo.svg"} width={30} height={30} alt="logo" />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
