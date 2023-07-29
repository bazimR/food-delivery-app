import { Image, Text, View, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10">
      {/* primary row */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-10 h-10 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-sm">Deliver Now!</Text>

          <View className="flex-row space-x-1">
            <Text className="font-bold text-xl text-end">Current location</Text>
            <View className="justify-center align-middle">
              <ChevronDownIcon size={24} color={"#00ccbb"} />
            </View>
          </View>
        </View>
        <View className="align-middle">
          <UserIcon size={35} color={"#00ccbb"} />
        </View>
      </View>
      <View>
        <MagnifyingGlassIcon size={30} color={"red"}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
