import { createContext, useContext, useMemo } from "react";
import authService from "../utils/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);

    const login = async ({ username, password }) => {
        try {
            const token = await authService.login({ username, password });
            setUser({ username, token });
            return 'ok';
        } catch (error) {
            alert(error.message);
        }
    };

    const signup = async ({ username, password, email, address }) => {
        try {
            const result = await authService.signup({ username, password, email, address });
            if (result === 'ok') {
                return 'ok';
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(() => ({
        user,
        login,
        signup,
        logout,
    }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export const useAuth = () => {
    return useContext(AuthContext);
};
