import { Redirect, router } from "expo-router";
import React from "react";
import { Button } from "react-native";

const HomePage = () => {
  return (
    <>
      <Button
        onPress={() => router.push(Math.random().toString())}
        title="Push random id"
      />
    </>
  );
};

export default HomePage;
