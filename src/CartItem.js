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
                         src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1613309240~hmac=dac304e500c7e9dd0f873e757cf207b4" 
                         onClick={() => this.props.onIncreaseQuantity(this.props.product)}    
                        />
                        <img 
                         alt="decrease" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613309267~hmac=fb65b5617d0730b9872622abc860e09d" 
                         onClick={this.decreaseQuantity}
                         />
                        <img 
                         alt="delete" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1613309358~hmac=1504fc935b38bb17dbe488a779bf9d0f" 
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