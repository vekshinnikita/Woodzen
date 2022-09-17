import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DeliveryPage: FC = () => {

    const navigate = useNavigate()

    return (
        <section id="Delivery"  className="content fade " style={{flex: 1}}>
            <div className="delivery">
                <div className="delivery__title">
                    Мы организовываем доставку по всей России!
                </div>
                    <div className="delivery__block">
                        <div className="delivery__regions">
                            <img src="icons/emblem/SPB.svg" alt="spb"/>
                            <div className="delivery__subtitle">
                            Санкт-Петербург и Лен.область </div>
                        </div>
                        <div className="delivery__regions">
                            <img src="icons/emblem/CAR.svg" alt="car"/>
                            <div className="delivery__subtitle">
                            Все регионы Россия </div>
                        </div>
                        <Link to='/basket'>
                        <button 
                            className="delivery__order"
                        >Заказать</button></Link>
                    </div>
            </div>
        </section>

    )
}

export default DeliveryPage
