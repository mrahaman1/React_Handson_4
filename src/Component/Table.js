// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import DataContext from './DataContext';

// const handleAdd = ()=>
// {
//     console.log("Add called")
// }

// function Table() {
//   const context = useContext(DataContext);
//   // context is the value that we have provided
//   console.log(context);
//   return (
//     <>
//     <button onClick={handleAdd}>Add New</button>
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>ID</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//         context.entries.map((item) => (
//           // each item is an object
//             <tr key={item.id}>
//             <td>{item.name}</td>
//             <td>{item.id}</td>
//             <td>
//               {/* Pass the ID of the row to fetch the data in the edit compoennt */}
//                 <Link to='./editStudent' state={{data:item.id}}>
//                     Edit
//                 </Link> 
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </>
//   );
// }

// export default Table;

//--------------------------------------------------------------------------
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const context = useContext(DataContext);
  // context is the value that we have provided
  console.log(context);
  return (
    <>
    <button onClick={handleAdd}>Add New</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {
        context.entries.map((item,index) => (
          // each item is an object
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                {console.log("Item.id : " + item.id)}
                <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Table;
