import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";

export default function SpinButton(props) {
    return (
        <View style={styles.container}>
            {props.spinning == true ?
            <Image
                style={styles.buttonImg}
                source={require('../assets/img/button_down.png')}
            >
            </Image> :
            <Image
                style={styles.buttonImg}
                source={require('../assets/img/button_up.png')}
            >
            </Image>}
            <Text style={styles.buttonText}>{formatButtonText(props.category)}</Text>
        </View>
    )
}

function formatButtonText(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1) + '?';
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    buttonImg: {
        width: '100%',
        height: '100%',
        overflow: 'visible',
    },
    buttonText: {
        color: '#800000', //'#ffa1af',
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 10,
    }
});