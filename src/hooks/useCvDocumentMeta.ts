import { useEffect } from "react";
import { getCvDocumentMeta } from "../features/one-column/cvDocumentMeta";
import type { CvProfileDataKey } from "./useCvProfileDataKey";

function setMetaByName(name: string, content: string) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  document.querySelector(`meta[property="${property}"]`)?.setAttribute("content", content);
}

/**
 * Met à jour le titre de l’onglet et les meta description / Open Graph / Twitter
 * selon le profil CV (?profile=). Les crawlers qui ne exécutent pas le JS
 * restent sur le fallback défini dans index.html.
 */
export function useCvDocumentMeta(profile: CvProfileDataKey) {
  useEffect(() => {
    const { title, description } = getCvDocumentMeta(profile);
    document.title = title;
    setMetaByName("title", title);
    setMetaByName("description", description);
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, [profile]);
}
