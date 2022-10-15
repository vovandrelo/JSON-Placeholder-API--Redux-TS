import style from "./content-style.module.sass";

interface IProps {
    children: React.ReactNode
}

const Content = (props: IProps) => {
    const { children } = props;
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Content;