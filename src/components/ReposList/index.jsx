import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((answer) => answer.json())
            .then((answerJson) => {
                setTimeout(() => {
                    setLoading(false);
                    setRepos(answerJson);
                }, 3000);
            });
    }, [username]);

    return (
        <div className="container">
            {loading ? (
                <p>Carregando...</p>
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
