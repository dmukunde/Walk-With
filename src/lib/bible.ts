export function bibleGatewayUrl(reference: string) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=NIV`;
}
