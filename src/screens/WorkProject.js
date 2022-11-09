import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import toReducer from '../redux/reducer/toReducer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DeleteData, EditData } from '../redux/action/toAction';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import { Value } from 'react-native-reanimated';


export class WorkProject extends Component {
    LastNavigate = () => {
        const { route } = this.props;
        const { val } = route.params;
        this.props.navigation.navigate('AddNewTask', { val })
    }

    deleteItemById = id => {
        const { route } = this.props;
        const { fetchedData, DeleteList } = this.props
        const { val } = route.params
        const filteredData = fetchedData.data[val].filter(item => item.Id !== id);
        DeleteList(filteredData, val)
    }

    navigationForEdit = (item) => {
        const { route, fetchedData } = this.props;
        const { val } = route.params
        this.props.navigation.navigate('AddNewTask', { val, item, edit: true })
    }

    setCheckBox = (value, id) => {
        console.log('--<', id)
        const { fetchedData, route } = this.props
        const { val } = route.params

        const finalOutput = fetchedData.data[val].map(eachItem => {
            console.log(eachItem.Id)
            console.log(value)
            if (eachItem.Id == id) {
                return {
                    ...eachItem,
                    IsDone: value
                }
            }
            else {
                return eachItem
            }
        })
        this.props.EditList(finalOutput, val)
        console.log('----->>>>', finalOutput)
    }

    render() {
        const { route } = this.props;
        const { fetchedData } = this.props
        const { val } = route.params
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={fetchedData.data[val]}
                    renderItem={({ item }) => {
                        if (item.IsDone == false) {
                            return (
                                <View style={styles.MyList}>
                                    <Text style={styles.HeadingText}>Heading: {item.Heading}</Text>
                                    <Text style={styles.titleText}>Title: {item.Title}</Text>
                                    <CheckBox
                                        style={styles.myCheckbox}
                                        value={item.IsDone}
                                        onValueChange={(checkvalue) => this.setCheckBox(checkvalue, item.Id)}
                                    />
                                    <View style={styles.AddEdit}>
                                        <TouchableOpacity
                                            style={styles.Add}
                                            onPress={() => this.navigationForEdit(item)}>
                                            <Text style={styles.btnText}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.Add}
                                            onPress={() => {
                                                this.deleteItemById(item.Id)
                                            }}
                                        ><Text style={styles.btnText}>Delete</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        else {
                            return (
                                <View style={styles.MyList}>
                                    <Text style={styles.HeadingText}>Heading: {item.Heading}</Text>
                                    <Text style={styles.titleText}>Title: {item.Title}</Text>
                                    <CheckBox
                                        style={styles.myCheckbox}
                                        value={item.IsDone}
                                        onValueChange={(checkvalue) => this.setCheckBox(checkvalue, item.Id)}
                                    />
                                    <View style={styles.AddEdit}>
                                        <TouchableOpacity
                                            style={styles.Add}
                                            onPress={() => this.navigationForEdit(item)}>
                                            <Text style={styles.btnText}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.Add}
                                            onPress={() => {
                                                this.deleteItemById(item.Id)
                                            }}
                                        ><Text style={styles.btnText}>Delete</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )

                        }
                    }
                    }
                />
                <TouchableOpacity onPress={this.LastNavigate} style={styles.addButton}>
                    <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addButton: {
        height: 50,
        width: 250,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    addText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    HeadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 10
    },
    titleText: {
        top: 10,
        fontWeight: 'bold',
    },
    AddEdit: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 13
    },
    Add: {
        backgroundColor: 'gray',
        height: 30,
        width: 100,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    },
    MyList: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        top: 10
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },
    myCheckbox: {
        marginLeft: 350,
        top: -10
    }
})

const mapStateToProps = state => {
    return {
        fetchedData: state.toReducer
    }
}

const mapDispatchToProps = {
    DeleteList: DeleteData,
    EditList: EditData
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkProject);