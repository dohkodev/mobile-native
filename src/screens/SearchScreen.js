import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {

  const [term, setTerm] = useState('');

  return <View>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('asdf')}
      />
      <Text>Pantalla de busqueda</Text>
      <Text>{term}</Text>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
