import {useEffect, useRef, useState} from 'react';
import {
    faCircleNotch, faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical, faKeyboard,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import {Wrapper} from '../Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from "~/components/Layout/components/Popper/Menu";

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    },
]

const Header = () => {
    const [searchResult, setSearchResult] = useState([])
    const inputRef = useRef(null);

    useEffect(() => {

    }, [searchResult])

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo.default} alt={'logo'}/>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={attrs => (
                        <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </Wrapper>
                        </div>


                    )}
                >
                    <div className={clsx(styles.search)}>
                        <input
                            ref={inputRef}
                            spellCheck={false}
                            placeholder='Search accounts and videos'/>

                        <button className={clsx(styles.clear)}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>

                        <FontAwesomeIcon
                            className={clsx(styles.loading)}
                            icon={faCircleNotch}
                        />

                        <button className={clsx(styles.searchButton)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>

                    </div>
                </Tippy>

                <div className={clsx(styles.actions)}>
                    <Button text>
                        Upload
                    </Button>
                    <Button primary
                    >
                        Log in
                    </Button>

                    <Menu item={MENU_ITEM}>
                        <button className={clsx(styles.moreBtn)}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header;