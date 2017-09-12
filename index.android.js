/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ScrollView,
  View,
  Dimensions,
  AsyncStorage,
  Button
} from 'react-native';

var ToDo = React.createClass ({
  
  addToDo: function(oEvent){
    var oDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._toDoList.push(oEvent.nativeEvent.text);
    this.setState({dataSource: oDataSource.cloneWithRows(this._toDoList)});
    AsyncStorage.setItem("toDoItems", JSON.stringify(this._toDoList));

  },
  
  markToDoCompleted: function(oEvent){
    
  },
  
  loadFromLocalStorage: function(oResult){
    
    var oDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    if(oResult){
      try{
        oResult = JSON.parse(oResult);
        this._toDoList = oResult;
        this.setState({dataSource: oDataSource.cloneWithRows(this._toDoList)});
      }
      catch(exp){
        console.log(exp);
      }
    }
  },
  
  getInitialState(){
     var oDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     
     AsyncStorage.getItem("toDoItems").then( (value) => { this.loadFromLocalStorage(value)});
     
     this._toDoList = ['Buy Coffee', 'Water the Plants'];
     return {
      dataSource: oDataSource.cloneWithRows(this._toDoList),
    };
  },
  
  renderItem(rowData){
    return (
      <Text style={styles.todoItem}>{rowData}</Text>
    );
  },
  
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          To-Do:
        </Text>
        <ScrollView  style={styles.scrollView}>
          <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    style={styles.todoList}
           >
          
          </ListView>
        </ScrollView>
        <TextInput style={{
            width:405,
            fontSize:25,
          }} placeholder="Enter Here" onSubmitEditing={this.addToDo} />
        <Button 
          onPress={this.addTodo}
          title="Click"
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scrollView:{
    backgroundColor: '#EFEFEF',
    height: 200
  },
  todoList: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    width: Dimensions.get('window').width
  },
  todoItem:{
    backgroundColor: "#FFFFFF",
    textAlign: "left",
    borderColor: "#000000",
    fontSize: 24,
    margin: 2,
    paddingLeft:10
  }
});

AppRegistry.registerComponent('ReactNativeL', () => ToDo);
