import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, PanResponder, Animated, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import DraggableFlatList, {
    RenderItemParams,
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import { Font } from '../../utils/font';
import LinearGradient from 'react-native-linear-gradient';

const RearrangeGame = (props) => {
    const { arrangeData, ansReArrange } = props
    const NUM_ITEMS = arrangeData.length;

    function getColor(i) {
        const multiplier = 255 / (NUM_ITEMS - 1);
        const colorVal = i * multiplier;
        return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
    }
    const initialData = [...Array(NUM_ITEMS)].map((d, index) => {
        // const backgroundColor = getColor(index);
        return {
            key: `item-${index}`,
            label: arrangeData[index],
        };
    });

    const [data, setData] = useState(initialData);

    const renderItem = ({ item, drag, isActive,  }) => {
        // isActive && Vibration.vibrate()
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    activeOpacity={0.7}
                    // onPressIn={() => Vibration.vibrate()}
                    onLongPress={drag}
                    disabled={isActive}
                >
                    <LinearGradient
                        start={{ x: 0.9, y: 0.4 }}
                        end={{ x: 0, y: 1 }}
                        colors={
                            // isActive ? ['red','red','red','red'] : 
                            ['#590B9B', '#6D21AF', '#B952F4', '#741EB6']}
                        style={[
                            styles.rowItem,
                        ]}
                    >
                        <Text style={styles.text}>{item.label}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    // useEffect(() => {
    //     Vibration.vibrate()
    // },[data])

    const handleDragEnd = (data) => {
        setData(data)
        const filtrData = data.map((item) => item.label)
        const initalAnsString = ansReArrange.join('');
        const userAnsString = filtrData.join('');
        if (userAnsString === initalAnsString) {
            alert('You win')
        }
        // Vibration.vibrate()
    }

    return (
        <DraggableFlatList
            horizontal
            data={data}
            onDragEnd={({ data }) => handleDragEnd(data)}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
            // onDragBegin={() => Vibration.vibrate()}
        />
    )
}

export default RearrangeGame

const styles = StyleSheet.create({
    rowItem: {
        height: 35,
        width: 35,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        borderRadius: 12,
        alignSelf: 'center'
    },
    text: {
        color: "white",
        fontSize: 24,
        fontFamily: Font.font600,
    },
})