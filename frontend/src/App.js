import React, {useState} from "react";
import "./assets/globalStyle.scss";
import { useGlobalContext } from "./context/globalContext";
//import of components
import {Navigation, Dashboard, Income, Goals, Expenses, Analytics, Settings} from "./Components"



function App() {
  const [active, setActive] = useState(1)
  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1: 
        return <Dashboard/>
      case 2:
        return <Expenses/>
      case 3:
        return <Income/>
      case 4:
        return <Goals/>
      case 5:
        return <Analytics/>
      case 6: 
        return <Settings/>
      default: 
        return<Dashboard/>
    }
  }

  return (<>
    <Navigation active={active} setActive={setActive}/>
    <main>
      <div className="main-container">
      {displayData()}
      </div>
    </main>
    </>
  );
}


export default App;
