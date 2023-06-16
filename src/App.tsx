import { registerRootComponent } from "expo";
import { Text, View } from "react-native";

import { styles } from "./App.styles";

const App = () => {
  return (
    <View>
      <Text>Hello, Expo!</Text>
    </View>
  );
};

registerRootComponent(App);
