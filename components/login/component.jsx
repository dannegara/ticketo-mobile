import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../UI/Button'
import Input from '../UI/Input';
const validationSchema = Yup.object().shape({
    login: Yup.string().required('Login is required').min(4, 'Login must have at least 4 chars'),
    password: Yup.string().required('Password is required').min(4, 'Password must have at least 4 chars')
});
export default class extends Component{
    state = {
        isLoading: false
    }
    loginHandler = (values) => {
        this.setState({ isLoading: true });
        //Alert.alert(JSON.stringify(values));
        //Alert.alert(values.login);
        // const { navigation } = this.props;
        // setTimeout(() => {
        //     navigation.navigate('Main');
        // },1000);
    }
    registerPageRedirect = () => {
        const { navigation } = this.props;
        navigation.navigate("Register");
    }
    render(){
        const { isLoading } = this.state;
        return(
            <View style={styles.root}>
                <Text style={styles.loginText}>Login</Text>
                <Formik
                    initialValues={{login: '', password: ''}}
                    onSubmit={values => { this.loginHandler(values) }}
                    validationSchema={validationSchema}
                >
                    {formikProps => ( 
                    <Fragment>
                        <Input 
                            placeholder="Username" 
                            name="login" 
                            onChange={formikProps.handleChange('login')}
                            value={formikProps.values.login} 
                        />
                        {formikProps.errors.login && <Text style={styles.errorMessage}>{formikProps.errors.login}</Text>}
                        <Input 
                            placeholder="Password" 
                            name="password" 
                            onChange={formikProps.handleChange('password')} 
                            value={formikProps.values.password}
                            secureTextEntry={true}
                        />
                        {formikProps.errors.password && <Text style={styles.errorMessage}>{formikProps.errors.password}</Text>}
                        <Button
                            title="Login"
                            onPress={formikProps.handleSubmit}
                            style={{width: '90%'}}
                            isLoading={isLoading}
                        />
                    </Fragment>)}
                </Formik>
                <Text style={styles.accountText}>
                    Don't have an account? <Text style={styles.registerText} onPress={this.registerPageRedirect}>Register</Text>
                </Text>
            </View>
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
        fontSize: 32
    },
    accountText: {
        margin: 16
    },  
    registerText: {
        color: 'blue',
        fontWeight: '500'
    },
    errorMessage: {
        color: '#FF4136'
    }
});