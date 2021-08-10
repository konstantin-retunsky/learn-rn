import { NavigationProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'

interface Props {
	navigation?: NavigationProp<NavigationType>
}

const TaskOne = ({ navigation }: Props) => {
	const [text, setText] = useState('')
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		console.log(counter)
	}, [counter]);

	const logo = {
		uri: 'https://reactnative.dev/img/tiny_logo.png',
		width: 64,
		height: 64
	};

	return (
		<View>
			<Text>helloworld5</Text>
			<TextInput
				style={{ height: 40 }}
				placeholder="Type here to translate!"
				onChangeText={text => setText(text)}
				defaultValue={text}
			/>
			<Text>
				{text}
			</Text>

			<Button
				title={'back to main'}	
				onPress={() => navigation?.goBack()}
			/>

			<Button
				onPress={() => setCounter(counter + 10)}
				title={'eeboi'}
			/>
			<ScrollView>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item =>
						<Image
							key={`${item}${Date.now.toString()}`}
							source={logo}
							style={{
								marginBottom: counter / 10,
								borderWidth: 10,
								padding: 10,
								borderColor: `rgba(255, ${counter}, 255, 1.0)`
							}}
						/>)
				}
			</ScrollView>
		</View>
	)
}

export default TaskOne

const styles = StyleSheet.create({})
