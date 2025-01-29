import { redirect } from "next/dist/server/api-utils";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export const requiredUser = async () => {
    const {getUser} = getKindeServerSession();
      const user = await getUser();
    if (!user) {
        redirect('/')
    }
}