import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.goal}>
        <Text>{props.goalTitle}</Text>
      </View>
    </TouchableOpacity>
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