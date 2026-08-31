import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllIssues, getIssueBySlug } from "@/lib/issues";
import IssueView from "@/components/IssueView";

type Params = { season: string; slug: string };

export function generateStaticParams(): Params[] {
  return getAllIssues().map((issue) => ({
    season: String(issue.season),
    slug: issue.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { season, slug } = await params;
  const issue = getIssueBySlug(Number(season), slug);
  if (!issue) return {};
  return {
    title: issue.frontmatter.title,
    description: issue.frontmatter.description,
    openGraph: {
      title: issue.frontmatter.title,
      description: issue.frontmatter.description,
    },
  };
}

export default async function IssuePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { season, slug } = await params;
  const issue = getIssueBySlug(Number(season), slug);
  if (!issue) notFound();

  return (
    <div className="pb-16">
      <IssueView issue={issue} isPermalink />
    </div>
  );
}
