import clsx from 'clsx'
import styles from './Sidebar.module.scss'
const Sidebar = () => {
  return (
    <aside className={clsx(styles.wrapper)}>
      <h2>Sidebar</h2>
    </aside>
  )
}

export default Sidebar