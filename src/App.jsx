import Profile from "./components/Profile";
// import Form from "./components/Form";
import ReposList from "./components/ReposList";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    return (
        <>
            <input type="text" onBlur={(e) => setUsername(e.target.value)} />

            {username.length > 0 && (
                <>
                <Profile username={username} />
                <ReposList username={username} />
                </>
            )}

            {/* <Form /> */}
        </>
    );
}

export default App;

