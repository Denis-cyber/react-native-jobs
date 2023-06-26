import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { SIZES } from "../../../constants";
import styles from "./tabs.style";

const Tabs = ({ tabs, activeTabe, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  );
};

export default Tabs;
