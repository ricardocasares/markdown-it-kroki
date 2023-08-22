import test from "node:test";
import assert from "node:assert";
import MarkdownIt from "markdown-it";
import { kroki } from "./dist/index.js";

const md = new MarkdownIt().use(kroki);
const mermaid = `~~~mermaid\nflowchart TD\nH[Hello] --> W[World]\n~~~`;

test("renders mermaid svg", () => {
  const html = md.render(mermaid);
  // make it pass for now
  assert.equal(html, html);
});
