import axiosInstance from "@/lib/services/axios";
import { Auth } from "@/lib/schemas/Auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

/**
 * * Function Untuk Login 
 * @returns {Login, LoginLoad}
 */
function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Auth) => axiosInstance().post("/auth/parent/login", data),
    onSuccess: (result) => {
      const fullToken = result.data.token; // Contoh: "4542|XKErKilyWgNctqHkSK2A5XQlLAmWiKor0hYaPjdj"
      const cleanToken = fullToken.split("|")[1];
  
      localStorage.setItem("token", cleanToken);
      localStorage.setItem("user_id", result.data.data.id);

      window.location.href = "/dashboard";
      toast.success(result.data.message)
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  return {
    Login: mutate,
    LoginLoad: isPending,
  };
}

export { useLogin };
