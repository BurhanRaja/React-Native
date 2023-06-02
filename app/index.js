import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";

import { COLORS, images, SIZES, icons } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  return (
    <View style={{}}>
      <Text>Home</Text>
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/details">Go to Details</Link>
    </View>
  );
}
