import React from 'react'
import 'css/Product.css'
import { useStateValue } from 'Redux/StateProvider';
import { makeStyles } from '@material-ui/core/styles';

/* import {useSnackbar } from 'notistack';
 */import {Rating} from '@material-ui/lab';


 const useStyles = makeStyles((theme) => ({
    rating: {
        marginBottom: theme.spacing(5),
    },
  }));


const Product = React.forwardRef(({id, description , image, price, rating, qty}, ref) => {

    const [{}, dispatch] = useStateValue()
    const classes = useStyles()

   /*  const { enqueueSnackbar} = useSnackbar(); */


    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id ,
                description : description ,
                image : image ,
                price : price ,
                rating : rating ,
                qty : qty
            }
        })
      /*   enqueueSnackbar(
            <div className="snackbar" ref={ref}>
                <img 
                    alt={description}
                    src={image}
                />
                <div className="snackbar_info">
                    <h1>{price} $</h1>
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={rating}
                        precision={0.5}
                        readOnly
                    />
                </div>
            </div>,
            {           
                variant: 'warning' ,
                autoHideDuration: 3000,
                transitionDuration : 800,
                anchorOrigin : {
                    vertical : 'bottom',
                    horizontal: 'right',
                    preventDuplicate: true,
                }
            }
        ); */
    }   


    return (
        <div className="product_root" ref={ref} >
            <div className="product_info">
                <p className="product_description">
                    {description}
                </p>
                <p className="product_price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="product_rating">
                  {/*   {Array(rating).fill().map(()=>(
                        <Star />
                    ))}
                    {Array(5-rating).fill().map(()=>(
                        <StarBorder/>
                    ))} */}
                    <Rating
                        className={classes.rating}
                        name="simple-controlled"
                        size="large"
                        value={rating}
                        precision={0.5}
                        readOnly
                    />
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
})

export default Product

