import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

interface PropsMainPage {
	navigation?: NavigationProp<NavigationType>
}

const MainPage = ({ navigation }: PropsMainPage) => {


	return (
		<View>
			<Text>
				MainPage
				<Button
					title={'click me'}
					onPress={() => navigation?.navigate('Profile')}
				/>
			</Text>
		</View>
	)
}

export default MainPage

