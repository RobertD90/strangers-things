import React from "react";
import { Link } from 'react-router-dom';

const TreadmillDetails = ({ treadmillList, settreadmillList }) => {

    return (
        <>
            {treadmillList.map((shoes) => (
                <li key={shoes.id}>
                    <Link to={`/listing/${shoes.id}`}>{shoes.name}</Link>
                    <button onClick={() => settreadmillList(shoes)}>Select</button>
                </li>
            ))}
        </>
    )

}

export default TreadmillDetails