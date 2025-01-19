import Tippy from "@tippyjs/react";
import clsx from "clsx";
import styles from "./Menu.module.scss";
import { Wrapper } from "~/components/Layout/components/Popper";
import MenuItem from "~/components/Layout/components/Popper/Menu/MenuItem";


function Menu({
    children,
    items = []
}) {

    const renderItem = () => (
        items.map((item, index) => {
            console.log(item);
            return (
                <MenuItem key={index} data={'hello'} />
            );
        })
    );

    return (
        <Tippy
            interactive={true}
            placement={'bottom-end'}
            render={attrs => (
                <div className={clsx(styles.content)} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        {items.map((item, index) => {
                            console.log(item);
                            return (
                                <MenuItem key={index} data={'hello'} />
                            );
                        })}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;