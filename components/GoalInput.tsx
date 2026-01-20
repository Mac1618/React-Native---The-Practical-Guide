import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

interface GoalInputType {
	// goalInputHandler: (goal: string) => void,
	visible: boolean,
	addGoal: (goalText: string) => void;
}

const GoalInput = ({
	// goalInputHandler,
	addGoal,
	visible
}: GoalInputType) => {
	const [goalText, setGoalText] = useState('');

	const goalInputHandler = (goal) => {
		setGoalText(goal);
	};

	const addGoalHandler = () => {
		if (!goalText) return;
		addGoal(goalText);
		setGoalText('');
	};

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textContainer}
					onChangeText={goalInputHandler}
					placeholder="Your course goal"
					value={goalText}
				/>
				<Button onPress={addGoalHandler} title="Add Goal" />
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
