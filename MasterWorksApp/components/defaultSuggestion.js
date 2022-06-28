
import { View, Text, StyleSheet } from 'react-native'

export const defaultSuggestion = ()=>(
    <View style={styles.item}>
      <Text style={styles.title}>No Suggestions Available!</Text>
    </View>
  );

const styles = StyleSheet.create({
  item: {
    flexDirection:"row",
    backgroundColor: '#c4dff5',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
  },
});

export default defaultSuggestion;