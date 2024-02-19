import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ThemeProvider, Button, Text, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../database/firebaseDb';



class AddUserScreen extends Component {
    constructor() {
        super();

        this.dbRef = firebase.firestore().collection('react-native-crud');
        this.state = {
            name: "",
            email: "",
            mobile: "",
            isLoading: false
        }

    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser() {
        if (this.state.name == '') {
            alert('Fill at least your name!');
        } else {
            this.setState({
                isLoading: true
            })
            this.dbRef.add({
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile
            }).then((res) => {
                this.setState({
                    name: '',
                    email: '',
                    mobile: '',
                    isLoading: false
                })
                this.props.navigation.navigate('UserScreen');
            })
            .catch((err) => {
                console.log('Error found: ', err);
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return(
            <ThemeProvider theme={theme}>
                <ScrollView style={styles.container}>
                    <Image 
                        source={{ uri: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'}}
                        style={{ width: 200, height: 200 }}
                        containerStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='user-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Name'}
                        value={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                    <Input 
                        leftIcon={
                            <Icon 
                                name='mobile'
                                size={30}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Mobile'}
                        value={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                    <Button 
                        icon={
                            <Icon 
                                name='check'
                                size={15}
                                color='white'
                            />
                        }
                        title='  Add User'
                        buttonStyle={{
                            backgroundColor: "green"
                        }}
                        onPress={() => this.storeUser()}
                    />
                    <Button 
                        icon={
                            <Icon 
                                name='users'
                                size={15}
                                color='white'
                            />
                        }
                        title='  Go to User List'
                        onPress={() => this.props.navigation.navigate('UserScreen')}
                        containerStyle={{
                            marginTop: 10
                        }}
                    />
                </ScrollView>
            </ThemeProvider>
        )
    }
}

const theme = {
    Button: {
        raised: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddUserScreen;