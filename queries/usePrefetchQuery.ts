import { FetchQueryOptions, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

function usePrefetchQuery(options: FetchQueryOptions) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetch = async () => {
      await queryClient.prefetchQuery(options);
    };
    prefetch();
  }, []);
}

export default usePrefetchQuery;
