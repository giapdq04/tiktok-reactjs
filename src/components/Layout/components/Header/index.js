import {useEffect, useRef, useState} from 'react';
import {
    faArrowRightToBracket,
    faCircleNotch,
    faCircleXmark,
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
                </div>
            </div>
        </header>
    )
}

export default Header;