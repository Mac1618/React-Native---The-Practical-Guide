import { useState } from 'react';
import {
	Alert,
	Button,
	FlatList,
	StyleSheet,
	View,
} from 'react-native';

// components
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const modalHandler = () => {
		setModalIsVisible((prevVal) => {
			return !prevVal;
		})
	}

	// add goal
	const addGoalHandler = (goalText) => {
		setCourseGoals((prevGoals) => [
			...prevGoals,
			{
				id: Math.random().toString(),
				text: goalText,
			},
		]);
	};

	// delete goal
	const deleteGoalHandler = (id) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id != id);
		});
	};

	return (
		<View style={styles.appContainer}>
			<Button title='ADD NEW GOAL' color="5e0acc" onPress={modalHandler} />
			<GoalInput addGoal={addGoalHandler} visible={modalIsVisible} />

			<View style={styles.goalsContainer}>
				<FlatList
					alwaysBounceVertical={false}
					// list of goals (array of objects)
					data={courseGoals}
					// maps the foals
					renderItem={(itemData) => {
						return <GoalItem deleteGoal={deleteGoalHandler} item={itemData.item} />;
					}}
					// defining the key value
					keyExtractor={(itemKey, index) => {
						return itemKey.id;
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
