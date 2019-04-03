import React, { Component } from 'react';
import ProductDetail from './ProductDetail';


class ProductList extends Component {
 constructor(props){
   super(props);
  this.state ={
      products: [
        { "itemId": 4029701,"name":"Toys","largeImage": "https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", "shortDescription": "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink","Quantity": 3,"date": "2017-09-30T18:30:00.000Z" },
        { "itemId": 4029702,"name":"Car","largeImage": "https://i5.walmartimages.com/asr/833f766a-972e-49aa-9f41-fa625b89e802_1.6af5f32987e3547b44288c0b6c66da6f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", "shortDescription": "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink","Quantity": 3,"date": "2017-09-30T18:30:00.000Z" },
        { "itemId": 4029703,"name":"Teddy","largeImage": "https://i5.walmartimages.com/asr/9a50290d-24e6-4bed-9bc2-4de899f2e6ea_1.a4a61c76ba2b63d150730013739a5b8c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", "shortDescription": "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink","Quantity": 3,"date": "2017-09-30T18:30:00.000Z" },
        { "itemId": 4029704,"name":"Bags","largeImage": "https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", "shortDescription": "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink","Quantity": 3,"date": "2017-09-30T18:30:00.000Z" },
        { "itemId": 4029705,"name":"Toys","largeImage": "https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", "shortDescription": "Best Choice Products 6V Kids Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights, MP3 Player, Horn - Pink","Quantity": 3,"date": "2017-09-30T18:30:00.000Z" },
    ]

  }
 }
 render(){
    let listOfProductDisplayed ='';
    if (this.props.search==''){

        listOfProductDisplayed = this.state.products.map((item,index)=>{
         return <ProductDetail key={index} details= {item} add1={this.props.add} remove2={this.props.remove}/>
            })

    }
    else{
       let filterProducts = this.state.products.filter((item,index)=>{
           return item.name.includes(this.props.search)
       });
       listOfProductDisplayed = filterProducts.map((item,index)=>{
           return <ProductDetail key={index} details={item} />
       })
    }
    
   return(
    
        <div>
        {listOfProductDisplayed}
        </div>

   );
 }
}

export default ProductList;
