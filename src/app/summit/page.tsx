import type { Metadata } from "next";
import SummitClientPage from "./SummitClientPage";

export const metadata: Metadata = {
  title: "Founders Summit 2027 | Founders Africa",
  description:
    "Three days. 2,000+ founders, investors, and ecosystem builders. The premier annual gathering for African tech entrepreneurs.",
};

export default function SummitPage() {
  return <SummitClientPage />;
}


