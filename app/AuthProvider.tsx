"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

interface Props{
    children: React.ReactNode;
    className?: string;
}

export const AuthProvider = ({children}: Props) => {
  return <KindeProvider>{children}</KindeProvider>;
};