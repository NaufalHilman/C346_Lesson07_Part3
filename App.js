import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, { backgroundColor: "mediumaquamarine" }]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, { backgroundColor: "crimson" }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "whitesmoke",
        marginTop: 30,

        justifyContent: "center",
        alignItems: "center",

        flexDirection: "row",
    },
    child: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
