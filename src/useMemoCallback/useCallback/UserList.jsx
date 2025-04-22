// Sozdayte komponent otobrajenye spisok polzovatelya.Kajdiy polzovatel doljen imeet svoe imya vozrast.Ispolzyute useMemo chtobi optimizirovat rendering spiska polzovatel keshirya rezultati 

import React, { useMemo, useState } from 'react';

const usersData = [
    { id: 1, name: 'Ivan', age: 25 },
    { id: 2, name: 'Anna', age: 30 },
    { id: 3, name: 'Dmitry', age: 22 },
    { id: 4, name: 'Olga', age: 27 },
    { id: 5, name: 'Nikolay', age: 35 },
];

const UserList = () => {
    const [minAge, setMinAge] = useState(0);

    const filteredUsers = useMemo(() => {
        console.log('Filtruem polzovateley...');
        return usersData.filter((user) => user.age >= minAge);
    }, [minAge]);

    return (
        <div>
            <h2>Spisok pol'zovateley</h2>
            <label>
                Minimal'nyy vozrast:
                <input
                    type="number"
                    value={minAge}
                    onChange={(e) => setMinAge(Number(e.target.value))}
                />
            </label>

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} — {user.age} let
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;