import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setRepos([]);
        setError(false);

        fetch(`https://api.github.com/users/${username}/repos`)
            .then((answer) => {
                if (!answer.ok) {
                    throw Error();
                }
                return answer.json();
            })
            .then((answerJson) => {
                setTimeout(() => {
                    setLoading(false);
                    setRepos(answerJson);
                }, 1500);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [username]);

    return (
        <div className="container">
            {error && (
                    <p className={styles.errorMsg}>Usuário não encontrado</p>
            )}
            {loading ? (
                    <p className={styles.loadingMsg}>Carregando...</p>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a
                                className={styles.listItemLink}
                                target="_blank"
                                href={html_url}>
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
