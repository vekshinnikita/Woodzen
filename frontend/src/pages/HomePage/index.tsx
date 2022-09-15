import { FC } from 'react'
import Products from './sections/Products'
import Special from './sections/Special';
import News from './sections/News';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {

    const navigate = useNavigate()

    return (
        
    <section id="Home" className="content fade">
        <div className="blockPromo">
            <div className="blockPromo__backImg"></div>
            <div className="blockPromo__btn" onClick={() => navigate('/catalog')}> 
                <span>Каталог</span> 
            </div>
        </div>

        <Products />
        
        <Special />
        
        <News />
        
    
        <a href="#up" className="arrowUp">
            <img src="icons/emblem/arrowUp.svg" alt="arrowUp"/>
        </a>    
    </section>
    )
}


export default HomePage