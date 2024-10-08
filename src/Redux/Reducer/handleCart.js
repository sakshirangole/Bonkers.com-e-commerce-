const cart = [];

export const handleCart = (state = cart, action) =>{
    const product = action.payload;
    switch (action.type){
        case "ADD_ITEM": 
        //Check if the product is already exist or not.
        const exist = state.find((x)=>x.id === product.id );
        if(exist){
            //Increase the quantatiy if it's exist
            return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1}: x
            );
        }
        else {
            const product = action.payload;
            return [
                ...state, 
                {
                    ...product,
                    qty:1
                }
            ]
        }
        break;
        case "DELETE_ITEM":
            const exist1 = state.find((x)=> x.id === product.id)
            if(exist1.qty === 1){
                return state.filter((x)=>x.id !== exist1.id)
            }
            else{
                return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty -1} :
                    x
                )
            }
        break;
        default :
            return state;
    }
}