import React from 'react'

const AlgoList = () => {

    const list = [
        'algo1',
        'algo2',
        'algo3',
    ];

  return (
    <div>
        <ul>
            {list.map((element, index) => (
                <li key = {index}>{element}</li>
            ))}
        </ul>
    </div>
  )
}

export default AlgoList