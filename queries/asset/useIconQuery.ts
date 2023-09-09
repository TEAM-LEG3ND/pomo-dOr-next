import { GetIconOptions, getIcon } from "@/apis/asset/api";
import { useQuery } from "@tanstack/react-query";

export const generateIconQuery = (name: string, options?: GetIconOptions) => ({
  queryKey: ["icon", name],
  queryFn: () => getIcon(name, options),
});

function useIconQuery(name: string, options?: GetIconOptions) {
  const { isError, isLoading, data } = useQuery(
    generateIconQuery(name, options),
  );

  return {
    isError,
    isLoading,
    icon: data,
  };
}

export default useIconQuery;
