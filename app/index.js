import {View, Text} from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{}}>
        <Text>Home</Text>
        <Stack.Screen options={{ title: "Overview" }} />
        <Link href="/details">Go to Details</Link>
    </View>
  )
}
