import { StatusBar, ScrollView, Image, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/customButton";
const Welcome = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className=" w-full max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-[35px]  text text-white text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[138px] h-[15px] -bottom-2 -right-9 "
              resizeMode="contain"
            />
          </View>

          <Text className="text-gray-100  text-center mt-8 text-sm font-pregular font-bold">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            contentContainerStyle="mt-4"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
