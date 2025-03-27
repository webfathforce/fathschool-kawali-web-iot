"use client";

import { useLogin } from "@/hooks/useAuth";
import { Auth, AuthSchema } from "@/lib/schemas/Auth";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Icons } from "@/lib/resource/IconExport";
import Image from "next/image";
import React from "react";

const FormLogin = () => {
  const [isPasswordShow, setShowPassword] = React.useState(false);

  // Form Login
  const { Login, LoginLoad } = useLogin();
  const { handleSubmit, register, formState: { errors } } = useForm<Auth>({
    mode: "onChange",
    resolver: zodResolver(AuthSchema),
  });

  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center">
      <form className="w-full sm:w-[400px]" onSubmit={handleSubmit((data: Auth) => Login(data))}>
        <div className="flex items-center justify-center">
          <Image src="/docs/logo.png" alt="logo" width={90} height={90} />
        </div>

        <div className="text-center my-6 space-y-4">
          <h3>Login</h3>
          <p>Silakan masuk ke akun Anda untuk mengakses sistem.</p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <Input
            label="NISN"
            type="text"
            placeholder="Masukan NISN Siswa"
            labelPlacement="outside"
            variant="bordered"
            isInvalid={!!errors.nisn}
            errorMessage={errors.nisn?.message}
            {...register("nisn")}
          />
          <Input
            label="Password"
            type={isPasswordShow ? "text" : "password"}
            placeholder="Masukan Password"
            labelPlacement="outside"
            variant="bordered"
            isInvalid={!!errors.birthdate}
            errorMessage={errors.birthdate?.message}
            description="ex: 2000-01-01"
            endContent={
              <button type="button" onClick={() => setShowPassword(!isPasswordShow)}>
                {isPasswordShow ? <Icons.eye/> : <Icons.eyeOff/>}
              </button>
            }
            {...register("birthdate")}
          />
        </div>
        <Button
          fullWidth
          type="submit"
          isLoading={LoginLoad}
          isDisabled={LoginLoad}
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
