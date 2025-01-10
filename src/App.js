import './App.css';
import {useCallback, useState} from "react";
import Content from "./Content";


function App() {
    const [isShow, setIsShow] = useState(false)

    const handleChange = useCallback(() => {
        setIsShow(!isShow)
    },[])

    return (
        <div className="App">

            <h1>{isShow ? 'true' : 'false'}</h1>
            <Content onChange={handleChange}/>


        </div>
    );
}

export default App;
