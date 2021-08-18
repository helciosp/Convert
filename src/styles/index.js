import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

//Caso queiro colocar alguma navegação no projeto
const app = StyleSheet.create({
    conteiner: {
        flex: 1,
    }
})

const base = StyleSheet.create({
    session: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBase: {
        textAlign: 'center',
        margin: 10,
        fontSize: 16
    },
    inputBase: {
        backgroundColor: '#1c1c1c',
        height: 70,
        color: '#fff',
        paddingHorizontal: 10,
        width: width - 20,
        borderRadius: 10
    }
});

const header = StyleSheet.create({
    conteiner: {
        height: 70,
        backgroundColor: '#1c1c1c',
        borderTopColor: '#fff',
        borderTopWidth: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})

export { app, base, header }