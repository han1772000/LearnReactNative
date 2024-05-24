import React, { useState, useRef } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';

const Welcome = (props) => {
    const scrollViewRef = useRef(null);
    const [imgActive, setimgActive] = useState(0)
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setimgActive(slide)
            }
        }
    }

    const handleDotPress = (index) => {
        setimgActive(index);
        scrollViewRef.current.scrollTo({
            x: index * WIDTH,
            animated: true
        });
    };

    return <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 100 }}>
            <ScrollView
                ref={scrollViewRef}
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
            >
                {images.map((image, index) => (
                    <Image key={index} resizeMode='contain' style={styles.wrap} source={image} />
                ))}
            </ScrollView>
            <Text
                style={{ color: 'black', fontWeight: '500', fontSize: 18.2, width: '95%', height: 170, textAlign: 'center', alignSelf: 'center', paddingTop: 70, paddingBottom: 30 }}>
                Easily manage all subscriber information, track packages, buy and look up data usage...
            </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                {images.map((e, index) =>
                    <TouchableWithoutFeedback key={index} onPress={() => handleDotPress(index)}>
                        <View style={imgActive == index ? styles.activeDot : styles.dot} />
                    </TouchableWithoutFeedback>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => alert('I love You so much')}>
                <Text style={styles.buttonText}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

const images = [
    require('../assets/Welcome_Intro1.png'),
    require('../assets/Welcome_Intro2.png'),
    require('../assets/Welcome_Intro3.png'),
    require('../assets/Welcome_Intro4.png'),
]


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.4,
    },
    dot: {
        width: 11,
        height: 11,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#324A5933',
        backgroundColor: '#324A5933',
        marginRight: 8,
    },
    activeDot: {
        width: 30,
        height: 11,
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 8,
        backgroundColor: '#324A59',
        borderColor: '#324A59',
    },
    button: {
        backgroundColor: '#D5B35E', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 25, 
        width: 236,
        marginTop: 40,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16, 
        textAlign: 'center', 
    },
})
export default Welcome

