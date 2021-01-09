import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const[{basket},dispatch] = useStateValue();
    return (
        
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
                

                <div className="header__search" >
                    <input  className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <span className="header__optionFirst">Hello Guest</span>
                        <span className='header__optionSecond'>Signin</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionFirst'>Returns</span>
                        <span className='header__optionSecond'>& Orders</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionFirst'>Your</span>
                        <span className='header__optionSecond'>Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className='header_optionBasket'>
                            <ShoppingCartIcon />
                            <span className="header__optionSecond header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                    
                </div>
            </div>

        
    )
}

export default Header
