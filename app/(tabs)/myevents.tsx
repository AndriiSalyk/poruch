import { StyleSheet } from "react-native";
import RoundButton from "@/components/RoundButton";
import {View, Text} from "@/components/Themed";
import TopBar from "@/components/TopBar";

export default function MyEventsScreen() {
    return (
        <View style={styles.container}>
            <TopBar text={"My Events"} buttons={true}></TopBar>
            <Text>All my events</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})