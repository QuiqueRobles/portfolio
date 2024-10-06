  import React from 'react';
  import './HeroOrbit.css';

  function HeroOrbit() {
  return (
  <div className="orbit-container">
              <div className="orbit">
                <div className="planet"></div>
                <div className="satellite"></div>
              </div>
  </div>
  )
  }
  export default HeroOrbit;

//   import React from 'react';
// import './HeroOrbit.css';

// export default function HeroOrbit() {
//   return (
//     <div className="orbit-container">
//       <div className="sun"></div>
//       <div className="orbit mercury-orbit">
//         <div className="planet mercury"></div>
//       </div>
//       <div className="orbit venus-orbit">
//         <div className="planet venus"></div>
//       </div>
//       <div className="orbit earth-orbit">
//         <div className="planet earth">
//           <div className="moon-orbit">
//             <div className="moon"></div>
//           </div>
//         </div>
//       </div>
//       <div className="orbit mars-orbit">
//         <div className="planet mars"></div>
//       </div>
//       <div className="asteroid-belt"></div>
//       <div className="orbit jupiter-orbit">
//         <div className="planet jupiter"></div>
//       </div>
//       <div className="orbit saturn-orbit">
//         <div className="planet saturn">
//           <div className="saturn-ring"></div>
//         </div>
//       </div>
//     </div>
//   );
// }