import React , { forwardRef }  from 'react'
import 'css/Basket.css'
import { useStateValue } from 'Redux/StateProvider'
import { Rating } from '@material-ui/lab'



const Basket = forwardRef(({id, description , image, price, rating , qty}, ref) => {
    const [{},dispatch] = useStateValue()
 
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }

    return (
        <div className="basket" ref={ref} >
            <img 
                alt={description}
                src={image}
            />
            <div className="basket_info">
                <small>{description}</small>
                <strong>quantity : {qty}</strong>
                <strong>{price} $</strong>
                <div className="product_rating">
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={rating}
                        precision={0.5}
                        readOnly
                    />
                </div>
                <button onClick={removeFromBasket}  >
                    remove from the basket
                </button>
            </div>
        </div>
    )
})

export default Basket
 
