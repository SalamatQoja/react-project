// Sozdayte kontekst dlya xranenya informatsyi o tekushem polzovatelya.Polzyute komponenti UserProvider, UserContext, i UserComponent, ispolzyushie etot kontekst dlya peredachi informatsii o polzovatelya cherez komponenti derevo 
// import React, {useState, useContext} from "react";

import React, { createContext, useContext, useState } from "react";

const UserInformation = createContext();

function UserProvider() {
    const [user, setUser] = useState("Chris");

    return (
        <UserInformation.Provider value={user}>
            <h1>{`My lovely jobs ${user}`}</h1>
            <UserContext />
        </UserInformation.Provider>
    );
}

function UserContext() {
    return (
        <>
            <UserComponent />
        </>
    );
}

function UserComponent() {

    const great = useContext(UserInformation);
    return (
        <>
        <h2>{`My lovely jobs ${great}`}</h2>
        </>
    );
}

export default UserProvider;



