import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goals"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)} /> 
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  }
});
