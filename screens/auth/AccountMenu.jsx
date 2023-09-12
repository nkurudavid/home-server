import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";

const backImage = require("../../assets/images/backImage.jpg");

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login to Account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 24}}>Log In</Text>
                </TouchableOpacity>
                <View style={{marginTop: 40, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}} >
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 20}}> Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{color: '#0170AF', fontWeight: '800', fontSize: 20}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#0170AF",
        alignSelf: "center",
        paddingBottom: 45,
    },
    input: {
        backgroundColor: "#F4F4FB",
        height: 58,
        marginBottom: 15,
        fontSize: 20,
        padding: 12,
        borderRadius: 10,
    },
    backImage: {
        width: "100%",
        height: 300,
        position: "absolute",
        top: 0,
        resizeMode: "cover",
    },
    whiteSheet: {
        width: "100%",
        height: "75%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    form: {
        flex: 2,
        justifyContent: "center",
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: "#0170AF",
        height: 58,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    }
});