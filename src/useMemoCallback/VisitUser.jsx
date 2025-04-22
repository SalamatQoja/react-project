// Sozdayte komponent dlya otobrajeniye statiski poseshaniy stranitsi.Ispolzyute useMemo chtobi keshirovat rezultati vichesleniy statistiki i predovratit ix povtorniye vipolneye pri kajdiy rendering 


import React, { useMemo } from 'react';

const PageStats = ({ visits }) => {
    const stats = useMemo(() => {
        console.log('Vychislyaem statistiku...');

        const total = visits.reduce((sum, day) => sum + day, 0);
        const average = (total / visits.length).toFixed(2);
        const max = Math.max(...visits);
        const min = Math.min(...visits);

        return {
            total,
            average,
            max,
            min
        };
    }, [visits]); 

    return (
        <div>
            <h2>Statistika poseshayemosti stranitsy</h2>
            <ul>
                <li>Obshchee kol-vo posetiteley: {stats.total}</li>
                <li>Srednee kol-vo: {stats.average}</li>
                <li>Maksimum za den': {stats.max}</li>
                <li>Minimum za den': {stats.min}</li>
            </ul>
        </div>
    );
};

export default PageStats;