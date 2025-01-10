import React, {memo} from 'react';

function Content({onChange}) {
    console.log('re-render')
    return (
        <>
            <h2>HELLO ANH EM F8</h2>
            <button onClick={onChange}>Toggle</button>
        </>
    );
}

export default memo(Content);
