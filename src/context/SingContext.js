import React, { useState } from 'react';

export const SingContext = React.createContext();

export default function ({ children }) {
    const [currentSingState, setCurrentSingState] = useState({});

    const changeCurrentSing = function (sing) {
        setCurrentSingState({ sing });
    }

    return (
        <SingContext.Provider value={{
            currentSing: currentSingState,
            changeSing: changeCurrentSing
        }}>
            {children}
        </SingContext.Provider>
    );
}