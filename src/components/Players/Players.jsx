import React, { use } from 'react';

const Players = ({playersPromies}) => {
    // console.log(playersPromies);
   const playersData = use(playersPromies);
    console.log(playersData);
    return (
        <div>
            players
        </div>
    );
};

export default Players;