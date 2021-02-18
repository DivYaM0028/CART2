import  React  from "react";

class Navbar extends React.Component{
   

render(){
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}> 
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1613580071~hmac=29b1117e5de29b425c7287be60c30c88" alt="cart-icon"/>
            </div>
        </div>
    );
}
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };    


export  default Navbar;