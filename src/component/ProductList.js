import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Product from './Product.js';
import radium from 'radium';

const styles = {
    wrapper:{
        width: '100%',
        padding: 0,
        margin: 0,
    },
    title: {
      width: '100%',
      display: 'flex',
    },
    titleText: {
        width: '30%',
        textAlign: 'center',
        fontSize: 28,
        lineHeight: '86px',
        '@media (max-width: 860px)': {
          width: '40%',
        },
        '@media (max-width: 640px)': {
          width: '50%',
        },
        '@media (max-width: 450px)': {
          width: '60%',
        },
        '@media (max-width: 414px)': {
          width: '60%',
          fontSize: 24,
        },
        '@media (max-width: 321px)': {
          width: '56%',
          fontSize: 20,
      },
    },
    line: {
        width: '35%',
        padding: '35px 0',
        '@media (max-width: 860px)': {
          width: '30%',
        },
        '@media (max-width: 640px)': {
          width: '25%',
        },
        '@media (max-width: 450px)': {
          width: '20%',
        },
        '@media (max-width: 321px)': {
          width: '22%',
      },
    },
    proItem:{
      display: 'flex',
      width: '100%',
      height: 'auto',
      flexDirection: 'row',
      padding: 0,
      margin: 0,
      flexFlow: 'wrap',
  },
}


class ProductList extends Component{
    render(){
      const {
        productListDate,
      }=this.props;
      return (
        <div style={styles.wrapper}>
          <div style={styles.title}>
              <div style={styles.line}><hr></hr></div><p style={styles.titleText}>YOU MUST HAVE!</p><div style={styles.line}><hr></hr></div>
          </div> 
          <div style={styles.proItem}>
          {productListDate && productListDate.map(product=>
            <Product 
              key={product.name}
              product = {product}
              // addCart={addCart(product)}
            />
          )}
          </div>
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({
  productListDate: state.Product.productDate,
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(radium(ProductList));