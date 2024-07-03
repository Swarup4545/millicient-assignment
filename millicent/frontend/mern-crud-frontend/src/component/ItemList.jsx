


import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/itemService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ItemList.css'; // Import the CSS file

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data } = await getItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEdit = (item) => {
    onEdit(item);
    navigate('/'); // Navigate to the main page ('/') when Edit is clicked
  };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>USER DATA</h2>
      <table className="item-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

