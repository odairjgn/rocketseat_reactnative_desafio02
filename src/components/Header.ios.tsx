import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HeaderProps {
  onDarkMode: (darkMode: boolean) => void;
  darkModeState: boolean;
}

export function Header({ onDarkMode, darkModeState }: HeaderProps) {
  const [styles, setStyles] = useState(stylesLigth);
  const [darkMode, setDarkMode] = useState(darkModeState);

  function handleDarkMode() {
    onDarkMode(!darkMode);
    setDarkMode(!darkMode);
    setStyles(darkMode ? stylesDark : stylesLigth);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const stylesLigth = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
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
  }
});

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
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
  }
});
