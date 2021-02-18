import React from 'react';
import Cart from './Cart' ;
import Navbar from './Navbar';

class App extends React.Component{
    constructor (){
      super();
      this.state ={
          products : [
          {
              title : 'Phone',
              price : 9999,
              qty : 1,
              img : '',
              id : 1
          },
          {
              title : 'Watch',
              price : 999,
              qty : 1,
              img : '',
              id : 2
          },
          {
              title : 'Laptop',
              price : 99999,
              qty : 1,
              img : '',
              id : 3
          }
      ]
      }
  }

  handleIncreaseQuantity = (product) => {
      //  console.log(product)
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products
      })
  }
  handleDecreaseQuantity = (product) => {
      //  console.log(product)
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty !== 0)
      products[index].qty-=1;
      this.setState({
          products
      })
  }
  handleIncreaseQuantity = (product) => {
      //  console.log(product)
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products
      })
  }

  handleDeleteProduct = (id) =>{
        const{ products } = this.state;

        const items = products.filter((item) => item.id !== id ); 
        this.setState({
            products:items
        })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((products) =>{
      count+=products.qty;
    })
    return count;
  }  

  getCartTotal = ()=> {
    const {products} = this.state;
    
    let cartTotal = 0;
    products.map((products)=> {
      cartTotal+=(products.qty*products.price)
    })
    return cartTotal;
  }

  render (){
    const { products } = this.state;
    return (  
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
            products  = { products }
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10 , fontSize:20} }>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
    }
}

export default App;
