import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, TouchableOpacityProps, GestureResponderEvent } from 'react-native';

interface HeaderProps {
  onDarkMode: (darkMode: boolean) => void;
  darkModeState: boolean;
}

export function Header({ onDarkMode, darkModeState }: HeaderProps) {
  const [styles, setStyles] = useState(stylesLigth);
  const [darkMode, setDarkMode] = useState(darkModeState);

  function handleDarkMode() {
    let newstatus = !darkMode;
    onDarkMode(newstatus);
    setDarkMode(newstatus);
    setStyles(newstatus ? stylesDark : stylesLigth);
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity style={styles.buttonTheme} onPress={handleDarkMode}>
        <Text style={styles.buttonTheme}>Mudar tema</Text>
      </TouchableOpacity>
    </View>
  )
}

const stylesLigth = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor: "#AAA",
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonThemeText: {
    color: "#FFF",
    fontSize: 12
  }
});


const stylesDark = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor: "#AAA",
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonThemeText: {
    color: "#FFF",
    fontSize: 12
  }
});