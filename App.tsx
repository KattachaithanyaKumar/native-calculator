import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, BackHandler, SafeAreaView, Platform } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === "light" ? [styles.container, styles.AndroidSafeArea] : [styles.container, {backgroundColor: "#000"}, styles.AndroidSafeArea]}>
        <StatusBar style="auto" />
        <Switch style={styles.switch}
        value={theme === "light"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  switch: {
    position: "absolute",
    right: 20,
    top: 40,
  }
});
