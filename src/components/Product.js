import React from 'react'
import 'css/Product.css'
import {Star, StarBorder} from '@material-ui/icons';
function Product({description , image, price, rating}) {
    return (
        <div className="product_root">

            <div className="product_info">
                <p className="product_description">
                    {description}
                </p>
                <p className="product_price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map(()=>(
                        <Star />
                    ))}
                    {Array(5-rating).fill().map(()=>(
                        <StarBorder />
                    ))}
                </div>
            </div>
                            
            <img 
                    alt={description + 'image'}
                    className="product_image"
                    src={image}
            />
                
            <button className='product_button'>
                add to basket
            </button>

        </div>
    )
}

export default Product
