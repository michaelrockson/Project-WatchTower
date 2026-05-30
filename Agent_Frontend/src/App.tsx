import LoginPage from "./pages/Login/LoginPage.tsx";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";


export default function App(): React.JSX.Element {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
        </Router>
)
}
