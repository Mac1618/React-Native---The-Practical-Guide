import { Pressable, StyleSheet, Text, View } from 'react-native';

interface GoalTypes {
	item: {
		id: number;
		text: string;
	};
	deleteGoal: () => void;
}

const GoalItem = ({ item, deleteGoal }: GoalTypes) => {
	const { id, text } = item;

	return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: "#210644"}} 
        onPress={deleteGoal.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
    padding: 8,
	},
  pressedItem: {
    opacity: 0.5
  }
});
