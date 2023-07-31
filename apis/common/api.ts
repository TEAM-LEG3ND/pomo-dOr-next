export async function fetchIcon(
  name: string,
  { baseUrl }: { baseUrl: string },
) {
  const res = await fetch(`${baseUrl}/icons/${name}.svg`);
  const icon = await res.text();

  return icon;
}
