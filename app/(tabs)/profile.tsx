import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function ProfileScreen() {

  const { phone } = useContext(UserContext);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Profile</Text>

      <Text>Số điện thoại:</Text>
      <Text>{phone}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:24,
    fontWeight:"bold"
  }
});