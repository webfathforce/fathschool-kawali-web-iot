import { axiosInstance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

function useGetWeather() {
  const { data } = useQuery({
    queryKey: ['getWeather'],
    queryFn: () => axiosInstance.get('/weather'),
    staleTime: 1000 * 60 * 5
  })

  return {
    result: data,
    data: data?.data as any
  }
}

export { useGetWeather };
