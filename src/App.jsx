import { Outlet } from 'react-router-dom';

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