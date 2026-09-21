import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { parseIssue } from "../lib/issue-frontmatter.ts";

const issuePath = path.join("content", "issues", "2026", "week-2.mdx");
const fixture = (changes = {}) => {
  const fields = {
    title: '"Week 2"',
    season: "2026",
    week: '"Week 2"',
    date: '"2026-09-23"',
    description: '"The weekly recap."',
    published: "true",
    ...changes,
  };
  return `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join("\n")}\n---\nThe recap.\n`;
};

test("published is an explicit boolean and a false draft stays false", () => {
  assert.equal(parseIssue(fixture(), issuePath).frontmatter.published, true);
  assert.equal(parseIssue(fixture({ published: "false" }), issuePath).frontmatter.published, false);
  for (const published of ['"false"', '"true"', "1", "null", ""]) {
    assert.throws(() => parseIssue(fixture({ published }), issuePath), /published.*without quotes/);
  }
});

test("quoted and unquoted YAML dates normalize to the same rendering value", () => {
  const quoted = parseIssue(fixture(), issuePath);
  const unquoted = parseIssue(fixture({ date: "2026-09-23" }), issuePath);
  assert.deepEqual(unquoted, quoted);
  assert.equal(unquoted.frontmatter.date, "2026-09-23");
  assert.equal(parseIssue(fixture({ date: "2026-09-23 # publication date" }), issuePath).frontmatter.date, "2026-09-23");
  assert.equal(parseIssue(fixture({ date: "2028-02-29" }), issuePath).frontmatter.date, "2028-02-29");
});

test("impossible dates cannot roll into another month or produce Invalid Date", () => {
  for (const date of ['"2026-02-29"', "2026-02-29", '"2026-02-30"', "2026-02-30", '"2026-13-01"', '"September 23, 2026"', "null", '"2026-09-23T12:00:00Z"']) {
    assert.throws(() => parseIssue(fixture({ date }), issuePath), /date.*calendar date/);
  }
});

test("invalid issue identities fail before creating broken routes", () => {
  for (const changes of [{ season: '"2026"' }, { season: "2026.5" }, { season: "2025" }]) {
    assert.throws(() => parseIssue(fixture(changes), issuePath), /season/);
  }
  assert.throws(() => parseIssue(fixture(), path.join("2026", "week 2.mdx")), /filename/);
  for (const key of ["title", "week", "description"]) {
    assert.throws(() => parseIssue(fixture({ [key]: '""' }), issuePath), new RegExp(key));
  }
});

test("all existing issues retain their content, routes, and ISO dates", () => {
  const directory = path.join("content", "issues", "2026");
  const files = fs.readdirSync(directory).filter((name) => name.endsWith(".mdx"));
  assert.ok(files.length > 0);
  for (const file of files) {
    const filePath = path.join(directory, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const issue = parseIssue(raw, filePath);
    assert.equal(issue.slug, path.basename(file, ".mdx"));
    assert.equal(issue.season, 2026);
    assert.match(issue.frontmatter.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(raw.endsWith(issue.content));
  }
});
