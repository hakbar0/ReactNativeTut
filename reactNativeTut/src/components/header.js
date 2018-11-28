import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
    <Text style={styles.font}>Albums!</Text>
    )
};

const styles = StyleSheet.create({
    font: {
        fontSize: 50,
    },
});

export default Header;