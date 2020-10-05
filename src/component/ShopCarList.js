import React, {Component} from 'react'
import { Table, Modal } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCart, deleteCart } from '../action/ShopCar';


const styles = {
    table:{
        maxWidth:"1400px",
        width:"90%",
        margin:"0 auto",
    },
    antTablePlaceholder: {
        marginTop: '10px',
    },
    changenumblock:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    nobuyicon:{
        fontSize:"25px",
        cursor:"pointer",
        color: '#bdbdbd',
    },
    changenumicon:{
        fontSize:"20px",
        cursor:"pointer",
        color: '#f79db4',
    },
    numtext:{
        display:"flex",
        justifyContent:"flex-end",
    },
    img:{
        maxWidth:"200px",
        width: "100%",
    },
    titletext:{
        fontSize:"12px",
        color:"#424242",
    },
    nametext:{
        fontSize:"15px",
        color:"#424242",
    },
}

const columns = [{
    title: '商品名稱',
    dataIndex: 'name',
    sorter: (a, b) => a.productName > b.productName,
}, {
    title: '商品圖片',
    dataIndex: 'image',
    align:'center',
    width:"210px"
}, {
    title: '單價',
    dataIndex: 'price',
    align:'center',
    width:"70px"
},{
    title: '數量',
    dataIndex: 'prdquantity',
    align:'center',
    width:"75px",
},{
    title: '小計',
    dataIndex: 'prdsubtotal',
    align:'center',
    width:"85px"
},{
    title: '刪除',
    dataIndex: 'prdnobuy',
    align:'center',
    width:"65px"
}

];

class ShopCarList extends Component{
    state = { 
        visible: false,
        currentProduct: {} 
    };

    updateShopCart(product,mode){
        const { updateCart } = this.props;
        if(mode === 'min' && product.quantity === 1) {
            this.showModal(product);
            this.setState({
                currentProduct: product,
              });
        } else {
            const data = {
                idCart: product.idCart,
                name: product.name,
                accountName: product.accountName,
                discount: product.discount,
                quantity: mode ==='add' ? (product.quantity+1): (product.quantity-1),
                size: product.size,   
                image: product.image,
             };
            updateCart(data);
        }
      }

    deleteShopCart(product){
        const { deleteCart } = this.props;
        deleteCart(product);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        const { currentProduct } = this.state;
        const { deleteCart } = this.props;
        this.setState({
          visible: false,
        });
        deleteCart(currentProduct);
    };

    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    render(){ 
        let dataSourceTable =[];
        let TotalMoney =0;
        this.props.cartDate && this.props.cartDate.map((shop, index) => {
            let dataSourceTableObj = {};
            const subTotal = parseInt(shop.discount) * parseInt(shop.quantity);
            dataSourceTableObj.key = index;
            dataSourceTableObj.name = <div>
                <div style={styles.nametext}>{shop.name}</div>
            </div>;
            dataSourceTableObj.image = <img style={styles.img} src={shop.image} alt="圖片載入失敗"/>;
            dataSourceTableObj.price = <div>{shop.discount}</div>;
            dataSourceTableObj.prdquantity = <div style={styles.changenumblock}>
                <i 
                    style={styles.changenumicon}
                    className="far fa-minus-square"
                    onClick={()=>this.updateShopCart(shop,'min')}
                />
                <div style={{margin:"0 5px"}}>{shop.quantity}</div>
                <i 
                    style={styles.changenumicon}
                    className="far fa-plus-square"
                    onClick={()=>this.updateShopCart(shop,'add')}
                />
            </div>;
            dataSourceTableObj.prdsubtotal = <div>{subTotal}</div>;
            dataSourceTableObj.prdnobuy = <i 
                style={styles.nobuyicon}
                className="fas fa-trash-alt"
                onClick={() => this.deleteShopCart(shop)}
            />;
            TotalMoney += subTotal;
            dataSourceTable.push(dataSourceTableObj);
        });   
      return (
        <>
        <Modal
          title="貼心提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>確定要刪除此產品？</p>
        </Modal>
        <Table
            columns={columns}
            dataSource={dataSourceTable}
            bordered
            scroll={{x:800}}
            footer={() => <div style={styles.numtext}>{`總計：${TotalMoney}`}</div>}
            style={styles.table}
        />
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        cartDate: state.ShopCar.cartDate,
      }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    updateCart,
    deleteCart,
  }, dispatch);

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShopCarList);
