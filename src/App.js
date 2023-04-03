import './App.css';
import BasicTable from './Components/BasicTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SortingTable from './Components/SortingTable';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BasicTable />} />
          <Route path="/screen2" element={<SortingTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
