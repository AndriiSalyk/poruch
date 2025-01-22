import {StyleSheet} from "react-native";
import { Text, View}  from "@/components/Themed";
import TopBar from "@/components/TopBar";

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <TopBar text={"My profile"} buttons={false} backButton={true}></TopBar>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -9,
        left: -9,
        alignItems: 'center',
        justifyContent: 'center',
    }
})