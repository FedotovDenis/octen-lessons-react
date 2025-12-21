import type { FC } from "react";
import type { IUser } from "../../model/IUser.ts";
import { Link, useNavigate } from "react-router-dom";

type UserTypeProps = {
    item: IUser
}

const UserComponent: FC<UserTypeProps> = ({item}) => {
    /**
     * Способ 1: Использование useNavigate (императивный подход)
     * Преимущества:
     * - Программный контроль над навигацией
     * - Возможность добавить логику перед переходом
     * - Подходит для сложных сценариев (валидации, подтверждения)
     * 
     * Используйте когда:
     * - Нужна дополнительная логика перед переходом
     * - Навигация зависит от определенных условий
     * - Требуется программное управление
     */
    const navigate = useNavigate();
    const handleOnCleack = () => {
        navigate('details', {state: item})
    }

    return(
        <div>
            {/* 
              * Способ 2: Использование Link (декларативный подход)
              * Преимущества:
              * - Лучшая доступность (accessibility)
              * - Можно открыть в новой вкладке
              * - Видно URL при наведении
              * - SEO-friendly
              * - Стандартная навигация браузера
              * 
              * Используйте когда:
              * - Это обычная навигация
              * - Важна доступность
              * - Не требуется дополнительная логика
              */}
            <Link to={'details'} state={item}>{item.username}</Link>

            {/* Пример с useNavigate */}
            <button onClick={handleOnCleack}>
                go to details
            </button>
        </div>
    )
}

export default UserComponent;