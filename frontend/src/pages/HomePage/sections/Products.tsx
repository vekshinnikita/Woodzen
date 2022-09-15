import React, { FC } from 'react'

import { useLimitProducts } from '@/adapters/products'
import { Link, useNavigate } from 'react-router-dom';

 
const Products: FC = () => {

    const { isLoading, products } = useLimitProducts()
    const navigate = useNavigate()

    return (
        <section className="products">
            <div className="products__title">Продукция
                <div className="products__radius"></div>
                <img src="icons/emblem/Vector 1.svg" alt="vector"/>
            </div>
            <div className="container">
                <div className="products__wrapper">
                    { products?.map(_item => (
                        <div 
                            className="products__block" 
                            onClick={() => navigate('/catalog')}
                            key={_item.id}>
                            <div className="products__presentation"><img src={_item.url_image} alt="presentation"></img></div>
                            <Link to="/catalog">{_item.title}</Link>
                        </div>
                    ))}

                <div className="products__link products__mobile_link" onClick={() => navigate('/catalog')}>
                    <span>Каталог</span>
                </div>
                </div>
            </div>
                <div className="products__link products__desktop_link" onClick={() => navigate('/catalog')}>
                    <span>Каталог</span>
                </div>
        </section>
    )
}


export default Products