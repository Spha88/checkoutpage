import React from 'react';
import classes from './Product.module.scss';

const Product = ({ img, product, setProduct }) => {
    const add = () => setProduct({ ...product, quantity: product.quantity + 1 });
    const remove = () => {
        if (product.quantity > 0) {
            setProduct({ ...product, quantity: product.quantity - 1 })
        }
    };

    return (
        <div className={classes.Product}>
            <div className={classes.ProductImage}>
                <img src={img} alt="" />
            </div>
            <div className={classes.ProductDetails}>
                <main>
                    <h4>Vintage Backbag</h4>
                    <div className={classes.Prices}>
                        <span className={classes.DiscountPrice}>R {product.price.toFixed(2)}</span>
                        <span className={classes.OriginalPrice}>R {product.oldPrice.toFixed(2)}</span>
                    </div>
                </main>
                <div className={classes.Counter}>
                    <span className={classes.Minus} onClick={remove}><i className="material-icons">remove</i></span>
                    <span className={classes.Quantity}>{product.quantity}</span>
                    <span className={classes.Plus} onClick={add}><i className="material-icons">add</i></span>
                </div>
            </div>
        </div>
    )
}

export default Product
