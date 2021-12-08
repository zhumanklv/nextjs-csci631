import styles from '../../styles/Login.module.css';
import {set, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import axios from 'axios';
import {useContext, useState} from "react";
import jwt from 'jsonwebtoken';
import SignUp from "../../components/SignUp";
import {UserContext} from "../../components/UserContext";
const Login = () => {

    const [user, setUser] = useContext(UserContext);
    const router = useRouter();
    const managers = { username: 'Bauka@gmail.com', password: "Bauka1234"};
    const deskClerks = {username: 'John@fizmathotels.com', password: 'John1234'}

    const [showPassword, setShowPassword] = useState('password');
    const [showLogin, setShowLogin] = useState(true);
    const [userName, setUserName] = useState();
    const {register, handleSubmit} = useForm();

    const passwordImg = () => {
        if(showPassword === 'password'){
            setShowPassword('text');
        }else{
            setShowPassword('password');
        }
    }
    const onClickLogIn = async (d) => {
        await fetch('http://localhost:8080/hotel/login', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                "Authorization" : "Basic" + btoa(d.username+":" + d.password),
                "Content-type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }).then(res => {
            console.log(res.json());
        })

    }
    return (
        <div className={styles.outer}>
            <div className={styles.forma}>
                <div className={styles.formaTitle + " " + styles.formatTitleFirst}>FIZMAT</div>
                <div className={styles.formaTitle}>hotels</div>
                <span style={{cursor: 'pointer'}} onClick={()=> {setShowLogin(true);}} >Log In /</span>
                <span style={{cursor: 'pointer'}} onClick={()=> {setShowLogin(false);}} >Sign Up </span>
            </div>

            {showLogin && (<div className={styles.loginForm}>
                <form onSubmit={handleSubmit(onClickLogIn)}>
                    <div className={styles.loginFormUsername}>
                        <input
                            className={styles.inputUsername}
                            placeholder="USERNAME"
                            {...register("username")}
                        />
                    </div>
                    <div className={styles.loginFormPassword}>
                        <input
                            type = {showPassword}
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
                        LOGIN
                    </button>
                </form>

            </div>)}
            {!showLogin && <SignUp/>}
        </div>
    )
}

export default Login;
