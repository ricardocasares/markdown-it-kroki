import type MarkdownIt from "markdown-it";

export type Options = {
  url: string;
  transform: (svg: string) => string;
};

const defaultOptions: Options = {
  url: "https://kroki.io",
  transform: (svg) => svg,
};

export function kroki(md: MarkdownIt, userOptions: Partial<Options>) {
  const options: Options = Object.assign(defaultOptions, userOptions);
}
