// import React from 'react';
// import './Carousel.css'; // Import the CSS file

// const Carousel = ({ search, setSearch }) => {
//   return (
//     <div className="carousel-container">
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner" id='carousel'>
//           <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//           <div className="carousel-item active">
//             <img
//               src="https://unsplash.com/photos/a-pile-of-multicolored-pills-on-a-white-surface-_nnx2dd1VOw"
//               className="d-block w-100 carousel-image"
//               style={{ filter: "brightness(30%)" }}
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://unsplash.com/photos/a-pink-bottle-filled-with-lots-of-pink-and-yellow-confetti-1gdqiSOYs4o"
//               className="d-block w-100 carousel-image"
//               style={{ filter: "brightness(30%)" }}
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://unsplash.com/photos/white-blue-and-orange-medication-pill-KltoLK6Mk-g"
//               className="d-block w-100 carousel-image"
//               style={{ filter: "brightness(30%)" }}
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Carousel;


import React from 'react';
import './Carousel.css'; // Import the CSS file

const Carousel = ({ search, setSearch }) => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/a-pile-of-multicolored-pills-on-a-white-surface-_nnx2dd1VOw"
              className="d-block w-100 carousel-image"
              style={{ filter: "brightness(30%)" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/a-pink-bottle-filled-with-lots-of-pink-and-yellow-confetti-1gdqiSOYs4o"
              className="d-block w-100 carousel-image"
              style={{ filter: "brightness(30%)" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/a-pile-of-white-pills-sitting-on-top-of-a-table-SDf1hB4th98"
              className="d-block w-100 carousel-image"
              style={{ filter: "brightness(30%)" }}
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
