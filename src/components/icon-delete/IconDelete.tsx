import style from "./style-icon-delete.module.sass";

interface IProps {
    onClickHandler: () => void
}

const IconDelete = (props: IProps) => {
    const { onClickHandler } = props;
    return (
        <svg
            onClick={onClickHandler}
            className={style.icon}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 284.011 284.011"
            version="1.1"
            viewBox="0 0 284.011 284.011"
            xmlSpace="preserve"
        >
        <path d="M235.732 66.214l-28.006-13.301 1.452-3.057c6.354-13.379.639-29.434-12.74-35.789L172.316 2.611c-6.48-3.079-13.771-3.447-20.532-1.042-6.76 2.406-12.178 7.301-15.256 13.782l-1.452 3.057L107.07 5.106c-14.653-6.958-32.239-.698-39.2 13.955L60.7 34.155a10.002 10.002 0 004.743 13.324l74.218 35.25h-98.18a10.002 10.002 0 00-9.965 10.831l13.143 157.706c1.53 18.362 17.162 32.745 35.588 32.745h73.54c18.425 0 34.057-14.383 35.587-32.745l11.618-139.408 28.205 13.396a9.956 9.956 0 004.283.969c3.74 0 7.328-2.108 9.04-5.712l7.169-15.093c6.957-14.657.697-32.243-13.957-39.204zm-81.138-42.283a6.823 6.823 0 013.896-3.521 6.812 6.812 0 015.245.267l24.121 11.455a6.872 6.872 0 013.255 9.144l-1.452 3.057-36.518-17.344 1.453-3.058zm14.847 225.673c-.673 8.077-7.55 14.405-15.655 14.405h-73.54c-8.106 0-14.983-6.328-15.656-14.405L52.35 102.728h129.332l-12.241 146.876zM231.62 96.835l-2.878 6.06L83.057 33.701l2.879-6.061c2.229-4.695 7.863-6.698 12.554-4.469l128.661 61.108c4.694 2.23 6.699 7.863 4.469 12.556z"></path>
    </svg>
    )
}

export default IconDelete;