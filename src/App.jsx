import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SayedHamedDetails from "./pages/SayedHamedDetails";
//C
import CreateSayedHamed from "./pages/CreateSayedHamed";
import UpdateSayedHamed from "./pages/UpdateSayedHamed";
//ALL sayedhamed is not defind
import AllSayedHameds from "./pages/AllSayedHameds";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sayed-hameds" element={<AllSayedHameds />} />
        <Route path="/sayed-hameds/:sayedHamedId" element={<SayedHamedDetails />} />
       {/*  C */}
       {/* path */}
        <Route path="/sayed-hameds/create" element={<CreateSayedHamed />} />
        <Route path="/sayed-hameds/:sayedHamedId/edit" element={<UpdateSayedHamed />} />

      </Routes>
    </div>
  );
}

export default App;
