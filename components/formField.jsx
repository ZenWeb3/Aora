import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View
        className={`h-16 mt-2 px-4 flex-row bg-black-100 border-2 rounded-2xl border-black-200 ${
          focused ? "border-secondary" : "border-black-200"
        } items-center`}
      >
        <TextInput
          className="flex-1 w-full text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title == "Password" && !showPassword}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          selectionColor="#ff9c01"
        />
        {title == "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className={`w-6 h-6`}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
