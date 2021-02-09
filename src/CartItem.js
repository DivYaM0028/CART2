import  React  from "react";

class CartItem extends React.Component{
    constructor (){
        super();
        this.state ={
            title : 'Phone',
            price : 999,
            qty : 2,
            img : ''
        }
    }

    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{this.state.title}</div>
                    <div style={{color: 'gray'}}>Rs {this.state.price}</div>
                    <div style={{color: 'gray'}}>Qty: {this.state.qty}</div>
                    <div className="cart-item-actions">
                        {/*  Button  */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612903022~hmac=8b1c3de089f225b770cfe8c9c0a38154" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612902963~hmac=bf50674783cde6b835eeb4b7d8b5b634" />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1612903073~hmac=8ae1de8585b3f061050d2ce124271d26" />
                    </div>
                </div>
            </div>
        );
    }
}
    

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export  default CartItem;