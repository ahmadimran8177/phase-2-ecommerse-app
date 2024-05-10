"use server";
import prisma from "@/app/lib/prismaCLient";
import { redirect } from "next/dist/server/api-utils";
export const loginFunc = async (req) => {
  console.log(req);
  //   const user = await prisma.user.findUnique({
  //     name: usernameValue,
  //   });
  //   const originalPassword = user?.password;
  //   if (originalPassword == passwordValue) {
  //     redirect(`/user/${usernameValue}`);
  //   }
};
