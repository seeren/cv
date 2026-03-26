import { useSearchParams } from "react-router-dom";

const profileDataKeys = ["executive", "delivery", "product"] as const;

export type CvProfileDataKey = "default" | (typeof profileDataKeys)[number];

export function useCvProfileDataKey(): CvProfileDataKey {
  const [searchParams] = useSearchParams();

  const profile = searchParams.get("profile")?.toLowerCase();
  if (profile && profileDataKeys.includes(profile as (typeof profileDataKeys)[number])) {
    return profile as CvProfileDataKey;
  }

  return "default";
}
