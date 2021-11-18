import { useContext } from "react";
import PerfilContext from "../contexts/PerfilContext";

function usePerfil() {
    return useContext(PerfilContext);
}

export default usePerfil;