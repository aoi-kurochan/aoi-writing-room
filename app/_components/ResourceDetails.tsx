"use client";
import { useEffect } from "react";
import Link from "next/link";
import { MarkdownDownload } from "./MarkdownDownload";
import { downloads } from "../_data/content";
import downloadContent from "../_data/download-content.json";

export function ResourceDetails() {
  useEffect(() => {
    function reveal() {
      const id = window.location.hash.slice(1);
      if (!/^(resource-\d{2}|planning|structure|drafting|voice|review|publish|grow|upcoming-categories|category-library)$/.test(id)) return;
      const target = document.getElementById(id);
      if (!target) return;
      const details = target instanceof HTMLDetailsElement ? target : target.closest("details");
      if (details instanceof HTMLDetailsElement) details.open = true;
      target.scrollIntoView({ block: "start" });
    }
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  return <div className="resources-list">
    {downloads.map((item) => <details className="resource" id={`resource-${item.number}`} key={item.file}>
      <summary><span><span className="resource-number">{item.number}</span><span className="resource-title">{item.title}</span></span></summary>
      <div className="resource-body">
        <p>{item.description}</p>
        <dl><dt>使うタイミング</dt><dd>{item.timing}</dd><dt>使い方</dt><dd>{item.editing}</dd><dt>検証・版</dt><dd>{item.verified}／{item.version}</dd></dl>
        <ol>{item.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <MarkdownDownload className="download" content={downloadContent[item.file]} fileName={item.downloadName}>ファイルをダウンロード ↓</MarkdownDownload>
        <Link className="related" href={item.relatedHref}>関連：{item.related} →</Link>
      </div>
    </details>)}
  </div>;
}
