import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TabType } from "../../routes/tab";

export default function Home() {
  const navigation = useNavigation<TabType>();

  return (
    <View style={{ marginTop: 60,  alignItems: 'center'}}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/108990874?s=96&v=4" }}
        style={{ height: 150, width: 150, borderRadius: 100 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 18}}>
        Hesdras Francisco de Morais
      </Text>
      <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 18}}>Full Stack Developer</Text>
    </View>
  );
}
