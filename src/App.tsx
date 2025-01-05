import React, { useState } from 'react';
import JobDescription from './component/jobDescription';
import Navbar from './component/navbar';

const App: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    

    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <header className="text-center bg-white py-6 shadow-md">
        <h1 className="text-3xl font-title text-neutral-950">
          Cover Letter Generator
        </h1>
        <p className="text-neutral-600 mt-2">
          Create a personalized cover letter in minutes.
        </p>

        
        {!display && (
          <button
            onClick={() => setDisplay(true)} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-2xl focus:outline-none"
          >
            Get Started
          </button>
        )}
      </header>

      
      {display && (
        <main className="flex-grow bg-gray-100">
          <JobDescription />
          
        </main>
      )}
    </div>
  );
};

export default App;
