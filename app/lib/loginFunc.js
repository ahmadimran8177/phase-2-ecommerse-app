"use server";
import prisma from "@/app/lib/prismaCLient";
import { redirect } from "next/navigation";
export const loginFunc = async (username, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email: username,
    },
  });
  const originalPassword = user?.password;
  if (originalPassword == password) {
    const redirectPath = `/user/${user?.id}`;
    redirect(redirectPath);
  } else {
    redirect("/error");
  }
};
