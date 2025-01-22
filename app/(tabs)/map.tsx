import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import RoundButton from '@/components/RoundButton';
import { Text, View } from '@/components/Themed';
import TopBar from "@/components/TopBar";


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <TopBar text={"Map"} buttons={true} backButton={false}></TopBar>
        <Text>Someday there will be map here...</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
