import React from 'react'
import classes from './Cart.module.scss';
import Product from './Product/Product';
import image1 from '../../assets/images/photo1.png';
import image2 from '../../assets/images/photo2.png';

const Cart = () => {
    return (
        <div className={classes.Cart}>
            <Product img={image1} />
            <Product img={image2} />
            <ul>
                <li><span>Shipping</span><span>R 19</span></li>
                <li><span>Total</span><span>R 1500.99</span></li>
            </ul>
        </div>
    )
}

export default Cart
