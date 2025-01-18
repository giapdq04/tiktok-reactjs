import clsx from 'clsx'
import style from './Button.module.scss'
import {Link} from 'react-router'

const Button = ({
                    to,
                    href,
                    onClick,
                    children,
                    disable = false,
                    text = false,
                    rounded = false,
                    small = false,
                    large = false,
                    primary = false,
                    outline = false,
                    className,
                    leftIcon,
                    rightIcon,
                    ...passProps
                }) => {

    let Comp = 'button'
    const props = {
        onClick
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    } else if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    console.log('className: ', className)

    const classes = clsx(style.wrapper, {
        [className]: className,
        [style.primary]: primary,
        [style.outline]: outline,
        [style.small]: small,
        [style.large]: large,
        [style.text]: text,
        [style.disable]: disable,
        [style.rounded]: rounded,
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(style.icon)}>{leftIcon}</span>}
            <span className={clsx(style.title)}>{children}</span>
            {rightIcon && <span className={clsx(style.icon)}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button