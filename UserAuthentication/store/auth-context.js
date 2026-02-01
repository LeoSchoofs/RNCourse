import { createContext, useEffect, useState } from "react";

// Better to use SecureStore from expo
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token); //SecureStore.setItemAsync('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token'); //SecureStore.deleteItemAsync('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;