import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const ContactPage: FC = () => {
    return (
        <section id="Contacts" className="content fade " style={{flex: 1}}>
            <div className="contacts">
                <ul className="bread-crumbs">
                    <Link to='/'>Главная</Link>
                    <span>/</span>
                    <Link to='/contact'>Контакты</Link>
                </ul>
                <div className="contacts__block">
                    <div className="contacts__radius"></div>
                    <div className='contacts__item-wrap'>
                        <div className="contacts__name">Адрес:</div>
                        <div className="contacts__subtitle">СП-Б,парковая улица дом 6</div>
                    </div>
                    <div className='contacts__item-wrap'>
                        <div className="contacts__name">Телефон:</div>
                        <div className="contacts__subtitle">+79052126111</div>
                    </div>
                    <div className='contacts__item-wrap'>
                        <div className="contacts__name">Email:</div>
                        <div className="contacts__subtitle">sma.largo@gmail.com</div>
                        </div>
                    <div className='contacts__item-wrap'>
                        <div className="contacts__name">Время работы:</div>
                        <div className="contacts__subtitle">8:00-20:00</div>
                    </div>
                </div>
                <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5963180ef80755d15df017b09abd63862f815187874503d9d15c0476e6ba7304&amp;source=constructor" width="900" height="450" frameBorder="0"></iframe>
            </div>
        </section>
    )
}

export default ContactPage
