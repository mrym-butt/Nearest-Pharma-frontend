// // src/components/Card.js

// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchCart, useCart } from '../ContextReducer'; // Correct path

// export default function Card(props) {
//   const data = useCart();
//   let dispatch = useDispatchCart();
//   let options = props.option;
//   let priceOptions = Object.keys(options);
//   const priceRef = useRef();
//   const [quantity, setaQuantity] = useState(1);
//   const [size, setSize] = useState("");

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   const handleAddToCart = async () => {
//     let medicine = [];
//     for (const item of data) {
//       if (item.id === props.medicineItem._id) {
//         medicine = item;
//         break;
//       }
//     }
//     if (medicine.length !== 0) {
//       if (medicine.size === size) {
//         await dispatch({ type: "UPDATE", id: props.medicineItem._id, price: finalPrice, quantity: quantity });
//         return;
//       } else if (medicine.size !== size) {
//         await dispatch({ type: "ADD", id: props.medicineItem._id, name: props.medicineItem.name, price: finalPrice, quantity: quantity, size: size, img: props.ImgSrc });
//         return;
//       }
//       return;
//     }
//     await dispatch({ type: "ADD", id: props.medicineItem._id, name: props.medicineItem.name, price: finalPrice, quantity: quantity, size: size });
//   }

//   let finalPrice = quantity * parseInt(options[size]);

//   return (
//     <div>
//       <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
//         <img src={props.medicineItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//         <div className="card-body">
//           <h5 className="card-title">{props.medicineItem.name}</h5>
//           <div className="container w-100">
//             <select className="m-2 h-100 bg-success" onChange={(e) => { setaQuantity(e.target.value) }}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
//               {
//                 priceOptions.map((data) => {
//                   if (data === "_id") {
//                     return null;
//                   } else {
//                     return <option key={data} value={data}>{data}</option>;
//                   }
//                 })
//               }
//             </select>
//             <div className="d-inline h-100 fs-5">${finalPrice}</div>
//             <hr />
//             <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from '../ContextReducer'; // Correct path

export default function Card(props) {
  const data = useCart();
  const dispatch = useDispatchCart();
  const { medicine } = props;
  const priceRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  // Default options if not provided
  const options = medicine.options || {};
  const priceOptions = Object.keys(options);
  const imageUrl = medicine.img || 'default-image-url'; // Use a default image if none provided

  useEffect(() => {
    if (priceOptions.length > 0) {
      setSize(priceOptions[0]);
    }
  }, [priceOptions]);

  const handleAddToCart = async () => {
    const item = data.find(item => item.id === medicine._id && item.size === size);

    if (item) {
      await dispatch({
        type: "UPDATE",
        id: medicine._id,
        price: finalPrice,
        quantity: quantity
      });
    } else {
      await dispatch({
        type: "ADD",
        id: medicine._id,
        name: medicine.medicineName,
        price: finalPrice,
        quantity: quantity,
        size: size,
        img: imageUrl
      });
    }
  };

  const finalPrice = quantity * (options[size] || 0);

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
        <img src={imageUrl} className="card-img-top" alt={medicine.medicineName} style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{medicine.medicineName}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success" onChange={(e) => setQuantity(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">${finalPrice}</div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
