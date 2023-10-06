import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert, Keyboard } from 'react-native'
import React, { useState } from 'react';
import * as Style from '../../assets/style';
import { styles } from '../screens/WelcomeScreen'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry, } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AddNote from './AddNote';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Logo } from '../../assets';
import { useSelector } from 'react-redux';




export default function Notes({ navigation, ...props }) {

    const [searchNote, setSearchNote] = useState();
    const user = useSelector((state) => state.user.user);

    function deleteNote(index) {
        let newArray = [...props.notes];
        let movedNote = newArray.splice(index, 1);
        props.setNotes(newArray);
        props.setMoveToBin(movedNote);

        let bin = [movedNote, ...props.moveToBin];
        props.setMoveToBin(bin)


        AsyncStorage.setItem('storedNotes', JSON.stringify(newArray)).then(() => {
            props.setNotes(newArray)
        }).catch(error => console.log(error))

        AsyncStorage.setItem('deletedNotes', JSON.stringify(bin)).then(() => {
            props.setMoveToBin(bin)
        }).catch(error => console.log(error))

    }

    function search() {
        if (searchNote === '') {
            Alert.alert('Type something in search box.')
        } else if (searchNote !== '') {
            props.notes.forEach((item, index) => {
                if (item.includes(searchNote)) {
                    let searchItem = [...props.notes];
                    let firstElOfArray = searchItem[0];
                    let index = [...props.notes].indexOf(item);
                    searchItem[0] = item;
                    searchItem[index] = firstElOfArray;
                    props.setNotes(searchItem);

                }
            })
        }

        setSearchNote('');

        Keyboard.dismiss();
    }


    function clearAllNotes() {
        let emptyArray = [...props.notes];
        let deletedCompArray = [...props.moveToBin];
        emptyArray.forEach((item, index) => {
            deletedCompArray.push(item);
        })
        emptyArray = [];
        props.setNotes(emptyArray);
        props.setMoveToBin(deletedCompArray)

        AsyncStorage.setItem('storedNotes', JSON.stringify(emptyArray)).then(() => {
            props.setMoveToBin(emptyArray)
        }).catch(error => console.log(error))

        AsyncStorage.setItem('deletedNotes', JSON.stringify(deletedCompArray)).then(() => {
            props.setMoveToBin(deletedCompArray)
        }).catch(error => console.log(error))

    }

    return (
        <SafeAreaView className="flex-1 m-2" style={[style.notesContainer]}>
            {/* <View style={styles.headingContainer}>
                <Text style={styles.heading}>Your notes ...</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.button, { marginLeft: 40 }]} onPress={() =>navigation.navigate('DeletedNotes')}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <Icon name='trash-2-outline' fill='white' style={{ width: 25, height: 50 }} />
                        </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <Icon name='plus-outline' fill='white' style={{ width: 25, height: 50 }} />
                        </ApplicationProvider>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '700', fontSize: 18, color: Style.color }}>
                    Total: {props.notes.length}
                </Text>
            </View>

            <View style={styles.divider}></View> */}

            <View className="w-full flex-row items-center justify-between px-4 py-2">
                <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
                    <Image source={Logo} className="w-12 h-12" resizeMode="contain" />
                </TouchableOpacity>
                

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Note</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileScreen")}
                    className="w-12 h-12 rounded-full border border-primary flex items-center justify-center"
                >
                    <Image
                        source={{ uri: user?.profilePic }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

            <View style={[style.searchContainer, { marginTop: 20, marginBottom: 20 }]}>
                <TextInput
                    placeholder='Search...'
                    placeholderTextColor={Style.color}
                    style={[style.input, { borderWidth: 3 }]}
                    value={searchNote}
                    onChangeText={(text) => setSearchNote(text)}
                />

                <TouchableOpacity style={[style.searchButton, { width: 50 }]} onPress={() => search()}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='search' fill='white' style={{ width: 22, height: 40 }} />
                    </ApplicationProvider>
                </TouchableOpacity>

                {/* <TouchableOpacity style={[styles.searchButton]} onPress={() => clearAllNotes()}>
                    <Text style={styles.searchButtontext}>Clear</Text>
                </TouchableOpacity> */}

            </View>

            {/* <View style={[styles.emptyContainer]}>
                <Text style={[styles.emptyNoteText]}>No Notes yet!!!</Text>
            </View> */}




            <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>

                {props.notes.length === 0
                    ?
                    <View style={[style.emptyNoteContainer]}>
                        <Text style={[style.emptyNoteText]}>No Notes yet!!!</Text>
                    </View>
                    :
                    props.notes.map((item, index) =>
                        <View style={style.item} key={index}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={style.notes}>
                                    <Text style={style.index}>{index + 1}. </Text>
                                    <Text style={style.text}>{item}</Text>
                                </View>

                                <TouchableOpacity onPress={() => deleteNote(index)}>
                                    <Text style={style.delete}>X</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={style.dateContainer}>
                                <Text>{props.date}</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('EditNote', {
                                    i: index,
                                    n: item
                                })}>
                                    <Text style={style.delete}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </ScrollView>



            <View style={style.container}>
                <TouchableOpacity style={[style.button, { width: 70, height: 70 }]} onPress={() => navigation.navigate('AddNote')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='plus-outline' fill='white' style={{ width: 35, height: 50 }} />
                    </ApplicationProvider>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    )
}

export const style = StyleSheet.create({
    notesContainer: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'flex-end',


        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9
    },
    heading: {
        fontSize: 30,
        fontWeight: '700',
        color: Style.color
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: Style.color,
        marginTop: 5,
        marginBottom: 5
    },
    item: {
        marginBottom: 20,
        padding: 15,
        color: 'black',
        opacity: 0.8,
        marginTop: 10,
        shadowColor: Style.color,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 15,

    },
    index: {
        fontSize: 30,
        fontWeight: '800'
    },
    headingContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: Style.color,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '800'
    },
    scrollView: {
        marginBottom: 70
    },
    notes: {
        flexDirection: 'row',
        width: '75%'
    },
    text: {
        fontWeight: '700',
        fontSize: 17,
        alignSelf: 'center'
    },
    delete: {
        color: Style.color,
        fontWeight: '700',
        fontSize: 15
    },
    input: {
        height: 40,
        paddingHorizontal: 20,
        width: '85%',
        fontSize: 19,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5

    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,

    },
    searchButton: {
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 5,
        height: 40
    },
    searchButtontext: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12
    },
    emptyNoteText: {
        color: Style.color,
        fontWeight: '600',
        fontSize: 15
    },
    emptyNoteContainer: {
        alignItems: 'center',
        marginTop: 240
    },
    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    emptyContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})