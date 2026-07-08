import { useEffect } from "react";
import { cvDocumentMeta } from "../features/one-column/cvDocumentMeta";

function setMetaByName(name: string, content: string) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  document.querySelector(`meta[property="${property}"]`)?.setAttribute("content", content);
}

export function useCvDocumentMeta() {
  useEffect(() => {
    const { title, description, keywords } = cvDocumentMeta;
    document.title = title;
    setMetaByName("title", title);
    setMetaByName("description", description);
    setMetaByName("keywords", keywords);
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, []);
}
