import React, { useState } from 'react'
import classes from './Cart.module.scss';
import Product from './Product/Product';
import image1 from '../../assets/images/photo1.png';
import image2 from '../../assets/images/photo2.png';

const Cart = () => {
    let [product1, setProduct1] = useState({ price: 150, oldPrice: 200.99, quantity: 1 });
    let [product2, setProduct2] = useState({ price: 180, oldPrice: 250.50, quantity: 1 });
    let total = (product1.price * product1.quantity) + (product2.price * product2.quantity);
    let discount = total > 0 ? 50 : 0;
    return (
        <div className={classes.Cart}>
            <Product img={image1} product={product1} setProduct={setProduct1} />
            <Product img={image2} product={product2} setProduct={setProduct2} />
            <ul>
                <li><span>Shipping</span><span>R {discount.toFixed(2)}</span></li>
                <li>
                    <span>Total</span>
                    <span>R {(total + discount).toFixed(2)}</span>
                </li>
            </ul>
        </div>
    )
}

export default Cart
