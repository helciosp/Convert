import { StyleSheet } from 'react-native';

//Caso queiro colocar alguma navegação no projeto
const app = StyleSheet.create({
    conteiner: {
        flex: 1,
    }
})

const base = StyleSheet.create({
    binario: {
        flex: 4,
    },
    octal: {
        flex: 4
    },
    decimal: {
        flex: 4
    },
    hexadecimal: {
        flex: 4
    }
})

export { app, base }