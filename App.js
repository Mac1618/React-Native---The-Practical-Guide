import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>React Native - Styling</Text>
			<StatusBar style="auto" />

			<View>
				{/* Inline Style */}
				<Text
					style={{
						borderWidth: 2,
            borderColor: "blue",
						color: 'blue',
						padding: 2,
					}}
				>
					For testing
				</Text>

				{/* StyleSheet Objects */}
				<Text style={styles.test_2}>Testing 2</Text>
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
	test_2: {
		marginTop: 5,
		backgroundColor: 'green',
		color: 'white',
		padding: 2,
	},
});
