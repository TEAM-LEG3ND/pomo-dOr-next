import { GetIconOptions } from "@/apis/asset/api";
import { generateIconQuery } from "./useIconQuery";
import usePrefetchQuery from "../usePrefetchQuery";

function usePrefetchIconQuery(name: string, options?: GetIconOptions) {
  usePrefetchQuery(generateIconQuery(name, options));
}

export default usePrefetchIconQuery;
