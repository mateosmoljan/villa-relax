import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import VillaRelaxClient from "./VillaRelaxClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildPageMetadata(locale, "/villa-relax");
}

export default function VillaRelaxPage() {
  return <VillaRelaxClient />;
}
