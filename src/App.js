import React ,{useEffect}from 'react';
import './App.css';
import Header from './components/header/header';
import Todoheader from './components/todo/todoheader';
function App() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (<>
<Header/>
<Todoheader/>
  </>
  );
}

export default App;
