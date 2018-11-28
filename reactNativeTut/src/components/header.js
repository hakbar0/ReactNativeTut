import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    return (
        <Text style={styles.font}>{props.headerText}</Text>
    )
};

const styles = StyleSheet.create({
    font: {
        fontSize: 30,
    },
});

export default Header;