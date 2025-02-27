import axiosInstance from "@/lib/services/axios";
import { useQuery } from "@tanstack/react-query";

/**
 * * Function untuk mendapatkan Event
 * @returns 
 */
function useGetEvent(type: 'All' | 'Upcoming' | 'Ongoing' | 'Ended') {
  const { data, isPending } = useQuery({
    queryFn: async () => await axiosInstance().get(`events?status=${type}`),
    queryKey: ['event', type]
  })

  return {
    Event: data?.data.data || [],
    EventLoad: isPending
  }
}

export {
  useGetEvent
}