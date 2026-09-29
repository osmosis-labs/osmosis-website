"use server";

import { cookies } from "next/headers";

export default async function setBannerHidden() {
  const cookieStore = await cookies();

  cookieStore.set("bannerHidden", "true");
}
