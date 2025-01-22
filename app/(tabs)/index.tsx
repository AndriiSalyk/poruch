import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import RoundButton from '@/components/RoundButton';
import TopBar from "@/components/TopBar";
import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
      <View style={styles.container}>
          <TopBar text={"Home"} buttons={true} backButton={false}></TopBar>
          <Text style={styles.title}>Home page</Text>
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
