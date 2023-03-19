import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../variables";

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");

    return <AppContext.Provider
        value={{
            theme: theme ? darkTheme : lightTheme,
            setTheme: setTheme,
            user: user,
            setUser: setUser,
            isLoggedIn: isLoggedIn,
            setIsLoggedIn: setIsLoggedIn,
            accessToken: accessToken,
            setAccessToken: setAccessToken,
            refreshToken: refreshToken,
            setRefreshToken: setRefreshToken
        }}
    >
        {children}
    </AppContext.Provider>;
};

export default AppContext;
