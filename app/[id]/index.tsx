import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const DynamicRoute = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <View>
        <Text>DynamicRoute: {id}</Text>
      </View>
      <Button
        onPress={() => router.push(Math.random().toString())}
        title="Push random id"
      />
      <Button
        onPress={() => router.replace(Math.random().toString())}
        title="Replace random id"
      />
      <Button
        onPress={() => router.back()}
        title="Bo back"
      />
    </>
  );
};

export default DynamicRoute;
