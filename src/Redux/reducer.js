export const initialState = {
    basket :[],
    user: null
}

export const getBasketTotal = (basket) => (
    basket?.reduce((acc, cur) =>  parseFloat(cur.price * cur.qty) + parseFloat(acc) , 0)
)

const reducer = (state , action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            const idx = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            )
            const copyBasket = [...state.basket]
            if(idx === -1 ) {
                action.item.qty = 1
                copyBasket.push(action.item)
            }else{
                copyBasket[idx].qty += 1 
                console.log(copyBasket[idx].qty)
            }
            return{
                ...state,
                basket: [...copyBasket]
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            )
            let newBasket = [...state.basket]
            if(index >= 0 ){
                newBasket.splice(index, 1)
            }else {
                console.warn(`cant remove product (id: ${action.id}) as its not in basket !`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case "REMOVE_QTY":
            const ind = state.basket.findIndex(
                (item) => item.id === action.id
            )
            let nBasket = [...state.basket]
            if(ind >= 0 ){
                nBasket[ind].qty = nBasket[ind].qty-1
                if(nBasket[ind].qty === 0){
                    nBasket.splice(ind, 1)
                }
            }else {
                console.warn(`cant remove product (id: ${action.id}) as its not in basket !`)
            }
            return {
                ...state,
                basket: nBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user : action.user
            }
        default:
            return state
    } 
}

export default reducer


/* return {
    ...state,
    basket : [...state.basket, action.item]
}    */