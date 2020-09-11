import React , { forwardRef }  from 'react'
import { Star, StarBorder } from '@material-ui/icons'
import 'css/Basket.css'
import { useStateValue } from 'Redux/StateProvider'



const Basket = forwardRef(({id, description , image, price, rating}, ref) => {
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
                <strong>{price} $</strong>
                <div className="product_rating">
                    {Array(rating).fill().map(()=>(
                        <Star />
                    ))}
                    {Array(5 - rating).fill().map(()=>(
                        <StarBorder/>
                    ))}
                </div>
                <button onClick={removeFromBasket}  >
                    remove from the basket
                </button>
            </div>
        </div>
    )
})

export default Basket
 