import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [percentage, setPercentage] = useState(0 + '%');
  const [nameOne, setNameOne] = useState('');
  const [nameTwo, setNameTwo] = useState('');

  const notify = () => toast.error('Fill the inputs!!!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });;

  const name1 = (e) => {
    setNameOne(e.target.value);
  }

  const name2 = (e) => {
    setNameTwo(e.target.value);
  }

  const showPercentage = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min + '%';
  }

  const handleClick = () => {
    if (nameOne && nameTwo) {
      setPercentage(showPercentage(100, 1))
    } else {
      notify();
    }
  };

  return (
    <section className="w-full h-screen bg-red-200">
      <ToastContainer />
      <div className="flex flex-col rounded-md w-52 mx-auto items-center justify-center relative top-36 bg-red-500">
        <div className="px-10 py-3">
          <h2 className="text-2xl font-semibold font-mono">Love Test</h2>
          <h1 className="text-center text-5xl font-semibold font-mono">{percentage}</h1>
        </div>
        <div className="px-10 py-3">
          <label className="font-semibold">Name</label>
          <input className="mb-5 rounded-md p-1" onChange={name1} value={nameOne} type="text" placeholder="Enter name...." />
          <label className="font-semibold">Name</label>
          <input className="mb-5 rounded-md p-1" onChange={name2} value={nameTwo} type="text" placeholder="Enter name...." />
        </div>
        <button className="font-semibold text-white bg-black rounded-md px-2 py-1 mb-5" onClick={handleClick}>Check</button>
      </div>
    </section>
  );
}

export default App;
