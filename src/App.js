import './App.css';
import {useEffect, useState} from "react";
import Content from "./Content";

const tabs = ['posts', 'comments', 'albums']

function App() {
    const [isShow, setIsShow] = useState(false)
    const [posts, setPosts] = useState([])
    const [type, setType] = useState(tabs[0])
    const [showGoToTop, setShowGoToTop] = useState(false)

    // console.log(type)

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(data => setPosts(data))
    // }, [type]);
    //
    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.scrollY)
    //         setShowGoToTop(window.scrollY >= 200)
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //
    //     // hàm dọn dẹp
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, []);


    return (
        <div className="App">

            <button onClick={() => setIsShow(!isShow)}>Toggle</button>
            {isShow && <div>

                {/*{*/}
                {/*    tabs.map((tab, index) =>*/}
                {/*        <button*/}
                {/*            key={index}*/}
                {/*            style={type === tab ? {*/}
                {/*                color: '#fff',*/}
                {/*                backgroundColor: '#333'*/}
                {/*            } : {}}*/}
                {/*            onClick={() => {*/}
                {/*                setType(tab)*/}
                {/*            }}*/}
                {/*        >{tab}</button>*/}
                {/*    )*/}
                {/*}*/}

                {/*<ul>*/}
                {/*    {posts.map(post => (*/}
                {/*        <li key={post.id}>{post.title || post.name}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                {/*{showGoToTop && (*/}
                {/*    <button style={{*/}
                {/*        position: 'fixed',*/}
                {/*        right: 20,*/}
                {/*        bottom: 20*/}
                {/*    }}>Show</button>*/}
                {/*)}*/}

                <Content/>
            </div>}


        </div>
    );
}

export default App;
