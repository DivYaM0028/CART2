import  React  from "react";

class CartItem extends React.Component{
    // constructor (){
    //     super();
    //     this.state ={
    //         title : 'Phone',
    //         price : 999,
    //         qty : 1,
    //         img : ''
    //     }
    // }

    increaseQuantity = () =>{
        // setstate form 1
        // this.setState({
        //     qty : this.state.qty+1
        // });
        // setState form 2
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        });
    }

    decreaseQuantity = () =>{
        // setstate form 1
        // this.setState({
        //     qty : this.state.qty+1
        // });
        // setState form 2
        if (this.state.qty !== 0) {
            this.setState((prevState)=>{
                return {
                    qty: prevState.qty-1
                }
            });            
        }
    }


    render(){
        const { title , price ,qty } = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: 'gray'}}>Rs {price}</div>
                    <div style={{color: 'gray'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*  Button  */}
                        <img 
                         alt="increase"
                         className="action-icons"
                         src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1613075450~hmac=f79d069f1e4117f36bef97b0f095d9ee" 
                         onClick={this.increaseQuantity}    
                        />
                        <img 
                         alt="decrease" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613075500~hmac=f163c832e653456357c0dd319dce1d61" 
                         onClick={this.decreaseQuantity}
                         />
                        <img 
                         alt="delete" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1613075525~hmac=cac67db8afe9bf21771d35d9fbe77a65" 
                         />
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