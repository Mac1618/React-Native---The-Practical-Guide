import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [goalText, setGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (goal) => {
		setGoalText(goal);
	};

	const addGoalHandler = () => {
		setCourseGoals((prevGoals) => [...prevGoals, goalText]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textContainer}
					onChangeText={goalInputHandler}
					placeholder="Your course goal"
				/>
				<Button onPress={addGoalHandler} title="Add Goal" />
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView>
					{courseGoals.length === 0 ? (
						<Text>Goals are empty...</Text>
					) : (
						courseGoals.map((goal, index) => (
							<Text style={styles.goalItem} key={index}>
								{goal}
							</Text>
						))
					)}
				</ScrollView>
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
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: 'white',
	},
});
