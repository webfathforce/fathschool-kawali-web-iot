import { axiosInstance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { RESPONSE_WEATHER } from "../types/weater";
import { toast } from "sonner";

function useGetWeather() {
  const { data, isSuccess, isError, refetch, isFetching  } = useQuery({
    queryKey: ['getCondition'],
    queryFn: () => axiosInstance.get('dummy/condition'),
    staleTime: 5 * 60 * 1000, // Data dianggap fresh selama 5 menit
  })

  if (isSuccess) { toast.success('Data Sekolah Berhasil Diperoleh!')}
  if (isError) { toast.error('Gagal mengambil data sekolah. Periksa koneksi atau coba lagi nanti.') }

  return {
    isFetching: isFetching,
    refetch,
    result: data || null,
    data: data?.data.data as RESPONSE_WEATHER
  }
}

export { useGetWeather };
