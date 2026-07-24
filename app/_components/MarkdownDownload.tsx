"use client";

import type { ReactNode } from "react";

type MarkdownDownloadProps = {
  children: ReactNode;
  className?: string;
  content: string;
  fileName: string;
};

export function MarkdownDownload({
  children,
  className,
  content,
  fileName,
}: MarkdownDownloadProps) {
  function download() {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button className={className} onClick={download} type="button">
      {children}
    </button>
  );
}
