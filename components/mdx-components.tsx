import type { MDXComponents } from "mdx/types";
import type { TableHTMLAttributes } from "react";
import PullQuote from "./mdx/PullQuote";
import { StatGrid, Stat } from "./mdx/StatGrid";

// Wrap raw markdown tables in a scroll container so wide scoreboards and
// standings tables never force the page to overflow horizontally on mobile.
function Table(props: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  PullQuote,
  StatGrid,
  Stat,
  table: Table,
};
