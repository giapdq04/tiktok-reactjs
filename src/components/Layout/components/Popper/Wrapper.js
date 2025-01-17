import clsx from "clsx"
import style from './Popper.module.scss'

const Wrapper = ({children}) => {
  return (
    <div className={clsx(style.wrapper)}>{children}</div>
  )
}

export default Wrapper