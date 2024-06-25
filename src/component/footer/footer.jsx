import React from "react";
import "./footer.css"
import Photo from "../../img/beltelecom1.jpg"
import Twitter from "../../img/twitter.png"
import Vk from "../../img/vk.png"
import Facebook from "../../img/facebook.png"
import Instagram from "../../img/instagram.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
            <img className="header__photo"src={Photo} alt="beltelecom1"/>
            <div>
                <ul className="spisok__footer">
                    <li>ВРЕМЯ РАБОТЫ:</li>
                    <li>Пн-Пт 8:00-20:00</li>
                    <li>Сб 9:00-17:00</li>
                    <li>Вс Закрыто</li>
                </ul>
            </div>
            
            <div className="seti">
                <p>РУП «Белтелеком». УНП 101007741</p>
                <div className="social">
                    <div className="Icon2">
                        <img className="Icon" src={Twitter} alt={"Twitter"} />
                    </div>
                    <div className="Icon2">
                        <img className="Icon" src={Vk} alt={"Twitter"} />
                    </div>
                    <div className="Icon2">
                        <img className="Icon" src={Facebook} alt={"Twitter"} />
                    </div>
                    <div className="Icon2">
                        <img className="Icon" src={Instagram} alt={"Twitter"} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;