import React from 'react';
import style from './Button.css'
import clsx from "clsx";

function Button() {
    return (
        <div>
            <button className={style.btn}>Click me</button>
            <button className={clsx(style.btn, style.active)}>Click me</button>
        </div>
    );
}

export default Button;
