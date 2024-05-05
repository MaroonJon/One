import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const AuthContext = createContext();

const endpoint = 'https://api.datavortex.nl/one/'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null)

    const login = async ({ username, password }) => {
        try {
            const rawResponse = await fetch(`${endpoint}users/authenticate`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'one:tyofBDI1NCLUCxN6JSu3'
                },
                body: JSON.stringify({ username, password })
            });
            if (rawResponse.status === 400) {
                throw new Error('user not found')
            }
            else if (rawResponse.status === 200) {
                const content = await rawResponse.json();
                setUser({ username, token: content.jwt })
                return 'ok'
            } else {
                throw new Error('unknown error')
            }
        } catch (error) {
            alert(error)
        }
    };

    const signup = async ({ username, password, email, address }) => {
        try {
            const rawResponse = await fetch(`${endpoint}users`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'one:tyofBDI1NCLUCxN6JSu3'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    info: address,
                    "authorities": [
                        {
                            "authority": "USER"
                        }
                    ]

                })
            });
            if (rawResponse.status === 400) {
                throw new Error('Something is missing')
            }
            if (rawResponse.status === 409) {
                throw new Error('Username already exists')
            }
            else if (rawResponse.status === 200) {
                const content = await rawResponse.json();
                return 'ok'
            } else {
                throw new Error('unknown error')
            }
        } catch (error) {
            alert(error)
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            login,
            signup,
            logout,
        }),
        [user]
    );
    return <AuthContext.Provider
        value={value}
    >{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
