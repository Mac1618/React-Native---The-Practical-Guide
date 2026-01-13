import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface GoalInputType {
  // goalInputHandler: (goal: string) => void,
  addGoal: (goalText: string) => void
}

const GoalInput = ({
  // goalInputHandler, 
  addGoal
}: GoalInputType) => {
    const [goalText, setGoalText] = useState('');

  const goalInputHandler = (goal) => {
		setGoalText(goal);
	};

  const addGoalHandler = () => {
    if (!goalText) return 
  
    addGoal(goalText);
    setGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textContainer}
        onChangeText={goalInputHandler}
        placeholder="Your course goal"
        value={goalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  )
}

export default GoalInput

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
})