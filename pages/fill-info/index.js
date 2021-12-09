
import styles from "../../styles/FillInfo.module.css";
import {useForm} from "react-hook-form";

const fillInfo = () => {
    const {register, handleSubmit} = useForm();
    const onClickSubmit = () => {

    }
    return (
        <>
            <div className={styles.title}>Submit your info, please</div>
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit(onClickSubmit)}>
                    <div style = {{marginTop: 0, paddingRight: 0,}} className={styles.loginFormPassword}>
                        <input
                            style={{ width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="NAME"
                            {...register("passport")}
                        />
                    </div>
                    <div style = {{marginTop: 0, paddingRight: 0,}} className={styles.loginFormPassword}>
                        <input
                            style={{ width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="SURNAME"
                            {...register("passport")}
                        />
                    </div>
                    <div style = {{marginTop: 0, paddingRight: 0,}} className={styles.loginFormPassword}>
                        <input
                            style={{ width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="DOCUMENT TYPE"
                            {...register("passport")}
                        />
                    </div>
                    <div style = {{paddingRight: 0, }} className={styles.loginFormPassword}>
                        <input
                            style={{width: '88%'}}
                            className={styles.inputPassword}
                            placeholder="DOCUMENT NUMBER"
                            {...register("number")}
                        />
                    </div>
                    <div className={styles.loginFormPassword}>
                        <input
                            className={styles.inputUsername}
                            placeholder="MOBILE PHONE NUMBER"
                            {...register("homePhoneNumber")}
                        />
                    </div>
                    <div className={styles.loginFormUsername}>
                        <input
                            className={styles.inputUsername}
                            placeholder="HOME PHONE NUMBER"
                            {...register("homePhoneNumber")}
                        />
                    </div>
                    <div className={styles.loginFormAddress}>
                        <input
                            className={styles.inputPassword}
                            placeholder="ADDRESS"
                            {...register("address")}
                        />
                    </div>
                    <button
                        className={styles.buttonLogin}
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </>

    )
}


export default fillInfo;