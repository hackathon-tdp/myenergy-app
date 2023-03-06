import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../variables";

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [theme, setTheme] = useState(false);

    return <AppContext.Provider
        value={{
            theme: theme ? darkTheme : lightTheme,
            setTheme: setTheme,
            isLoggedIn: isLoggedIn,
            setIsLoggedIn: setIsLoggedIn,
        }}
    >
        {children}
    </AppContext.Provider>;
};

export default AppContext;
