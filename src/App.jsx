import Input from "./components/Input";
import Profile from "./components/Profile";
import ReposList from "./components/ReposList";
// import Form from "./components/Form";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");

    return (
        <>
            <Input userSubmit={setUsername} />

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

