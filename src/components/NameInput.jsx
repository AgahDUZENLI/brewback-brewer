import React from 'react';

const NameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      placeholder="Your name (optional)"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
        width: "80%",
        borderRadius: 6,
        border: "1px solid #ccc",
      }}
    />
  );
};

export default NameInput;