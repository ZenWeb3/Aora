import { View, Text, ScrollView, Image,Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/formField";
import CustomButton from "@/components/customButton";
import { Link } from "expo-router";
import { signInUser } from "@/lib/appWrite";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

// Work on the sign in logic



  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
      if (!form.email || form.password) {
        Alert.alert("Oops", "Please fill in all the fields");
      }
  
      setisSubmitting(true);
  
      try {
        await signInUser(  form.email,form.password);
  
        router.replace('/home')
      } catch (error) {
        Alert.alert("Oops", error.message);
      } finally {
        setisSubmitting(false);
      }
    };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px] "
            resizeMode="contain"
          />
          <Text className="text-white font-psemibold mt-10 text-2xl text-semibold">
            Sign In
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            title="Sign in"
            containerStyles="mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="flex-row justify-center mt-7">
            <Text className="text-base font-pregular text-gray-200">
              Dont have an account?
            </Text>
            <Link href="/sign-up"  className="text-[#ff9c01]"> Signup</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
