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
				{this.props.children}
			</View>		
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#1e90ff'
  }
});

