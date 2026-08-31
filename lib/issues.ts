import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Issue, IssueFrontmatter } from "./types";

const ISSUES_DIR = path.join(process.cwd(), "content", "issues");

function walkMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMdxFiles(fullPath);
    if (entry.name.endsWith(".mdx")) return [fullPath];
    return [];
  });
}

function loadIssue(filePath: string): Issue {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, ".mdx");
  const frontmatter = data as IssueFrontmatter;
  return {
    frontmatter,
    slug,
    season: frontmatter.season,
    content,
  };
}

let cachedIssues: Issue[] | null = null;

export function getAllIssues(): Issue[] {
  if (cachedIssues) return cachedIssues;
  const files = walkMdxFiles(ISSUES_DIR);
  const issues = files
    .map(loadIssue)
    .filter((issue) => issue.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
  cachedIssues = issues;
  return issues;
}

export function getLatestIssue(): Issue | undefined {
  return getAllIssues()[0];
}

export function getIssueBySlug(
  season: number,
  slug: string,
): Issue | undefined {
  return getAllIssues().find(
    (issue) => issue.season === season && issue.slug === slug,
  );
}

export function getPreviousIssue(current: Issue): Issue | undefined {
  const all = getAllIssues();
  const index = all.findIndex(
    (issue) => issue.season === current.season && issue.slug === current.slug,
  );
  if (index === -1) return undefined;
  return all[index + 1];
}

export function getIssuesBySeason(): { season: number; issues: Issue[] }[] {
  const all = getAllIssues();
  const seasons = Array.from(new Set(all.map((issue) => issue.season))).sort(
    (a, b) => b - a,
  );
  return seasons.map((season) => ({
    season,
    issues: all.filter((issue) => issue.season === season),
  }));
}
