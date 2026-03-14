import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { UserContext } from "../context/UserContext";

export default function LoginScreen() {

  const router = useRouter();
  const { setPhone } = useContext(UserContext);

  const [phone, setPhoneInput] = useState("");
  const [error, setError] = useState("");

  const formatPhone = (text: string) => {

    let cleaned = text.replace(/\D/g, "");

    let formatted = cleaned
      .replace(/(\d{3})(\d)/, "$1 $2")
      .replace(/(\d{3})(\d)/, "$1 $2")
      .replace(/(\d{2})(\d{1,2})$/, "$1 $2");

    setPhoneInput(formatted);
    validatePhone(cleaned);
  };

  const validatePhone = (text: string) => {
    if (text.length < 10) {
      setError("Số điện thoại không đúng định dạng");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {

    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 10) {
      Alert.alert("Lỗi", "Số điện thoại không đúng định dạng");
      return;
    }

    setPhone(cleaned);

    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={formatPhone}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Tiếp tục" onPress={handleContinue} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 60
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16
  },

  error: {
    color: "red",
    marginTop: 5
  }

});