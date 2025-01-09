import React, {useRef, useState} from 'react';

function Content() {
    const renderCount = useRef(0)

    const [count, setCount] = useState(0)

    renderCount.current += 1

    return (
        <div>
            <h1>Số lần render: {renderCount.current}</h1>
            <h1>Số: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Thay đổi màu nền</button>
        </div>
    );
}

export default Content;
