import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import SlotMachine from "react-native-slot-machine";

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.getRandInt = this.getRandInt.bind(this);
        this.state = {
            curPromptIdx: this.getRandInt(props.prompts.length),
            curPromptChar: '`',
            spinDuration: this.props.duration,
            numPrompts: props.prompts.length,
            promptRangeSting: "abcdefghijklm`nopqrstuvwxyz"
        };

        this.getRandChar = this.getRandChar.bind(this);
        this.charToOffset = this.charToOffset.bind(this);
        this.spin = this.spin.bind(this);
        this.getSlotContent = this.getSlotContent.bind(this);

    }

    getRandInt(max) {
        return Math.floor(Math.random() * max);
    }

    getRandChar() {
        return String.fromCharCode(this.getRandInt(26) + 97);
    }

    charToOffset(c) {
        let charOffset = c.charCodeAt(0) - 96; // Map to 0->26 range
        return charOffset
    }

    charToPromptIdx(c) {
        let charOffset = this.charToOffset(c);
        let promptIdx = this.state.curPromptIdx + charOffset;
        return promptIdx % this.state.numPrompts;
    }

    spin() {
        this.setState(() => ({spinDuration: 0}), () => {
            this.setState(() => ({
                curPromptChar: '`',
                curPromptIdx: this.charToPromptIdx(this.state.curPromptChar)
            }), () => {
                this.setState(() => ({spinDuration: this.props.duration}), () => {
                    let nextSpinChar = this.getRandChar();
                    this.setState(prevState => ({
                        curPromptChar: nextSpinChar,
                    }));
                });
            });
        });
    }

    getSlotContent(c) {
        return (
            <Text style={{fontSize: 10}}>
                {this.props.prompts[this.charToPromptIdx(c)]}
            </Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SlotMachine
                    padding={1}
                    width='100%'
                    text={this.state.curPromptChar}
                    range={this.state.promptRangeSting}
                    renderTextContent={c => this.getSlotContent(c)}
                    duration={this.state.spinDuration}
                    styles={{
                        text: {color: 'black'},
                        slotInner: {backgroundColor: 'white'},
                        overlay: {backgroundColor: 'transparent'},
                    }}
                >
                </SlotMachine>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '32%',
        height: '200%',
    },
});