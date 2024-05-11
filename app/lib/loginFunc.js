"use server";
import { getUserWithEmail } from "@/app/dataRepository/queryFunc";
import { redirect } from "next/navigation";

export const loginFunc = async (username, password) => {
  const user = await getUserWithEmail(username);
  const originalPassword = user?.password;
  if (originalPassword == password) {
    const redirectPath = `/user/${user?.id}`;
    redirect(redirectPath);
  } else {
    redirect("/error");
  }
};
