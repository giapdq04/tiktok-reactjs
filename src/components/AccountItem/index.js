import clsx from "clsx"
import style from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

const AccountItem = () => {
    return (
        <div className={clsx(style.wrapper)}>
            <img
                src="https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984_1280.jpg"
                className={clsx(style.avatar)}
                alt="avatar" />
            <div className={clsx(style.info)}>
                <h4 className={clsx(style.name)}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={clsx(style.check)} icon={faCircleCheck} />
                </h4>
                <span className={clsx(style.username)}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem