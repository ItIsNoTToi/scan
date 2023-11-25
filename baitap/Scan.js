import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Scan = () =>
{
    return(
        <View>
            <TouchableHighlight style={{marginTop: 40,}}>
                <Icon name="home"/>
            </TouchableHighlight>

        </View>
    );
}
export default Scan;