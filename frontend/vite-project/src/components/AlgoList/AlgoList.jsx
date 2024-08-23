import React from 'react'
import Button from '@mui/material/Button';

const AlgoList = () => {

    const list = [
        'Arrays',
        'Strings',
        'Linked Lists',
        'Stacks and Queues',
        'Binary Trees',
        'Binary Search Trees',
        'Heap',
        'Hash Tables',
        'Graph Traversal',
        'Depth First Search (DFS)',
        'Breadth First Search (BFS)',
        'Binary Search',
        'Sorting Algorithms',
        'Two Pointers',
        'Sliding Window',
        'Greedy Algorithms',
        'Dynamic Programming',
        'Backtracking',
    ];
    

  return (
    <div style={{ height: '400px', overflowY: 'auto', scrollSnapType: 'y mandatory' }} className='invisible-scrollbar press-start-2p-regular text-sm'>
        <ul>
            {list.map((element, index) => (
                <li key = {index} className='mb-4'>
                <button onClick={''} className='algobutton' style={{ scrollSnapAlign: 'start' }}>
                    {element}
                </button>  
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AlgoList