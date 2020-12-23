import React from 'react';
import {Image, StyleSheet, View, Dimensions, TouchableWithoutFeedback} from "react-native";
import Spinner from "../components/Spinner";
import SpinButton from "../components/SpinButton";

const promptCategories = ["who", "what", "where"];
const dimensions = Dimensions.get('window');
const imgHeight = dimensions.height;
const imgWidth = imgHeight * 4 / 3;

export default class TheMainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: [false, false, false],
            pressed: [false, false, false],
            spinDuration: 1400,
            buttonDuration: 160,
        };
        this.child = [];
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.startSpin = this.startSpin.bind(this);
    }

    handleButtonPress(i) {
        if (this.state.spinning[i] == false) {
            let pressed = [...this.state.pressed];
            pressed[i] = true;
            this.setState(() => ({pressed: pressed}), () => {
                this.child[i].spin();
                let spinning = [...this.state.spinning];
                spinning[i] = true;
                this.setState(() => ({spinning: spinning, pressed: pressed}), () => this.startSpin(i));
            })
        }


    startSpin(i) {
        setTimeout(() => {
            let pressed = [...this.state.pressed];
            pressed[i] = false;
            this.setState(() => ({pressed: pressed}));
        }, this.state.buttonDuration);

        setTimeout(() => {
            let spinning = [...this.state.spinning];
            spinning[i] = false;
            this.setState(() => ({spinning: spinning}));
        }, this.state.spinDuration);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: imgHeight, width: imgWidth}}>
                    <View style={styles.backgroundImgBox}>
                        <Image
                            style={styles.backgroundImg}
                            source={require('../assets/img/SAS_background_all.png')}
                        >
                        </Image>
                    </View>
                    <View style={[styles.edgePad, styles.headerBox]}>

                    </View>
                    <View style={[styles.horizBox, styles.edgePad]}>
                        {promptCategories.map((category, i) =>
                            <TouchableWithoutFeedback
                                onPress={() => this.handleButtonPress(i)}
                                key={i}
                                style={{backgroundColor: 'green'}}
                            >
                                <View style={styles.touchableButtonBox}>
                                    <SpinButton
                                        category={category}
                                        spinning={this.state.pressed[i]}
                                    >
                                    </SpinButton>
                                </View>

                            </TouchableWithoutFeedback>

                        )}
                    </View>
                    <View style={[styles.horizBox, styles.edgePad]}>
                        {promptCategories.map((category, i) =>
                            <Spinner
                                key={i}
                                prompts={this.props.prompts[category]}
                                ref={(cd) => this.child[i] = cd}
                                duration={this.state.spinDuration}
                            >
                            </Spinner>
                        )}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC703',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    edgePad: {
        width: '100%',
        padding: '4%'
    },
    headerBox: {
        height: '61%',
        marginBottom: '-3%',
        // backgroundColor: 'black',
    },
    horizBox: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: "17%",
        //backgroundColor: 'black',
    },
    touchableButtonBox: {
        width: '13%',
        height: '250%',
        paddingLeft: '0%',
        marginTop: '-4%'
    },
    backgroundImgBox: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        // backgroundColor: 'blue',
    },
    backgroundImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        overflow: 'visible',
    }
});