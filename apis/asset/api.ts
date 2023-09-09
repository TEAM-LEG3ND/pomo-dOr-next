import { S3_BASE_URL } from "../paths";

export type GetIconOptions = {
  baseUrl?: string;
};

export async function getIcon(name: string, options?: GetIconOptions) {
  const { baseUrl } = options ?? { baseUrl: `${S3_BASE_URL}/icons` };

  const res = await fetch(`${baseUrl}/${name}.svg`);
  const icon = await res.text();

  return icon;
}
