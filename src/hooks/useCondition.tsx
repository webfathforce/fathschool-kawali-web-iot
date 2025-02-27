import axiosInstance from "@/lib/services/axios";
import { useQuery } from "@tanstack/react-query";

function useGetCondition() {
  const { data, isPending } = useQuery({
    queryFn: async () => axiosInstance().get('dummy/condition'),
    queryKey: ["getCondition"],
  })

  return {
    Condition: data?.data.data || [],
    ConditionLoad: isPending
  }
}

export {
  useGetCondition
}