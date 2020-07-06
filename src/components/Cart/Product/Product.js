import React from 'react';
import classes from './Product.module.scss';

const Product = ({ img }) => {
    return (
        <div className={classes.Product}>
            <div className={classes.ProductImage}>
                <img src={img} alt="" />
            </div>
            <div className={classes.ProductDetails}>
                <main>
                    <h4>Vintage Backbag</h4>
                    <div className={classes.Prices}>
                        <span className={classes.DiscountPrice}>R54.99</span>
                        <span className={classes.OriginalPrice}>R100.99</span>
                    </div>
                </main>
                <div className={classes.Counter}>
                    <span className={classes.Minus}><i className="material-icons">remove</i></span>
                    <span className={classes.Quantity}>1</span>
                    <span className={classes.Plus}><i className="material-icons">add</i></span>
                </div>
            </div>
        </div>
    )
}

export default Product
