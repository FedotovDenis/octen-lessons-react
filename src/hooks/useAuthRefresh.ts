import { useState } from "react";
import { refresh } from "../services/api.services";
import type { IUserWithTokens } from "../models/IUserWithTokens";

export const useAuthRefresh = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefresh = async (): Promise<IUserWithTokens | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await refresh();
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Refresh failed";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRefresh, isLoading, error };
};

export default useAuthRefresh;
