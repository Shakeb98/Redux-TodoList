import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class HomeScreen extends Component {

    navigationHandler = (val) => {
        this.props.navigation.navigate('WorkProject', { val })
    }

    render() {
        return (
            <View style={styles.HomeView}>
                <ImageBackground source={require('/Users/shakeebkhan/Desktop/MyTodoList/istockphoto-863607936-612x612.jpeg')} style={styles.imageTodo}/>
                <View style={styles.HeaderText}>
                    <Text style={styles.helloText}>Hello</Text>
                    <Text style={styles.nameText}>Shakeb Khan</Text>
                    <Text></Text>
                </View>
                <View>
                    <View style={styles.lineOne}>
                        <TouchableOpacity style={styles.categoryOne} onPress={() => this.navigationHandler('New')}>
                            <Text style={styles.newText}>New Notes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryTwo} onPress={() => this.navigationHandler('ongoing')}>
                            <Text style={styles.ongoingText}>Ongoing Notes</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.categoryThree} onPress={() => this.navigationHandler('finished')}>
                            <Text style={styles.finishedText}>Finished Notes</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeaderText: {
        justifyContent: 'center',
        marginTop: 30
    },
    helloText: {
        fontSize: 40,
        marginLeft: 70
    },
    nameText: {
        fontSize: 40,
        marginLeft: 70,
        fontWeight: 'bold',
    },
    categoryOne: {
        height: 150,
        width: 200,
        backgroundColor: 'aqua',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTwo: {
        height: 150,
        width: 200,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    categoryThree: {
        height: 150,
        width: 200,
        backgroundColor: 'orange',
        marginLeft: 8,
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newText: {
        fontSize: 20,
    },
    ongoingText: {
        fontSize: 20
    },
    finishedText: {
        fontSize: 20
    },
    imageTodo:{
        resizeMode:'contain',
        height:840,
        width:500,
        position:'absolute'
    }
})