import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// components
import GoalItem from './components/GoalItem';

export default function App() {
	const [goalText, setGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (goal) => {
		setGoalText(goal);
	};

	const addGoalHandler = () => {
		setCourseGoals((prevGoals) => [
			...prevGoals, 
			{
				id: Math.random().toString(), 
				text: goalText
			}
		]);
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
				<FlatList 
					alwaysBounceVertical={false}

					// list of goals (array of objects)
					data={courseGoals}

					// maps the foals
					renderItem={(itemData) => {
						return (
							<GoalItem item={itemData.item} />
						)
					}}

					// defining the key value
					keyExtractor={(itemKey, index) => {
						return itemKey.id
					}}
				/>
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
