import { useEffect, useState } from "react";
import { fetchDashboardData } from "../orchestrators/DashboardOrchestrator.ts";
import type { DashboardData } from "../models/DashboardModels.ts";

export const useDashboardData = () => {
  const [payload, setPayload] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchDashboardData()
      .then((data) => {
        if (isMounted) {
          setPayload(data);
          setLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
          setPayload(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { payload, loading, error };
};
