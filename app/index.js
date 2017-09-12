import React, { Component } from 'react';
import { Alert, TextInput, Button, StyleSheet, View, FlatList, Text } from 'react-native';

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alternativeLayoutButtonContainer}>
            <TextInput id="myText" style={{
                width:300,
                fontSize: 20,
              }} placeholder="Masukan ..." />
          <View style={styles.buttonInput}>
            <Button
              onPress={this.demo}
              title="OK!"
            />
          </View>
        </View>

        <View style={styles.containerOne}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {innerHTML="demo"},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonInput: {
    width:70,
    height:50,
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize:50
  },
  item: {
    paddingTop:10,
    marginLeft: 15,
    fontSize: 18,
    height: 50
  },
  containerOne:{
    backgroundColor: '#4DD0E1',
  }
})

