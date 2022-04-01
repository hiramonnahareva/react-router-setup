import React, { useEffect, useState } from 'react';

const UseTshirt = () => {
    const [Tshirt , UseTeshrit] = useState ([])
    useEffect (()=>{
        fetch ('TShirt.json')
        .then (res => res.json (res))
        .then (data => UseTeshrit (data))
    } , [])

    return [Tshirt , UseTeshrit] ;
};

export default UseTshirt;