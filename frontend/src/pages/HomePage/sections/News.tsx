import { useNews } from '@/adapters/news'
import React, { FC } from 'react'

const News: FC = () => {

    const { isLoading, news } = useNews()

    return (
        <section className="news">
            <div className="news__blocks">
                <div className="news__title">Новости
                    <div className="news__radius"></div>
                    <img className="news__vector" src="icons/emblem/Vector 3.svg" alt="vector" />
                </div>
            </div>
            <div className="news__row">
                {news?.map(_item => (
                    <div className="news__item" key={_item.id}>
                        <span><img src={_item.url_image} alt="news"/></span>
                        <div>
                            <div className="news__heading">{_item.title}</div>
                            <div className="news__description">{_item.prescription}</div>
                        </div>
                    </div>  
                ))}
                
                <div className="news__goOver news__goOver-mobile">
                    <a href="#">Перейти</a>
                </div>
            </div>
            <div className="news__goOver news__goOver-desktop">
                <a href="#">Перейти</a>
            </div>
        </section>
    )
}


export default News