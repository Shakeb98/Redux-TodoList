import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { AddData, EditData } from '../redux/action/toAction';
import { connect } from 'react-redux'

export class AddDataScreen extends Component {
    state = {
        heading: '',
        Title: ''
    }

    AddValue = () => {
        const { route,data } = this.props;
        const { val, item, edit } = route.params;
        if (edit) {
            // const oldData = data;
            // console.log('map=====',oldData)
            console.log('map========', val)
            const finalData = data[val].map(eachItem => {
                if (eachItem.Id === item.Id) {
                    return {
                        ...eachItem,
                        Heading: this.state.heading,
                        Title: this.state.Title
                    }
                }
                else {
                    return eachItem
                }
            })
            this.props.EditList(finalData, val)
        }
        else {
            const { route, AddList, fetchedData } = this.props;
            const { val } = route.params;
            const oldData = JSON.parse(JSON.stringify(data));
            oldData[val].push({ Heading: this.state.heading, Title: this.state.Title, Id: +new Date() })
            AddList(oldData)
        }
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder='Enter Heading'
                        onChangeText={(heading) => this.setState({ heading: heading })}
                        style={styles.InputText}
                    />
                    <TextInput
                        placeholder='Enter Data'
                        style={styles.InputText}
                        onChangeText={(Title) => this.setState({ Title: Title })}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={this.AddValue}>
                    <Text style={styles.btnText}>Add Task</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapDispatchToProps = {
    AddList: AddData,
    EditList: EditData,
};
const mapStateToProps = state => {
    return {
        data: state.toReducer.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDataScreen);

const styles = StyleSheet.create({
    InputText: {
        height: 50,
        width: 350,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 40,
        padding: 10
    },
    btn: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
        marginLeft: 20,
        backgroundColor: 'orange',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 20
    },
    btnText: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})