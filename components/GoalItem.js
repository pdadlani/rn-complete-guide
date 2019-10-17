import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goal}>
      <Text>{props.goalTitle}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    margin: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1
  }
});