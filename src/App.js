import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DataContext from './Component/DataContext';
import Edit from './Component/Edit';
import Table from './Component/Table';


function App() {
  const [data, setData] = useState([{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }]);
  return (
    <>
    {/* NavBar */}
    <Routes>
      {/* Home  */}
      <Route path='/' element={
         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table />
         </DataContext.Provider>
      }/>
      {/* Edit  */}
      <Route path='/editStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>
      }/>
    <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>
      }/>
    </Routes>
    </>
  );
}

export default App;

//----------------------------------------------------------------------------------------//
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import DataContext from './Component/DataContext';
// import Edit from './Component/Edit';
// import Table from './Component/Table';

// function App() {
//   const [data, setData] = useState([{ name: 'Student1', id: 1 }, { name: 'Student2', id: 2 }]);
//   return (
//     <>
//     {/* NavBar */}
//     <Routes>
//       {/* Home  */}
//       <Route path='/' element={
//          <DataContext.Provider value={{entries : data, updateFunction : setData}}>
//             <Table />
//          </DataContext.Provider>
//       }/>
//       {/* Edit  */}
//       <Route path='/editStudent' element={
//         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
//           <Edit/>
//         </DataContext.Provider>
//       }/>
//     <Route path='/addStudent' element={
//         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
//           <Edit/>
//         </DataContext.Provider>
//       }/>
//     </Routes>
//     </>
//   );
// }

// export default App;
