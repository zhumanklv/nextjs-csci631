import styles from "../styles/Login.module.css";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import axios from 'axios';
import {UserContext} from "./UserContext";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
const SignUp = () => {
    const router = useRouter();
    const [_, setUser] = useContext(UserContext);
    const [showPassword, setShowPassword] = useState('password');
    const {register, handleSubmit} = useForm();
    const passwordImg = () => {
        if(showPassword === 'password'){
            setShowPassword('text');
        }else{
            setShowPassword('password');
        }
    }
    const onClickSignUp = async (d) => {
        $.post("http://localhost:8080/hotel/signup", JSON.stringify({
                username: d.username,
                password: d.password,
                surname: d.surname,
                name: d.name
        }), function(response) {
            Cookies.set('name', response.name);
            Cookies.set('surname', response.surname);
            Cookies.set('access_token', response.access_token);
            router.push('/user');
        })
    }
    return (
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit(onClickSignUp)}>
                    <div style = {{marginTop: 0, paddingRight: 0,}} className={styles.loginFormPassword}>
                        <input
                            style={{ width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="NAME"
                            {...register("name")}
                        />
                    </div>
                    <div style = {{paddingRight: 0, }}className={styles.loginFormPassword}>
                        <input
                            style={{width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="SURNAME"
                            {...register("surname")}
                        />
                    </div>
                    <div className={styles.loginFormUsername}>
                        <input
                            className={styles.inputUsername}
                            placeholder="USERNAME"
                            {...register("username")}
                        />
                    </div>
                    <div className={styles.loginFormPassword}>
                        <input
                            type={showPassword}
                            className={styles.inputPassword}
                            placeholder="PASSWORD"
                            {...register("password")}
                        />
                        <img src="hidden.png" alt="password" onClick={passwordImg}/>
                    </div>
                    <button
                        className={styles.buttonLogin}
                        type="submit"
                    >
                        SIGN UP
                    </button>
                </form>
        </div>
    )
}

export default SignUp;