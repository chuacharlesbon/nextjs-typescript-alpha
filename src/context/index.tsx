'use client'
import React, { FC } from 'react';

//Creates context object
//context object - data type of an object that can be used to store information that can be shared to other components within the app
//context object is a different approach to passing information between components and allows us for easier accesss by avoiding the use of prop drilling

let UserContext = React.createContext<any>({ user: "test", setUser: (testVar:any) => "", unsetUser: (testVar:any) => ""});

//Provider component allows other components to consume the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider

export default UserContext;

export const AppWrapper: FC<any> = ({ children }) => {
    const [user, setUser] = React.useState({id: null, isAdmin: null, email: null, userName: null, firstName: null, lastName: null, mobileNo: null})
    const unsetUser = () => {
        localStorage.clear()
    }
    console.log(user);
    return(
        <UserProvider value={{user, setUser, unsetUser}}>
            {children}
        </UserProvider>
    )
}