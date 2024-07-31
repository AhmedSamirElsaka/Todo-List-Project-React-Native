import { View, Text, TextInput, StyleSheet } from "react-native";

import React from "react";

function Input({
  label,
  onUpdateValue,
  value,
}: // isInvalid,
{
  label: string;
  onUpdateValue: any;
  value: string;
  // isInvalid: boolean;
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label]}>{label}</Text>
      <TextInput
        style={[styles.input]}
        // autoCapitalize={false}
        // autoCapitalize="none"
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    margin: 8,
  },
  label: {
    color: "black",
    marginBottom: 4,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "white",
    borderRadius: 4,
    fontSize: 16,
  },
});
