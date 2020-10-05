import React,{ Component } from "react";
import radium from 'radium';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getCart } from '../action/ShopCar';

const styles = {
    Header:{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "2% 3% 10px 1%",
        '@media (max-width: 768px)': {
            padding: "4% 3% 1%",
          },
    },
    logo:{
        display: "flex",
        width: '170px',
        height: '68px',
        backgroundImage: "url('https://www.obdesign.com.tw/images/logo.png')",
        backgroundSize: 'cover',
        marginRight: '20px',
        '@media (max-width: 768px)': {
            width: '130px',
            height: '50px',
            marginRight: '10px',
          },
        '@media (max-width: 414px)': {
            width: '100px',
            height: '38px',
            marginRight: '5px',
        },
    },
    shopcar:{
        position: "relative",
        display: "flex",
        fontSize: "18px",
        //paddingBottom: 4,
    },
    shopcarIcon:{
        display: "flex",
        width: '34px',
        height: '28px',
        color: "#757575",
        backgroundImage: "url('https://www.obdesign.com.tw/images/cart-icon.png')",
        marginRight: '5px',
        lineHeight: '29px',
    },
    ShowCart_TotalCount: {
        display: "flex",
        fontSize: "18px",
        marginBottom: 0,
    },
}

class Header extends Component{ 
    render(){ 
    const {cartDate}=this.props;
    const totalCount = cartDate.reduce(( acc, cur ) => acc + cur.quantity,0);
      return (
        <div style={styles.Header}>
            <Link to='/' key='0'>
                <span style={styles.logo}></span>
            </Link>
            <div style={styles.shopcar}>
                <Link to='/SHOPCAR' key='1' style={styles.shopcarIcon}></Link>
                <p style={styles.ShowCart_TotalCount}>({totalCount ? totalCount : 0})</p>
                
            </div> 
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        // totalCount: state.ShopCar.totalCount,
        cartDate: state.ShopCar.cartDate,
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    // getCart,
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(radium(Header));