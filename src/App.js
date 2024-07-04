import React, { useEffect, useState } from "react";
import { filterData ,apiUrl} from './data.js'
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import Spineer from "./components/Spineer.js";
import { toast } from "react-toastify";

const filterdata=filterData;

const App = () => {

  const [course,setcourse]=useState(null);//[]ya pass krdo loading ni krna toh
  const[loading,setloading]=useState(true);
  const [category,setcategory]=useState(filterdata[0].title);
    async function fetchdata(){
    setloading(true);
    try{

      let response= await fetch(apiUrl);
      let jsondata=await response.json();
    //  console.log({jsondata});
      setcourse(jsondata.data);
      // console.log({course});

    }

    catch(error){
    toast.error("network khrab h");

 


    }

    setloading(false);
  }

  useEffect(()=>{
    fetchdata()
  },[]);
  return <div className="min-h-screen flex flex-col  bg-bgDark2">

    <div><Navbar></Navbar></div>

    <div className="bg-bgDark2">
    <div><Filter filterdata={filterdata} category={category}  setcategory={setcategory}></Filter></div>
    <div className="w-11/12   max-w-[1200px]  mx-auto flex  flex-wrap justify-center  items-center min-h-[50vh]"
    
    >{loading?(<Spineer></Spineer>):(<Cards courses={course} category={category} setcategory={setcategory}></Cards>)}</div>
</div>

  </div>;
};

export default App;
