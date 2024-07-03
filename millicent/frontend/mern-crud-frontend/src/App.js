

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import ItemList from './component/ItemList';
// import ItemForm from './component/ItemForm';

// const App = () => {
//   const [currentItem, setCurrentItem] = useState(null);

//   const handleEdit = (item) => {
//     setCurrentItem(item);
//   };

//   const handleRefresh = () => {
//     setCurrentItem(null); // Clear the form after editing or creating an item
//   };

//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Item Form</Link>
//           </li>
//           <li>
//             <Link to="/usersdata">User Data</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<ItemForm currentItem={currentItem} onRefresh={handleRefresh} />} />
//         <Route path="/usersdata" element={<ItemList onEdit={handleEdit} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './component/ItemList';
import ItemForm from './component/ItemForm';
import './App.css'; // Import the CSS file

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleRefresh = () => {
    setCurrentItem(null); // Clear the form after editing or creating an item
  };

  return (
    <Router>
    <h1 style={{textAlign:'center'}}>CRUD OPERATIONS </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">USER FORM</Link>
          </li>
          <li>
            <Link to="/usersdata">USERS DATA</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ItemForm currentItem={currentItem} onRefresh={handleRefresh} />} />
        <Route path="/usersdata" element={<ItemList onEdit={handleEdit} />} />
      </Routes>
    </Router>
  );
};

export default App;






