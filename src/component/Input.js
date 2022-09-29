function Input({ labelText, value, handleInputChange }) {
  return (
    <div className="name-input">
      <label>{labelText}</label>
      <input value={value} onChange={handleInputChange} type="text" />
    </div>
  );
}

export default Input;
