import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const handleTest = () => {
		Alert.alert('testing the button');
	};

	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<StatusBar style="auto" />

			<View>
				<Text>For testing</Text>
				<Button onPress={handleTest} title="test confirmed" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
