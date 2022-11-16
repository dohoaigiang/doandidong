import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {id: 1, name: 'sản phẩm skincare'},
        {id: 2, name: 'sản phẩm chăm sóc tóc'},
        {id: 3, name: 'nước hoa'},
        {id: 4, name: 'sản phẩm làm trắng da'},
        {id: 5, name: 'kem chống nắng'},
        {id: 5, name: 'mặt nạ'},
    ]
    };
  }
  render(){
    const {categories} = this.state;
  return (
    <FlatList
      data = {categories}
      renderItem = {({item})=><CategoryListItem category={item}/>} 
      keyExtractor={item=>'${item.id}'}
      contentContainerStyle={{paddingLeft:16, paddingRight:16}}
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
