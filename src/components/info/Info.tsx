import style from "./style-info.module.sass";

const Info = () => {
    return (
        <div className={style.info}>
            <h2 className={style.title}>Задание</h2>
            <div className={style.text} style={{"textIndent": 40}}>Используя API <span className={style.green}>https://jsonplaceholder.typicode.com/guide/</span> необходимо сделать админскую панель для просмотра сущностей в этом API.</div>
            <h2 className={style.title}>Стек</h2>
            <div className={style.text}>Обязательно-минимальный стек:</div>
            <ul className={style.list}>
                <li className={style.item}><span>React;</span></li>
                <li className={style.item}><span>Redux;</span></li>
                <li className={style.item}><span>Axios;</span></li>
                <li className={style.item}><span>React Router v.6;</span></li>
            </ul>
            <div className={style.text}>Можно использовать любые библиотеки:</div>
            <ul className={style.list}>
                <li className={style.item}><span>Redux-Toolkit;</span></li>
                <li className={style.item}><span>Redux-Act;</span></li>
                <li className={style.item}><span>и т.д.</span></li>
            </ul>
            <div className={style.text}>Можно использовать любую библиотеку стилей:</div>
            <ul className={style.list}>
                <li className={style.item}><span>Ant design;</span></li>
                <li className={style.item}><span>Material;</span></li>
                <li className={style.item}><span>Bootstrap;</span></li>
                <li className={style.item}><span>и т.д.</span></li>
            </ul>
            
            <h2 className={style.title}>Сущности</h2>
            <div className={style.text}>При разработке должны быть использованы следующие сущности:</div>
            <ul className={style.list}>
                <li className={style.item}><span><span className={style.green}>Посты</span>, к ним идут комментарии. Необходимо сделать древовидную структуру просмотра (как на любом форуме, пикабу, реддит и тд);</span></li>
                <li className={style.item}><span><span className={style.green}>Альбомы</span>, к ним идут фотографии. Каждый альбом - это слайдер. Слайды - фотки, прикрепленные к альбому;</span></li>
                <li className={style.item}><span><span className={style.green}>Todos</span>, сущность с 2мя состояниями. Необходимо сделать доску с 2мя статусами и реализовать Drug&Drop по переносу с одной колонки в другую;</span></li>
            </ul>

            <h2 className={style.title}>Критерии оценки</h2>
            <div className={style.text}>Основные баллы начисляются за реализацию базовых секций:</div>
            <ul className={style.list}>
                <li className={style.item}><span>Вкладка с просмотром постов и комментариев к ним = <span className={style.green}>40б</span>;</span></li>
                <li className={style.item}><span>Вкладка с альбомами = <span className={style.green}>40б</span>;</span></li>
                <li className={style.item}><span>Вкладка с просмотром Todos = <span className={style.green}>40б</span>;</span></li>
            </ul>

            <div className={style.text}>Дополнительные баллы можно получить за:</div>
            <ul className={style.list}>
                <li className={style.item}><span>Реализация на TS = <span className={style.green}>20б</span>;</span></li>
                <li className={style.item}><span>Приемлемый внешний вид и хорошо подобранная палитра цветов = <span className={style.green}>10б</span></span></li>
                <li className={style.item}><span>Собственная сборка на webpack без использования create-react-app = <span className={style.red}>5б</span>;</span></li>
                <li className={style.item}><span>Тесты (любые unit, e2e ...) = <span className={style.red}>5б</span>;</span></li>
                <li className={style.item}><span>Не нативный Redux (redux-toolkit и т.д.) = <span className={style.green}>20б</span>;</span></li>
                <li className={style.item}><span>Реализацию всего CRUD. Создание сущности на url: "/create" = <span className={style.green}>10б</span>, редактирование на "/edit/:id" = <span className={style.green}>10б</span>, удаление = <span className={style.green}>5б</span>;</span></li>
                <li className={style.item}><span>За использование методов массива, предназначенных для их обработки: map, filter, reduce, some, every = <span className={style.green}>5б</span>;</span></li>
            </ul>


            <div className={style.text}>Основные баллы: <span className={style.green}>40</span> + <span className={style.green}>40</span> + <span className={style.green}>40</span> = <span className={style.green}>120</span></div>
            <div className={style.text}>Дополнительные баллы: <span className={style.green}>20</span> + <span className={style.green}>10</span> + <span className={style.red}>5</span> + <span className={style.red}>5</span> + <span className={style.green}>20</span> + <span className={style.green}>10</span> + <span className={style.green}>10</span> + <span className={style.green}>5</span> + <span className={style.green}>5</span> = <span className={style.red}>90</span> (<span className={style.green}>80</span>)</div>
            <div className={style.text}>Итого: <span className={style.red}>210</span> (<span className={style.green}>200</span>)</div>

            <h2 className={style.title}>Deploy</h2>
            <div className={style.text}>
                <p style={{"textIndent": 40}}>Код задания необходимо выложить на GitHub, и задеплоить на любой бесплатный сервис, чтобы была возможность посмотреть (GitHub pages, heroku, etc).</p>
                <p style={{"textIndent": 40}}>Если вдруг не получается сделать что-то все равно нужно сделать максимум. Минимумом считается задеплоенный проект, хотя бы с одной секцией.</p>
            </div>
        </div>
    )
}

export default Info;