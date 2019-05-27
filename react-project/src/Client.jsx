import React from 'react';

function Client({details, onDelete})
{
        return <li>{details.name}<button onClick={()=>onDelete(details.id)}>X</button></li>;
}
export default Client;
