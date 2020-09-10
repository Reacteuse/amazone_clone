import React from 'react'
import 'css/Product.css'
import {Star, StarBorder} from '@material-ui/icons';
import { useStateValue } from 'Redux/StateProvider';


function Product({id, description , image, price, rating}) {

    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
        /* dispatch the item into the data layer */
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id ,
                description : description ,
                image : image ,
                price : price ,
                rating : rating
            }
        })
    }   
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
                        <StarBorder/>
                    ))}
                </div>
            </div>
                            
            <img 
                    alt={description + 'image'}
                    className="product_image"
                    src={image}
            />  
            <button 
                className='product_button'
                onClick={addToBasket} 
             >
                add to basket
            </button>

        </div>
    )
}

export default Product
