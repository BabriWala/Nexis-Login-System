import { RouterProvider } from 'react-router';
import './App.css';
import router from './Pages/Router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto my-20'>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
    
  );
}

export default App;
