import { useState } from "react";

function useUsersListProvider() {
    const [usersData, setUsersData] = useState([]);
    const [usersInEdinting, setUsersInEdinting] = useState(false);

    function handleDeleteUser(userId) {
        const localUsersData = [...usersData];

        const index = localUsersData.findIndex(item => item.id === userId);

        localUsersData.splice(index, 1);

        setUsersData(localUsersData);
    }

    return {
        usersData,
        setUsersData,
        usersInEdinting,
        setUsersInEdinting,
        handleDeleteUser
    }
}

export default useUsersListProvider;