import { useType } from '@/adapters/products'
import { Basket } from '@/state/atoms/Basket'
import { IMaterial } from '@/types'
import React, { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useRecoilState, useSetRecoilState } from 'recoil';

interface PropsPopup {
    open: number,
    item: IMaterial,
    setOpen: (open: number) => void,
}


const Popup: FC<PropsPopup> = ({open, item, setOpen}) => {

    const [ value, setValue ] = useState<number | string>(1)

    const setBasket = useSetRecoilState(Basket) 

    const handleHange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == ''){
            setValue('')
        } else if (!e.target.value.includes('-') ) {
            setValue(Number(e.target.value))
        }
        
    }

    const handleAddToBasket = () => {
        setBasket((basket) => {
            console.log([
                ...basket, 
                {
                    quantity: Number(value),
                    total_product: Number(value) * item.price,
                    type: item,
                }
            ])
            return [
                ...basket, 
                {
                    quantity: Number(value),
                    total_product: Number(value) * item.price,
                    type: item,
                }
            ]
        })
        setValue(1)
        setOpen(0)

    }

    return (
        <CSSTransition
                in={open === item.id}
                unmountOnExit
                timeout={200}
                classNames='popup-anim'
            >
        <div className="logs__number">
            <div data-counter className="logs__input">
                <span 
                    onClick={() => {
                        if (value > 1) {
                            setValue(Number(value) - 1)
                        }
                    }}
                    className="logs__minus minus">
                    <img src="/icons/emblem/inputMinus.svg" alt="minus"/>
                    </span>
                <input value={value}  onChange={handleHange} type='number'/>
                <span 
                    onClick={() => setValue(Number(value) + 1)}
                    className="logs__plus plus">
                    <img src="/icons/emblem/inputPlus.svg" alt="plus"/>
                </span>
            </div>
            <div className='logs__blockBtn-mobile'>
                <span>В корзину</span>
                <div 
                    className='logs__btnBasket-mobile' 
                    onClick={handleAddToBasket}>
                    <img src="/icons/emblem/basket.svg"/>
                </div>
            </div>
            <button 
                data-cart 
                type="button" 
                onClick={handleAddToBasket}
                className="logs__btnBasket">
                    В корзину
                </button>
        </div>
        </CSSTransition>
    )
}



const ProductPage: FC = () => {

    const { id } = useParams()
    const { isLoading, type } = useType(id)
    const [ open, setOpen ] = useState<number>(0)

    return (
        <section className="logs">
            {(open !== 0) && (
                <div className='catalog__overlay' onClick={() => setOpen(0)}></div>
            )}
            <div className='logs__radius-grey'></div>
            <div className='logs__radius-yellow'></div>
            <ul className="bread-crumbs">
                <div className='bread-crumbs__radius'></div>
                <Link to='/catalog'>Каталог</Link>
                <span>/</span>
                <Link to='' className='bread-crumbs__disabled'>{type?.product_title}</Link>
                <span>/</span>
                <Link to='' className='bread-crumbs__disabled'>{type?.title}</Link>
            </ul>
            <div className="logs__wrapper">

                {type?.materials?.map(_item => (
                <div className="logs__blocks" data-id="subfields02">
                    <div className="logs__img"><img src={_item.url_image} alt="slice"/></div>
                    <div className="logs__footer">
                        <div className="logs__discription">
                            <div className="logs__subtitle">{_item.title}</div>
                            <div className="logs__price">{_item.price} руб</div>
                        </div>
                        <button 
                            className={open === _item.id ? "logs__btn btnActive" : "logs__btn"}
                            onClick={() => setOpen(_item.id)}
                            >
                            <img src="/icons/emblem/plus.svg" alt="plus"/>
                        </button>
                    </div>
                    <Popup open={open} item={_item} setOpen={setOpen}/>
                </div>
                ))}

            </div>
    </section>
    )
}

export default ProductPage
