import React,{ Component } from 'react';
import { Button } from 'antd';
import radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buyProduct } from '../action/ShopCar';

const style = {
    wrapper:{
       width: '18%',
       margin: '0 1% 3% 1%',
       display: 'flex',
       flexFlow: 'wrap',
       '@media (max-width: 1100px)': {
        width: '23%',
      },
      '@media (max-width: 860px)': {
        width: '31.3%',
      },
      '@media (max-width: 580px)': {
        width: '48%',
      },
    },
    proItem:{
        display: 'flex',
        width: '100%', 
        height: 'auto',
        padding: 0,
        margin: 0,
        flexDirection: 'column',
    },
    img:{
        width: "100%"
    },
    origtext:{
        textDecoration: "line-through",
        color: "#757575",
        fontSize: "16px",
        textAlign: "right",
        flex: '1 1 30%',
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (max-width: 1023px)': {
            fontSize: "14px",
          },
        '@media (max-width: 414px)': {
            fontSize: "12px",
          },
        '@media (max-width: 375px)': {
          order: "2",
          justifyContent: 'flex-start',
        },
    },
    selltext:{
        color: "rgb(234, 47, 121)",
        fontSize: "18px",
        flex: '1 1 30%',
        display: 'flex',
        justifyContent: 'flex-end',
        margin:'10px 0',
        '@media (max-width: 1023px)': {
            fontSize: "14px",
          },
        '@media (max-width: 414px)': {
            fontSize: "12px",
          },
        '@media (max-width: 375px)': {
          order: "3",
          margin:'0',
          justifyContent: 'flex-start'
        },
    },
    smalltext:{
        fontSize: "60%",
        verticalAlign: "super",
    },
    nametext:{
        fontSize: "16px",
        color: "#333",
        flex: '1 1 70%',
        display: 'flex',
        '@media (max-width: 1023px)': {
            fontSize: "14px",
          },
        '@media (max-width: 414px)': {
            fontSize: "12px",
          },
        '@media (max-width: 375px)': {
           order: "1",
           flex: '1 1 100%',
        },
    },
    button: {
        flex: '1 1 50%',
        display: 'flex',
        margin:'10px 5px 15px',
        '@media (max-width: 375px)': {
          order: "4",
          justifyContent: 'center' 
        },

    },
    protext: {
        width: '100%',
        display: 'flex',
        flexFlow: 'wrap',
        padding: '3%',
    }
}

class Product extends Component{
  addShopCart(product){
    const { buyProduct } = this.props;
    const data = {
       name: product.name,
       accountName: 'phoebe',
       discount: product.distcount,
       quantity: 1,
       size: 'M',   
       image: product.image,   
    };
    buyProduct(data);
  }
    render(){
      const {
          product,
      }=this.props;
      return (
        <div style={style.wrapper}>
            <div style={style.proItem}>
                <img alt="載入失敗" src={product.image} style={style.img}/>
                <div style={style.protext}>
                    <div style={style.nametext}>
                    {product.name}
                    </div>
                    <div style={style.origtext}>
                        <span style={style.smalltext}>NT$</span>
                        {product.price}
                    </div>
                    <div  style={style.button}>
                    <Button onClick={()=>this.addShopCart(product)}>加入購物車</Button>
                    </div>
                    <div style={style.selltext}>
                        <span style={style.smalltext}>NT$</span>
                        {product.distcount}
                    </div>
                </div>
            </div>
        </div>
      
      );
    }
}

const mapStateToProps = (state) => {
  return {
    cartDate: state.ShopCar.cartDate,
    }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
  buyProduct,
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(radium(Product));
