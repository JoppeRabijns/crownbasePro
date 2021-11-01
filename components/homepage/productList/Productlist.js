import React, { useEffect, useState } from 'react';
import { Text, View,Image, TouchableOpacity, ScrollView, ActivityIndicator,FlatList, TextInput } from 'react-native';
import { productlistStyles } from './Productlist.styles';
import { Product } from './Product/Product';
import producten from '../../../assets/crownbasepro_producten.json';
import filter from 'lodash.filter'

export const Productlist = () => {

  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = text => {
    const formattedQuery = text;
    const filteredData = filter(fullData, product => {
      return contains(product, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };
  
  const contains = ({ fieldData }, query) => {
    const { categorie_3, merk,  artikelnummer } = fieldData;

    if (categorie_3.includes(query) || merk.includes(query) || artikelnummer.includes(query)) {
      return true;
    }
  
    return false;
  };

  useEffect(() => {
    setIsLoading(true);
    setData(producten.response.data);
    setFullData(producten.response.data);
    setIsLoading(false);
  }, []);


return (
    <View style={productlistStyles.scrollView}>
    <FlatList
      ListHeaderComponent={
        <View
        style={{
          backgroundColor: '#f5f5f5',
        }}
        >
        <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Zoeken"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
      </View>
      }
      data={data}
      stickyHeaderIndices={[0]}
      keyExtractor={item => item.fieldData.artikelnummer}
      renderItem={({ item }) => (
        <Product product={item} key={item.fieldData.artikelnummer}/>
      )}
    />
    </View>
    );
}