import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../utils/colors";

function HomeScreen () {

    const now = moment(new Date());

    return (
        <LinearGradient 
            colors={[colors.LIGHT_GRAY, colors.DARKER_GRAY]} 
            testID={"home-screen"} 
            style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
                <Text style={styles.date}>{now.format('dddd')}</Text>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingHorizontal:40,
        alignContent:"space-between",
        justifyContent:"space-evenly"
    },
    title:{
        justifyContent:'flex-end'
    },
    date:{
        color:colors.WHITE,
        fontSize:13
    }
})
export default HomeScreen;