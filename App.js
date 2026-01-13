import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// components
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (goalText) => {
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
			<GoalInput addGoal={addGoalHandler}/>

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
	goalsContainer: {
		flex: 6,
	},
});
