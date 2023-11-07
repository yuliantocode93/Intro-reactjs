// import Komponen from "./Materi/Komponen";
// import Styling from "./Materi/styling";
// import Styled from "./Materi/styling/Styled";
// import Bootstrap from "./Materi/styling/Bootstrap";
// import Reusable from "./Materi/Reusable";
// import Rendering from "./Materi/Rendering";
// import Form from "./Materi/Form";
// import Lifecycle from "./Materi/Lifecycle";
// import Hooks from "./Materi/Hooks";
// import { Link, Outlet } from "react-router-dom";
// import "./App.css";

import Redux from "./Materi/Redux/Index";

// function App() {
//   return (
//     <div className="App">
//       <h1>Belajar React Routing</h1>

//       <nav>
//         <Link to="/Home" className="mr">
//           Home
//         </Link>
//         <Link to="/About" className="mr">
//           About
//         </Link>
//         <Link to="/Category/makanan" className="mr">
//           makanan
//         </Link>
//         <Link to="/Category/minuman" className="mr">
//           minuman
//         </Link>
//       </nav>

//       <Outlet />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Redux />
    </div>
  );
}

export default App;
