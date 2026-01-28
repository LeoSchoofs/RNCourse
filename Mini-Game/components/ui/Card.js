import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({children}) {
    return <View style={styles.card}>{children}</View>;
    
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        elevation: 4, // Shadow doesn't working with a backgroundColor
    },
});