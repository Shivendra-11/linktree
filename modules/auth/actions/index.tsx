"use server"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"

export const onBoarduser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    const { id, emailAddresses, firstName, lastName, imageUrl } = user;

    const newuser = await db.user.upsert({
      where: { clerkid: id },
      update: {
        firstname: firstName || null,
        lastname: lastName || null,
        email: emailAddresses[0]?.emailAddress || "",
        imageurl: imageUrl || null,
      },
      create: {
        clerkid: id,
        firstname: firstName || null,
        lastname: lastName || null,
        email: emailAddresses[0]?.emailAddress || "",
        imageurl: imageUrl || null,
        username: "",
      },
    });

    return {
      success: true,
      data: newuser,
    };
  } catch (error) {
    console.error("Error onboarding user:", error);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
};
