// onChange = event handler used primarily with form elements like input, textarea, select, etc. It is triggered whenever the value of the element changes. This event handler allows you to capture user input and update the state of your component accordingly.

import React, {useState} from "react";
function MyComponent() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <p>1. Name : {name}</p>
            <input value= {name} onChange = {handleNameChange} />
            
            <p>2. Quantity: {quantity}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>

            <p>3. Comment: {comment}</p>
            <textarea name={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions..."></textarea>

            <p>4. Payment: {payment}</p>
            <select value={payment} onChange={handlePaymentChange} >
                <option value="">Select an option</option>
                <option value="CreditCard">Credit Card</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            
            <p>5. Shipping: {shipping}</p>
            <label>
                <input type="radio" value={shipping} checked = {shipping === "Pick Up"} onChange={handleShippingChange}  />
                Pick Up
            </label><br />
            <label>
                <input type="radio" value={shipping}  checked = {shipping === "Delivery"}
                onChange={handleShippingChange}  />
                Delivery
            </label>

        </div>
    );
}

export default MyComponent;