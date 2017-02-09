import React, { Component } from 'react'
import {
	View,
	StyleSheet
} from 'react-native'

export default class StatusBarBackground extends Component {
	render() {
		return (
			<View style={styles.statusBarBackground}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: 20
	}
})