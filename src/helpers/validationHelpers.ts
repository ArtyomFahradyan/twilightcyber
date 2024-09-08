import { domainRegex } from "@constants";

export function isValidDomain(domain: string) {
  return domainRegex.test(domain);
}
