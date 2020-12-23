import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";

export default function TheHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerImgBox}>
                <Image
                    style={styles.imgFill}
                    source={require('../assets/img/header.png')}
                >
                </Image>
            </View>
            <View style={styles.bannerImgBox}>
                <Image
                    style={styles.imgFill}
                    source={require('../assets/img/banner.png')}
                >
                </Image>
            </View>
            <View style={styles.pencilsImgBox}>
                <Image
                    style={styles.imgFill}
                    source={require('../assets/img/pencils.png')}
                >
                </Image>
            </View>
            <Text>Hey</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    bannerImgBox: {
        position: 'absolute',
        top: '36%', left: '8%',
        width: '36%',
        height: '10%',
        backgroundColor: 'green',
    },
    headerImgBox: {
        position: 'absolute',
        top: '46%', left: '5%',
        width: '90%',
        height: '10%',
        backgroundColor: 'green',
    },
    pencilsImgBox: {
        position: 'absolute',
        width: '10%',
        height: '10%',
        backgroundColor: 'green',
    },
    imgFill: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        overflow: 'visible',
    },
});