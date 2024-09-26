// import './App.css'
//
// function App() {
//
// }
//
// export default App
// setInterval(App, 1000);




import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function App() : JSX.Element {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/characters/hero')
    }, []);
    return (
        <></>
    );
}

export default App;