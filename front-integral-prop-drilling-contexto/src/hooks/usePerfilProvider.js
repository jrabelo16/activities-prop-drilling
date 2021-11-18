import { useState } from "react";

function usePerfilProvider(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return {
        name,
        setName,
        age,
        setAge
    };
}

export default usePerfilProvider;