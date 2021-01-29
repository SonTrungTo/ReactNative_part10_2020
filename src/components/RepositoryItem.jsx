import React from "react";
import { View, StyleSheet, Image } from "react-native";

import theme from "./theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
    },
    basic: {
        flexDirection: 'row',
        marginBottom: 25
    },
    avatarSize: {
        width: 60,
        height: 60,
        flexGrow: 0,
        borderRadius: 5
    },
    description: {
        flexGrow: 1,
        marginLeft: 20,
        flexShrink: 1
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badge: {
        borderStyle: 'solid',
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        textAlign: 'center',
        padding: 5,
        flexGrow: 0
    }
});

const RepositoryItem = ({ fullName,
description, language, forksCount,
stargazersCount, ratingAverage, reviewCount,
ownerAvatarUrl }) => {
    return (
        <View style={ styles.container }>
            <View style={styles.basic}>
                <Image 
                style={styles.avatarSize}
                source={{
                    uri: ownerAvatarUrl
                }}
                />
                <View style={styles.description}>
                    <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
                    <Text color="textSecondary" style={{marginTop: 5}}>{description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text color="textBar" style={styles.badge}>{language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.status}>
                <View style={{ flexDirection: 'column' }}>
                    <Text fontWeight="bold" fontSize="subheading">{forksCount >= 1000 ? Number(forksCount / 1000).toFixed(1) + 'k' : forksCount}</Text>
                    <Text color="textSecondary" fontSize="subheading">Forks</Text>
                </View>
                <Text>{stargazersCount} Stars</Text>
                <Text>{reviewCount} Reviews</Text>
                <Text>{ratingAverage} Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItem;