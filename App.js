import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    // setGoals(currentGoals => [...currentGoals, enteredGoal]);
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
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
          <GoalItem goalTitle={itemData.item.value} />
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
