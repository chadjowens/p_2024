// "use client";

// import React from 'react';

// const VantaBirds = () => {
//   return (
    
//     <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
//         <script src="three.r134.min.js"></script>
//         <script src="vanta.birds.min.js"></script>
//         <script>
//         VANTA.BIRDS({
//         el: "#your-element-selector",
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00
//         })
//         </script>
//     </div>
//   );
// };

// export default VantaBirds;













// import React, { useEffect, useRef, useState } from 'react'
// import * as THREE from 'three';
// import BIRDS from 'vanta/dist/vanta.birds.min.js'
// import { VantaBase } from 'vanta/src/vanta.base';

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

{/* <script async src="//jsfiddle.net/4fzxhv1w/2/embed/"></script> */}



// const useVantaBirds = () => {
//     const vantaEffectRef = useRef(null);
//     const myRef = useRef(null);
  
//     useEffect(() => {
//       if (myRef.current && !vantaEffectRef.current) {
//         const effect = BIRDS({
//           el: myRef.current
//         });
//         vantaEffectRef.current = effect;
//       }
//       return () => {
//         vantaEffectRef.current = null;
//       };
//     }, [myRef.current]);
  
//     return myRef;
//   };

// const useVantaBirds = (props) => {
//     const [vantaEffect, setVantaEffect] = useState(null)
//     const myRef = useRef(null)
//     useEffect(() => {
//       if (!vantaEffect) {
//         setVantaEffect(BIRDS({
//           el: myRef.current
//         }))
//       }
//       return () => {
//         if (vantaEffect) vantaEffect.destroy()
//       }
//     }, [vantaEffect])
//     return <div ref={myRef}>
//       Foreground content goes here
//     </div>
//   }

//   export default useVantaBirds;

  