import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div classname="entire">
    <main>
      <Outlet />
    </main>
    </div>
    </>
  );
}

export default App;