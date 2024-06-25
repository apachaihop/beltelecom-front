import React from "react";
import "./first.css"
import { useEffect, useState } from "react";
// import "../../Ex.json"

const First = () => {

    return(
        <div className={"container__first__all"}>
            
            <div className={"container__first"}>
                <button className={"button"}>Получить данные</button>
            
        
                <div className={"vivod"}>
                    <h2>Полученные данные:</h2>

                    <table className="table">
                        <thead className="Head__Table__1">
                        <tr>
                            <td>Название</td>
                            <td>Скорость</td>
                            <td>Цена</td>
                            <td>Подробнее</td>
                            <td>Статус</td>
                        </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
}

export default First;