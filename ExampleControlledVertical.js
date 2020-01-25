import React from 'react'
import { View, Text } from 'react-native'
import { ColorPicker, toHsv } from 'react-native-color-picker'

import Firebase from "./credentials"

export class ExampleControlledVertical extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = { color: toHsv('green') }
        this.onColorChange = this.onColorChange.bind(this)
    }

    onColorChange(color) {
        this.setState({ color })
    }

    colorSelected(color) {
        alert(`Color selected: ${color}`)
        Firebase.database().ref('/currentColor').set(color.substring(1));
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 45, backgroundColor: '#212021' }}>
                <Text style={{ color: 'white' }}>React Native Color Picker</Text>
                <ColorPicker
                    color={this.state.color}
                    onColorChange={this.onColorChange}
                    onColorSelected={color => this.colorSelected(color)}
                    style={{ flex: 1 }}
                />
            </View>
        )
    }

}

