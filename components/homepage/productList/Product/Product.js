import React, { useState, useEffect } from 'react';
import { Text, View,Image, TouchableOpacity } from 'react-native';
import { productStyles } from './Product.styles';
import { useNavigation } from '@react-navigation/native';


export const Product = ({product}) => {
const navigation = useNavigation();
const [productImage, setproductImage] = useState();

useEffect(() => {
    if (typeof product.portalData.media[0] === 'undefined'){
      setproductImage("https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640");
    } else {
      setproductImage(product.portalData.media[0]["media::pad"]); 
    }
},[product.fieldData.artikelnummer])

    return (
      <TouchableOpacity style={productStyles.container} onPress={() =>
        navigation.navigate('Product',{
          product: product 
        })
      }>
      <Image style={{width:100, height:100}} source={{uri: productImage}} />
      <View style={productStyles.textWrapper}>
      <Text style={[productStyles.text, productStyles.title]}>{product.fieldData.artikelnummer}</Text>
          <Text style={productStyles.text}>{product.fieldData.merk}</Text>
          <Text style={productStyles.text}>{product.fieldData.categorie_3}</Text>
          <Text style={productStyles.text}>€{product.fieldData.verkoopprijs_all_in}</Text>               
      </View>
      </TouchableOpacity>
    );
}