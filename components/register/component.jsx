import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { CustomButton } from '../../UI/Button/Button';
// import Input from '../../UI/Input/component';
import Buttom from '../UI/Button';
import Input from '../UI/Input';

const formValidationSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    username: Yup.string().required('Username is required').min(5, 'Username must have at least 5 chars'),
    password: Yup.string().required('Password is required').min(5, 'Password should have at least 5 chars'),
    confirmPassword: Yup.string().required('Confirm password is required').min(5, 'Confirm password should have at least 5 chars')
});

export default class extends Component{
    state = {
        isLoading: false
    }
    loginPageRedirect = () => {
        const { navigation } = this.props;
        navigation.navigate("Login");
    }
    registerHandler = (values) => {
        this.setState({ isLoading: true });
        Alert.alert(JSON.stringify(values));
    }
    render(){
        const { isLoading } = this.state;
        return(
            <ScrollView>
                <View style={styles.root}>
                    <Text style={styles.registerText}>Register</Text>
                    <Formik
                        onSubmit={this.registerHandler}
                        initialValues={{
                            firstname: '',
                            lastname: '',
                            username: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={formValidationSchema}
                    >
                        {({ handleChange, values, handleSubmit, errors }) => (
                            <Fragment>
                                <Input 
                                    placeholder="Firstname"
                                    name="firstname"
                                    onChange={handleChange('firstname')}
                                    value={values.firstname} 
                                />
                                {errors.firstname && <Text>{errors.firstname}</Text>}
                                <Input 
                                    placeholder="Lastname" 
                                    name="lastname"
                                    onChange={handleChange('lastname')}
                                    value={values.lastname}
                                />
                                {errors.lastname && <Text>{errors.lastname}</Text>}
                                <Input 
                                    placeholder="Username" 
                                    name="username"
                                    onChange={handleChange('username')}
                                    value={values.username}
                                />
                                {errors.username && <Text>{errors.username}</Text>}
                                <Input 
                                    placeholder="Email" 
                                    name="email"
                                    onChange={handleChange('email')}
                                    value={values.email}
                                />
                                {errors.email && <Text>{errors.email}</Text>}
                                <Input 
                                    placeholder="Password" 
                                    secureTextEntry={true} 
                                    name="password"
                                    onChange={handleChange('password')}
                                />
                                {errors.password && <Text>{errors.password}</Text>}
                                <Input 
                                    placeholder="Confirm Password" 
                                    secureTextEntry={true} 
                                    name="confirmPassword"
                                    onChange={handleChange('confirmPassword')}
                                />
                                {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}
                                <Button 
                                    title="Register"
                                    onPress={handleSubmit}
                                    style={{width: '90%'}}
                                    isLoading={isLoading}
                                />
                            </Fragment> 
                        )}
                    </Formik>
                    <Text style={styles.accountText}>
                        Already have an account? <Text style={styles.loginText} onPress={this.loginPageRedirect}>Login</Text>
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'blue',
        fontWeight: '500'
    },
    registerText: {
        fontSize: 32
    },
    accountText: {
        marginTop: 16,
        marginBottom: 16
    }
});