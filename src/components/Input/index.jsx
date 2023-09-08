import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ userSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={styles.input}>
            <input
                type="text"
                placeholder="Digite o nome de usuário"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => {
                    userSubmit(inputValue);
                    setInputValue("");
                }}
            />
        </div>
    );
};

export default Input;
