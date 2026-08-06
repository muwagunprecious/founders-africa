import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme, programmes } from "../_data";
import ProgramClientPage from "./ProgramClientPage";

type ProgramPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return programmes.map((programme) => ({
    slug: programme.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);

  if (!programme) {
    return {
      title: "Programme not found | Founders Africa",
    };
  }

  return {
    title: `${programme.title} | Founders Africa`,
    description: programme.heroCopy,
  };
}

function getProgramBySlug(slug: string) {
  const programme = getProgramme(slug);

  if (!programme) {
    notFound();
  }

  return programme;
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const programme = getProgramBySlug(slug);

  return <ProgramClientPage programme={programme} />;
}

