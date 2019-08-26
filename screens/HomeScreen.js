import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ButtonGroup
} from 'react-native';



export default class HomeScreen extends React.Component{
  imgSrc = require('../assets/images/basic_medium_plant.png');
  numCoin = 200; // TODO: get from endpont
  plantName = 'Plant Name'; // TODO: get from endpoint
  plantHealth = 50; // TODO: get from endpoint

  fertilizeButton(){
    if(this.numCoin >= 25 && this.plantHealth <= 70){
      this.numCoin -= 25;
      this.plantHealth += 30;
      alert('You now have ' + this.numCoin + ' coins');
    }else if(this.numCoin >= 25 && this.plantHealth <=100){
      this.numCoin -= 25;
      this.plantHealth = 100;
      alert('You now have ' + this.numCoin + ' coins');
    }else if(this.numCoin < 25){
      alert('You do not have enough coins');
    }
      this.forceUpdate();
  }
  waterButton(){
    if(this.numCoin >= 5 && this.plantHealth <= 95){
      this.numCoin -= 5;
      this.plantHealth += 5;
      alert('You now have ' + this.numCoin + ' coins');
    }else if(this.numCoin >= 5 && this.plantHealth <=100){
      this.numCoin -= 25;
      this.plantHealth = 100;
      alert('You now have ' + this.numCoin + ' coins');
    }else if(this.numCoin < 5){
      alert('You do not have enough coins');
    }
      this.forceUpdate();
  }
  render(){
      return (
        <View style={styles.container}>
          <View style = {styles.statsContainer}>
            <Text style={styles.plantName}> {this.plantName}</Text>
            <Text style={styles.statsItems}>Coins: {this.numCoin}</Text>
            <Text style={styles.statsItems}>Plant Health: {this.plantHealth}%</Text>
          </View>

          <View style={styles.plantPic}><Image source={this.imgSrc} style={{height: 300,width: 300}} /></View>
          <View style={styles.tabBarInfoContainer}>
            <Button  
              onPress = {this.waterButton()}
              title = "Water"
            />
            <Button
              onPress = {this.fertilizeButton()}
              title = "Add Fertilizer"
            />
            <Button
              onPress = {() => alert("TODO")}
              title = "Shop"
            />
            <Button
              onPress = {() => alert("TODO")}
              title = "Log"
            />
          </View>
      </View>
    );
    }
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcf7d5',
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  tabBarInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  statsContainer:{
    paddingTop: 80
  },
  plantName:{
  paddingBottom: 20,
  textAlign: 'center',
  fontSize: 25
  },
  plantPic:{
    paddingTop: 170,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  statsItems:{ 
    paddingLeft: 20,
    fontSize: 25,
    fontStyle: 'italic',
  }
});
