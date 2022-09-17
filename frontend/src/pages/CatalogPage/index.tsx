import { useProducts } from '@/adapters/products';
import { IProduct, IType } from '@/types';
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import useIsMobile from '../../hooks/useIsMobile';

interface PropsPopup {
    open: number;
    setOpen: (open: number) => void;
    item: IProduct;
}


const PopupMobile: FC<PropsPopup> = ({open, setOpen, item}) => {

    const isMobile = useIsMobile()
            
    return (
        <>
        <CSSTransition
                in={open === item.id  && isMobile}
                unmountOnExit
                timeout={200}
                classNames='popup-anim'
            >
            <ul className='catalog__popup-mobile' onClick={(e) => setOpen(0)} style={{flex: 1}}>
                {item.types.map(type => (
                    
                    <li key={type.id}>
                        <Link to={`/catalog/${type.id}`}>{type.title}</Link>
                    </li>
                ))}
            </ul>
        </CSSTransition>
        </>
    )
}


const CatalogPage: FC = () => {

    const [ open, setOpen ] = useState<number>(0)
    const { isLoading, products } = useProducts()
    const isMobile = useIsMobile()

    return (
        <section id="Catalog" className="content fade">
            <div className="catalog">
            {(open !== 0 && isMobile) && (
                <div className='catalog__overlay' onClick={() => setOpen(0)}></div>
            )}
                <ul className="bread-crumbs">
                    <Link to='/'>Главная</Link>
                    <span>/</span>
                    <Link to='' className='bread-crumbs__disabled'>Каталог</Link>
                </ul>
                <div className="container">
                    <div className="catalog__wrapper">

                        { products?.map(_item => (
                        <div className="catalog__block" onClick={() => setOpen(_item.id)} key={_item.id}>
                            <div className="catalog__presentation"><img src={_item.url_image} alt="presentation"></img></div>
                            <div className="catalog__subtitle table"><span>{_item.title}</span></div>
                            <div className="catalog__links">
                                {_item.types.map(type => (
                                    <Link className="catalog__link" to={`/catalog/${type.id}`} key={type.id}>{type.title}</Link>
                                ))}
                                
                            </div>
                            <PopupMobile setOpen={setOpen} open={open} item={_item}/>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
</section>
    )
}

export default CatalogPage
