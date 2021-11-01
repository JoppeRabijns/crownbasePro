import React, { useState,useEffect } from 'react';
import { Text, View,Image, TouchableOpacity,  Button } from 'react-native';
import { productStyles } from './Product.styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { entries } from 'lodash';


export const Product = (product) => {
  const [images, setImages] = useState([]);
  const [activeSlide, setactiveSlide] = useState(0);


  useEffect(() => {
    setImages([])
    if (typeof product.route.params.product.portalData.media[0] === 'undefined'){
      setImages(images => [...images, "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"]);
    } else {
      for(let i = 0; i < product.route.params.product.portalData.media.length; i++){
        if(product.route.params.product.portalData.media[i]["media::type"] !== "CAT"){
          setImages(images => [...images, product.route.params.product.portalData.media[i]["media::pad"]])
        }
      }
    }
   },[])

    return (
      <View style={productStyles.container}>  
      <Text style={[productStyles.text]} >{product.route.params.product.fieldData.merk}</Text>
      <Text style={[productStyles.text,productStyles.title]}>{product.route.params.product.fieldData.artikelnummer}</Text>
      <Carousel
          layout={"default"}
          data={images}
          sliderWidth={300}
          itemWidth={300}
          itemHeight={100}
          renderItem={renderItem} 
          onSnapToItem={(index) => setactiveSlide(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
        }}
        inactiveDotStyle={{
          }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <Text style={[productStyles.text_left]}>{product.route.params.product.fieldData.omschrijving_nl}</Text>
      <Text style={[productStyles.title]}>€{product.route.params.product.fieldData.verkoopprijs_all_in}</Text>      
      </View> 
    );
}

const renderItem = ({item,index}) => {
  return (
    <Image style={{width:"90%", height:"60%", justifyContent:"center"}} source={{uri: item}} resizeMode="contain" />
  )
}

