import React from 'react'
import Sidebar from './Sidebar'
import Header from '../components/Header'
import styles from './DefaultLayout.module.scss'
import clsx from 'clsx'

const DefaultLayout = ({ children }) => {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout