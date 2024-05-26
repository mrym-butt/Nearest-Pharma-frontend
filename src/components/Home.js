
// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// import Carousel from './Carousel';

// export default function Home() {
//   const [search, setSearch] = useState('');
//   const [medicineList, setMedicineList] = useState([]);
//   const limit = 20; 

//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   useEffect(() => {
//     fetch('https://nearest-pharma-be.vercel.app/medicine/')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Medicine data:', data);
//         if (data && data.data) {
//           const shuffledData = shuffleArray(data.data);
//           setMedicineList(shuffledData.slice(0, limit));
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching medicine data:', error);
//       });
//   }, []);

//   return (
//     <>
//       <Carousel search={search} setSearch={setSearch} />
//       <div className="container">
//         <div className="row">
//           {medicineList
//             .filter(medicine => 
//               medicine.medicineName.toLowerCase().includes(search.toLowerCase())
//             )
//             .map(medicine => (
//               <div key={medicine._id} className="col-12 col-md-6 col-lg-3 mb-3">
//                 <Card medicine={medicine} />
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// import Carousel from './Carousel';
// // import { Link, useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const [search, setSearch] = useState('');
//   const [medicineList, setMedicineList] = useState([]);
//   const limit = 20; 
//   const navigate = useNavigate();
  
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   useEffect(() => {
//     fetch('https://nearest-pharma-be.vercel.app/medicine/')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Medicine data:', data);
//         if (data && data.data) {
//           const shuffledData = shuffleArray(data.data);
//           setMedicineList(shuffledData.slice(0, limit));
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching medicine data:', error);
//       });
//   }, []);

//   const handleLogout = () => {
//     navigate("/signin");
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">Nearest Pharma</span>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Carousel search={search} setSearch={setSearch} />
//       <div className="container">
//         <div className="row">
//           {medicineList
//             .filter(medicine => 
//               medicine.medicineName.toLowerCase().includes(search.toLowerCase())
//             )
//             .map(medicine => (
//               <div key={medicine._id} className="col-12 col-md-6 col-lg-3 mb-3">
//                 <Card medicine={medicine} />
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
import Card from './Card';
import Carousel from './Carousel';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState('');
  const [medicineList, setMedicineList] = useState([]);
  const limit = 20; 
  const navigate = useNavigate();
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    fetch('https://nearest-pharma-be.vercel.app/medicine/')
      .then(response => response.json())
      .then(data => {
        console.log('Medicine data:', data);
        if (data && data.data) {
          const shuffledData = shuffleArray(data.data);
          setMedicineList(shuffledData.slice(0, limit));
        }
      })
      .catch(error => {
        console.error('Error fetching medicine data:', error);
      });
  }, []);

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ marginBottom: '20px', padding: '10px' }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: 'white' }}>Nearest Pharma</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-danger" style={{ color: 'white', backgroundColor: 'red' }} onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carousel search={search} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          {medicineList
            .filter(medicine => 
              medicine.medicineName.toLowerCase().includes(search.toLowerCase())
            )
            .map(medicine => (
              <div key={medicine._id} className="col-12 col-md-6 col-lg-3 mb-3">
                <Card medicine={medicine} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
