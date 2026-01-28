import { Text, StyleSheet, Platform } from 'react-native';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 24,
      // fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      //borderWidth: Platform.OS === 'android' ? 2 : 0, // Platform specific styling
      //borderWidth: Platform.select({ ios: 0, android: 2 }), // Alternative syntax
      // RN will pick the right file based on the platform
      borderWidth: 2,
      borderColor: 'white',
      padding: 12,
      maxWidth: '80%',
      width: 300,
    }
});