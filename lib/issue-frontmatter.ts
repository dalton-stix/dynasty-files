import path from "node:path";
import matter from "gray-matter";
import type { Issue, IssueFrontmatter } from "./types";

export function parseIssue(raw: string, filePath: string): Issue {
  const fail = (message: string): never => {
    throw new Error(`Invalid issue ${filePath}: ${message}`);
  };

  const parsed = matter(raw);
  const data: Record<string, unknown> = parsed.data;
  const slug = path.basename(filePath, ".mdx");

  for (const key of ["title", "week", "description"] as const) {
    if (typeof data[key] !== "string" || !data[key].trim()) {
      fail(`"${key}" must be a non-empty string.`);
    }
  }
  if (typeof data.published !== "boolean") {
    fail('"published" must be true or false, without quotes.');
  }
  if (
    typeof data.season !== "number" ||
    !Number.isInteger(data.season) ||
    data.season < 1000 ||
    data.season > 9999
  ) {
    fail('"season" must be a four-digit year without quotes.');
  }
  if (path.basename(path.dirname(filePath)) !== String(data.season)) {
    fail('"season" must match the containing season directory.');
  }
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(slug)) {
    fail("The filename must contain only letters, numbers, hyphens, or underscores.");
  }

  // YAML turns an unquoted ISO date into a Date, including silently rolling
  // impossible dates into the next month. Validate the original calendar date
  // before normalizing it to the string used by rendering and metadata.
  const date = data.date instanceof Date
    ? parsed.matter.match(/^date:[ \t]*(\d{4}-\d{2}-\d{2})[ \t]*(?:#.*)?\r?$/m)?.[1]
    : data.date;
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    fail('"date" must be an ISO calendar date (YYYY-MM-DD).');
  }
  const normalizedDate = date as string;
  const timestamp = new Date(`${normalizedDate}T00:00:00.000Z`);
  if (
    !Number.isFinite(timestamp.getTime()) ||
    timestamp.toISOString().slice(0, 10) !== normalizedDate
  ) {
    fail('"date" must be a real calendar date.');
  }

  for (const key of ["subtitle", "byline"] as const) {
    if (data[key] !== undefined && typeof data[key] !== "string") {
      fail(`"${key}" must be a string when present.`);
    }
  }
  if (data.placeholder !== undefined && typeof data.placeholder !== "boolean") {
    fail('"placeholder" must be true or false, without quotes.');
  }
  if (
    data.tags !== undefined &&
    (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string"))
  ) {
    fail('"tags" must be a list of strings.');
  }

  const frontmatter = { ...data, date: normalizedDate } as IssueFrontmatter;
  return { frontmatter, slug, season: frontmatter.season, content: parsed.content };
}
