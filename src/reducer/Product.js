//產品資料初始值
const initialState = {
    productDate: [{
        image: 'https://image.obdesign.com.tw/catalog/products/AB12653/AB12653@1_50.jpg',
        name: '率性純色異材質拼接長版上衣',
        price: '349',
        distcount: '329',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/FA1969/FA1969@1_50.jpg',
        name: '多色V領長袖細針織罩衫/小外套',
        price: '399',
        distcount: '379',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/BA2962/BA2962@1_50.jpg',
        name: '高含棉腰鬆緊抽繩修身縮口哈倫褲',
        price: '419',
        distcount: '399',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/EA2252/EA2252@1_50.jpg',
        name: '柔和色調開襟垂墜感七分袖罩衫外套',
        price: '349',
        distcount: '299',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/BA4768/BA4768@1_50.jpg',
        name: '3D立體塑型視覺顯瘦經典牛仔窄管褲',
        price: '549',
        distcount: '499',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/BA4887/BA4887@1_50.jpg',
        name: '水洗彈力牛仔腰鬆緊破損窄管褲',
        price: '449',
        distcount: '429',
      },{
        image: 'https://image.obdesign.com.tw/catalog/products/AB12780/AB12780@1_50.jpg',
        name: '高含棉純色炫彩美式英字印花T恤上衣',
        price: '299',
        distcount: '279',
      }],
};

export default (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


  