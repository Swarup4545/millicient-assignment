

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ItemForm.css'; // Import the CSS file

// const ItemForm = ({ currentItem, onRefresh }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     phoneNumber: '',
//   });

//   useEffect(() => {
//     if (currentItem) {
//       setFormData({
//         name: currentItem.name,
//         description: currentItem.description,
//         price: currentItem.price,
//         phoneNumber: currentItem.phoneNumber,
//       });
//     } else {
//       setFormData({
//         name: '',
//         description: '',
//         price: '',
//         phoneNumber: '',
//       });
//     }
//   }, [currentItem]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (currentItem) {
//         // Update existing item
//         const response = await axios.put(`http://localhost:3001/items/${currentItem._id}`, formData);
//         console.log('Item updated:', response.data);
//       } else {
//         // Create new item
//         const response = await axios.post('http://localhost:3001/items', formData);
//         console.log('Item created:', response.data);
//       }
//       onRefresh();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="item-form">
//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Item Name"
//           required
//         />
//       </div>
//       <div>
//         <label>Description</label>
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           required
//         />
//       </div>
//       <div>
//         <label>Price</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price"
//           required
//         />
//       </div>
//       <div>
//         <label>Phone Number</label>
//         <input
//           type="text"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//         />
//       </div>
//       <button type="submit">{currentItem ? 'Update' : 'Submit'}</button>
//     </form>
//   );
// };

// export default ItemForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ItemForm.css'; // Import the CSS file

const ItemForm = ({ currentItem, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    phoneNumber: '',
  });

  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useEffect(() => {
    if (currentItem) {
      setFormData({
        name: currentItem.name,
        description: currentItem.description,
        price: currentItem.price,
        phoneNumber: currentItem.phoneNumber,
      });
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        phoneNumber: '',
      });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For phone number, restrict input to numbers only
    if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentItem) {
        // Update existing item
        const response = await axios.put(`http://localhost:3001/items/${currentItem._id}`, formData);
        console.log('Item updated:', response.data);
      } else {
        // Create new item
        const response = await axios.post('http://localhost:3001/items', formData);
        console.log('Item created:', response.data);
      }
      onRefresh();
      navigate('/usersdata'); // Navigate to '/usersdata' after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="item-form">
    <h2>USER FORM</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="User Name"
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Price (Numbers only)"
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number (Numbers only)"
          required
        />
      </div>
      <button type="submit">{currentItem ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default ItemForm;






