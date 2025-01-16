import clsx from 'clsx'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}></div>
    </header>
  )
}

export default Header