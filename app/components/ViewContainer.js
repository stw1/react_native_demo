import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'


export default class ViewContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
			
				<Text>Banana2</Text>
			</View>		

			// <View style={{flexDirection: 'row', height: 100, padding: 20}}>
   //      <View style={{backgroundColor: 'blue', flex: 0.3}} />
   //      <View style={{backgroundColor: 'red', flex: 0.5}} />
   //      <Text>Hello World!</Text>
   //    </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1e90ff'
  }
});

