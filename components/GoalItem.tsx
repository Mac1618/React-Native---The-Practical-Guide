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
		<Pressable onPress={deleteGoal.bind(this, id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{text}</Text>
			</View>
		</Pressable>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});
