import { createContext } from "react";
import usePerfilProvider from '../hooks/usePerfilProvider'

const PerfilContext = createContext({});

export function PerfilProvder(props) {
    const valuesProvider = usePerfilProvider();

    return (
        <PerfilContext.Provider value={valuesProvider}>
            {props.children}
        </PerfilContext.Provider>
    );
}

export default PerfilContext;