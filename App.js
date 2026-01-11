import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textContainer} placeholder="Your course goal" />
				<Button title="Add Goal" />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 40,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderColor: '#cccccc',
	},
	textContainer: {
		borderWidth: 2,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 6,
	},
});
