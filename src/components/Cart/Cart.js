import React from 'react';

const Cart = (props) => {
    let total=0;
    for(var i=0; i<props.cart.length;i++){
            total = total + props.cart[i].price;
    }
    return (
      
        <div>
            <p><strong> Order Summary</strong></p>
            <p>Items Ordered : {props.cart.length} pcs</p>
            <p>Shipping Cost : 40 tk.</p>
            <p>Vat/Tax : 50 tk.</p>
            <p>Total Cost : $ {total}</p>
         
        </div>
    );
};

export default Cart;