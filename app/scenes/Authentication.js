import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground' 

export default class Authentication extends Component {
	constructor(props) {
		super(props)
	
 	this.state = {
			email: '',
			password: ''
		}
	}

	render() {
		return (
			<ViewContainer>
				<StatusBarBackground />
				<View>
					<TextInput 
						style={styles.textInput}
						onChangeText={(text) => this.setState({email: text})}
						value={this.state.email}
						placeholder="EMAIL"
						placeholderTextColor="black"
					/>
					<View style={styles.hairline} />
						
					<TextInput 
						style={styles.textInput} 
						onChangeText={(text) => this.setState({password: text})}
						value={this.state.password}
						placeholder="PASSWORD"
						placeholderTextColor="black"
						secureTextEntry={true}
					/>
					<View style={styles.hairline} />
					
				</View>
			</ViewContainer>
		)	
	}
}

const styles = StyleSheet.create({
	textInput: {
		height: 50,
		textAlignVertical: 'bottom',
		paddingLeft: 20,
		paddingRight: 20,
		fontSize: 12,
		// borderBottomWidth: 1,
		// borderBottomColor: 'black'
	},
	hairline: {
		height: 0,
		backgroundColor: 'black',
		marginLeft: 20,
		marginRight: 20
	}
})