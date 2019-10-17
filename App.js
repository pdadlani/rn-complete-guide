import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    // setGoals(currentGoals => [...currentGoals, enteredGoal]);
    if (enteredGoal.length === 0 ) {
      return ;
    }
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setModal(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)})
  }

  const cancelGoal = () => {
    setModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModal(true)} />
      <GoalInput modal={modal} onAddGoal={addGoalHandler} onCancel={cancelGoal} />
      {/* <ScrollView style={styles.goalsContainer}>
        {goals.map(goal => (
          <View key={goal} style={styles.goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={goals} renderItem={itemData => (
          <GoalItem goalTitle={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.id)} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 50
    // flexDirection: 'row',
    // width: '100%',
    // height: '100%'
  },
  goalsContainer: {
    flex: 1,
    width: "80%"
  },
});
