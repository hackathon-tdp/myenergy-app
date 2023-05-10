import React, { createContext, useState } from "react";
import Welcome from "./user-auth/Welcome";
import { Login } from "./user-auth/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp } from "./user-auth/SignUp";
import { PasswordReset } from "./user-auth/PasswordReset";

const UserAuth = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const UserAuthStack = createStackNavigator();
	const UserAuthContext = createContext(null);
	return (
		<UserAuthStack.Navigator>
			<UserAuthStack.Screen
				name="root"
				component={Welcome}
				options={{ headerShown: false }}
			/>
			<UserAuthStack.Screen
				name="login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<UserAuthStack.Screen
				name="signUp"
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<UserAuthStack.Screen
				name="passwordReset"
				component={PasswordReset}
				options={{ headerShown: false }}
			/>
		</UserAuthStack.Navigator>
	);
};

export default UserAuth;
