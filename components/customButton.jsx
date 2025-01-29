import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  contentContainerStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`${contentContainerStyle} min-h-[62px] w-[85%]
    bg-secondary rounded-xl justify-center items-center ${isLoading ? 'opacity-50' : '' }`}
      disable={isLoading}
      activeOpacity={0.8}
      handlePress={handlePress}
    >
      <Text className="text-primary font-psemibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
