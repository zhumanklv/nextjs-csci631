import {useRouter} from "next/router";
import {useContext} from "react";
import {UserContext} from "./UserContext";

export const OnLogOut = () => {
    const [_, setUser] = useContext(UserContext);
    const router = useRouter();
    setUser('NaN');
    localStorage.clear();
    router.push('/');
}