import React from 'react'

function Table({data}) {
  return (
    <table className="App">
        <tbody >
            <tr className='search'>
                <th className='list'>Name</th>
                <th className='list'>SurName</th>
                <th className='list'>EMail</th>
            </tr>
            {data.map((item)=>(
                <tr key={item.id} className='search'>
                <td className='listItem'>{item.first_name}</td>
                <td className='listItem'>{item.last_name}</td>
                <td className='listItem'>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table