import React, { useEffect, useState } from 'react'
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import { BasketLength } from '@/state/selectors/Basket';
import { useRecoilValue, useRecoilState } from 'recoil';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AlertAtom, AlertTypes } from '../state/atoms/Alert';




const menu = [
    ['', 'Главная'],
    ['catalog', 'Каталог'],
    ['delivery', 'Доставка'],
    ['contact', 'Контакты'],
    ['basket', 'Корзина'],
    ['price', 'Прайс'],
]

interface PropsMenu{
    open: boolean;
    setOpen: (open: boolean) => void;
    active: string;
    setActive: (active: string) => void;
}

const MobileMenu: FC<PropsMenu> = ({ open, setOpen, active, setActive }) => {

    return (
        <>
        <CSSTransition
                in={open}
                unmountOnExit
                timeout={400}
                classNames='overlay-anim'
            >
            <div className='promo__overlay' onClick={() => setOpen(false)}/>
            
        </CSSTransition>
        <CSSTransition
                in={open}
                unmountOnExit
                timeout={400}
                classNames='menu-anim'
            >
            <div className='promo__mobile__menu'>
                    <span className='promo__mobile__logo'>
                        Woodzen
                    </span>

                    <ul>
                        { menu.map((array) => (
                            <li key={array[0]}>
                                <Link 
                                    to={`/${array[0]}`} 
                                    onClick={() => {setActive(array[0]); setOpen(false)}}
                                    className={active === array[0] ? 'promo__mobile-active' : ''}
                                    >
                                    {array[1]}
                                </Link>
                            </li>
                        ))}
                    </ul>
            </div>
        </CSSTransition>
        </>
    )
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Header: FC = () => {

    let name = window.location.pathname.split('/')[1]
    const [ active , setActive ] = useState<string>(name)
    const [ open, setOpen ] = useState<boolean>(false)

    const basketLength = useRecoilValue(BasketLength)
    const [ alert, setAlert ] = useRecoilState(AlertAtom)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({
            isOpen: false,
            message: '',
            type: AlertTypes.success
        });
      };

    return (
        <header>
            <MobileMenu open={open} setOpen={setOpen} active={active} setActive={setActive}/>
        <nav>
            <div className="promo__wrapper">
                <div className="promo__logo">
                    <Link id="home" to="/"><img src="/icons/emblem/LogoWoodzen.svg" alt="logo"/></Link>
                </div>
                <div className="promo__burger" onClick={() => setOpen(true)}>
                    <img src="/icons/emblem/Burger.svg"/>
                </div>

                <div className='promo__nav'>
                    <ul>
                        { menu.map((array) => (
                            <li key={array[0]}>
                                <Link 
                                    id={array[0]} 
                                    className={active == array[0] ? "promo__link promo__link-active" : "promo__link"} 
                                    to={`/${array[0]}`}
                                    onClick={() => setActive(array[0])}
                                    >
                                    {array[1]}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="promo__search">
                        <img src="/icons/emblem/search.svg" alt="search"/>
                    </div>
                    <Link to='/basket' onClick={() => setActive('basket')}> 
                        <div className="promo__basket">
                            <div className="promo__basket-circle"><span>{basketLength}</span></div>
                            <img src="/icons/emblem/basket.svg" alt="basket"/>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>

        <Snackbar open={alert.isOpen} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
                {alert.message}
            </Alert>
        </Snackbar>

    </header>
    )
}

export default Header;