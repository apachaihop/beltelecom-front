import React from "react";
import "./third.css"

const Branches = () => {
    return(
        <div className={"container__third__all"}>
            <div className={"container__first"}>
                <button className={"button"}>Получить данные</button>
            </div>


            <table className={"table__oblasti"}>
                <tr className={"oblasti"}>
                    <td>Минск</td>
                    <td>Минская обл.</td>
                    <td>Гродненская обл.</td>
                    <td>Гомельская обл.</td>
                    <td>Могилевская обл.</td>
                    <td>Брестская обл.</td>
                    <td>Витебская обл.</td>
                </tr>
            </table>


            <table className={"table__vivod"}>
                <thead>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Телефон</th>
                    <th>Время Работы</th>
                    <th>Рейтинг</th>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Branches;