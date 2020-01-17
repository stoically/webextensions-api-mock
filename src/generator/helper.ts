export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeArray(strings: string[]): string[] {
  strings.forEach(
    (string, index, strings) => (strings[index] = capitalize(string))
  );
  return strings;
}

export function isCapitalized(string: string): boolean {
  return string.charAt(0) !== string.charAt(0).toLowerCase();
}
export function underscoreToCamelCase(string: string): string {
  return string.replace(/_([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
}
