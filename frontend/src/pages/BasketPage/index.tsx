import { Basket } from '@/state/atoms/Basket';
import React, { FC, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { BasketLength, BasketPrice } from '@/state/selectors/Basket';
import { splitPrice } from '@/service';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useOrder } from '@/adapters/orders';

interface Props{
    setOpen: (open: boolean) => void
}

interface IFormInput {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    index: string;
    checkbox?: boolean;
  }


const BasketComponent: FC<Props> = ({setOpen}) => {

    const basket = useRecoilValue(Basket)
    const basketPrice = useRecoilValue(BasketPrice)

    return (
        <div className="wrapper">
            <div className="basket__title-mobile">Товары</div>
        <div className="name">
            <div className="name__title">
                <div className="name__product">Товары</div>
                <div className="name__sale">Скидка</div>
                <div className="name__quantity">Количество</div>
                <div className="name__price">Цена</div>
                <div className="name__sum">Сумма</div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="total">

            {basket.map(_item => (
            <div key={_item.type.id}>
                <div className="total__subtitle">
                        
                    <div className="total__product">{_item.type.product_title}</div>

                    <div className='total__field'>
                        <div className="total__field-title">Скидка:</div>
                        <div className="total__sale total__value">0<span>%</span></div>
                    </div>

                    <div className='total__field'>
                        <div className="total__field-title">Количество:</div>
                        <div className="total__quantity total__value">{_item.quantity} шт.</div>
                    </div>

                    <div className='total__field'>
                        <div className="total__field-title">Цена:</div>
                        <div className="total__price total__value">{splitPrice(_item.type.price)} руб</div>
                    </div>

                    <div className='total__field total__summ'>
                        <div className="total__field-title ">Сумма:</div>
                        <div className="total__sum total__value">{splitPrice(_item.total_product)} руб</div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            ))}
            
        </div>
            
            <div className="result">
                <div className='result__total-price'>
                    <div className="result__name">Итог: </div>
                    <div className="result__total">{splitPrice(basketPrice)}<span> рублей</span></div>
                </div>
                <button className="result__btn" onClick={() => setOpen(true)}>Оформить</button>
            </div>
    </div>
    )
}


const EmptyBasket:FC  = () => {

    const navigate = useNavigate()

    return (
        <>
        <div className="basket" style={{flex: 1}}>
            <div className="basket__title">
                Пока что в Вышей корзине нет выбранных товаров, перейдите в каталог для выбора вашей будущей покупки
            </div>
            <button className="basket__price" onClick={() => navigate('/catalog')}>К товарам</button>
        </div>
        </>
    )
}


const Form: FC<Props>  = ({setOpen}) => {

    const { isLoading, mutateAsync} = useOrder()
    const [basket, setBasket] = useRecoilState(Basket)
    const basketValue = useRecoilValue(BasketPrice)

    const {
        register,
        control,
        reset,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        delete data['checkbox']
        await mutateAsync(
            {
                ...data,
                order: basket,
                total: basketValue
            }
        )
        reset()
        setBasket([])
        setOpen(false)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__wrapper">
                    <div className="form__title">Оформление заявки</div>

                    <input placeholder="Имя" {...register("first_name",{
                        required: 'Поле не должно быть пустым'
                    })}/>
                    { errors?.first_name && <p>{errors?.first_name?.message || 'Error' }</p>}

                    <input placeholder="Фамилия" {...register("last_name",{
                        required: 'Поле не должно быть пустым'
                    })}/>
                    { errors?.last_name && <p>{errors?.last_name?.message || 'Error' }</p>}

                    <input placeholder="Email" type="email" {...register("email",{

                    })}/>
                    { errors?.email && <p>{errors?.email?.message || 'Error' }</p>}

                    <InputMask  mask="+7(999)-999-9999" placeholder='Телефон' {...register("phone",{
                        required: 'Поле не должно быть пустым',
                        validate: value => value.includes('_') === false || 'Введите правильно номер телефона',
                        })} />

                    { errors?.phone && <p>{errors?.phone?.message || 'Error' }</p>}

                <div className="form__subtitle">Доставка: </div>

                    <input placeholder="Город" type="text" {...register("city",{
                        required: 'Поле не должно быть пустым'
                    })}/>
                    { errors?.city && <p>{errors?.city?.message || 'Error' }</p>}

                    <input placeholder="Адрес" type="text" {...register("address",{
                        required: 'Поле не должно быть пустым'
                    })}/>
                    { errors?.address && <p>{errors?.address?.message || 'Error' }</p>}

                    <input placeholder="Индекс" type="number" {...register("index",{
                        required: 'Поле не должно быть пустым'
                    })}/>
                    { errors?.index && <p>{errors?.index?.message || 'Error' }</p>}

                <div className="form__checkbox">
                    <input type='checkbox' {...register('checkbox', {
                        validate: value => value === true || 'Дайте согласие на обработку персональных данных',
                    })} />
                    
                    <span>Согласие на обработку персональных данных</span>
                </div>
                { errors?.checkbox && <p>{errors?.checkbox?.message || 'Error' }</p>}
                <button className="form__btn" type='submit'>Отправить</button>
            </div>
        </form>
    )
}


const BasketPage:FC  = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const basketLength = useRecoilValue(BasketLength)

    return basketLength > 0 ? (
        open ? (<Form setOpen={setOpen}/>) : (<BasketComponent setOpen={setOpen}/>)
    ) : (
        <EmptyBasket/>
    )
}

export default BasketPage
