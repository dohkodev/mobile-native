import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [respose, setResponse] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 33,
        term,
        location: 'san jose'
      }
    });
    setResponse(response.data.businesses);
  }

  return <View>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>Pantalla de busqueda</Text>
      <Text>Hemos encontrado {respose.length} resultados!</Text>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
