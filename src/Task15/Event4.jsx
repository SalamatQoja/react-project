// // Podszkazka pri navedeniy
// // Pri navedeniy kursora na element(naprimer, ikonku ) doljn otobrajatsya podskazka(tooltip).Sostayaniya pokaza upravlyaetsya cherez useState 

// import React, { useState } from "react";
// import { Info } from "lucide-react"; // можно использовать любую иконку

// function Important() {
//     const [showTooltip, setShowTooltip] = useState(false);

//     return (
//         <div style={{ position: "relative", display: "inline-block" }}>
//             {/* Иконка с хендлерами наведения */}
//             <Info
//                 onMouseEnter={() => setShowTooltip(true)}
//                 onMouseLeave={() => setShowTooltip(false)}
//                 style={{ cursor: "pointer" }}
//             />

//             {showTooltip && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "-30px",
//                         left: "0",
//                         backgroundColor: "#333",
//                         color: "#fff",
//                         padding: "5px 10px",
//                         borderRadius: "5px",
//                         fontSize: "14px",
//                         whiteSpace: "nowrap"
//                     }}
//                 >
//                     Это подсказка!
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Important;
