import { useSubscribe } from '@/adapters/news';
import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    email: string,
  }

const Footer: FC = () => {

    const { isLoading, mutateAsync } = useSubscribe()

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
        mutateAsync(data)
        reset()
    }

    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="#">О компании</a>
                <a href="#">Продукция</a>
                <a href="#">Отзывы</a>
                <a href="#">Новости</a>
                <a href="#">Прайс</a>
                <a href="#">Акции</a>
                <a href="#">Контакты</a>
                <a href="#">Доставка</a>
            </div>
            <form className="footer__subscribe" onSubmit={handleSubmit(onSubmit)}>
                <div className="footer__title">Подписаться на наши новости:
                    <img className="footer__vector" src="/icons/emblem/Vector 2.svg" alt="vector"/>
                </div>
                <div className="footer__subscribe-form">
                    <input placeholder="Введите email" type="email" {...register("email",{
                        required: 'Поле не должно быть пустым',
                        })}/>
                    { errors?.email && <p>{errors?.email?.message || 'Error' }</p>}
                    
                    <button className="footer__send" type='submit'>Отправить</button>
                    <button className="footer__send-mobile">
                        <img src="/icons/emblem/arrowR.svg" />
                    </button>
                </div>
            </form>
        </footer>
    )
}

export default Footer;