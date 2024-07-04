import React from 'react'

function Filter({filterdata,category,setcategory}) {

  function filterhandler(title){
    setcategory(title);
    // console.log(category);
  }
  return (
    <div className='w-11/12  flex max-w-max flex-wrap space-x-4  gap-y-4  mx-auto  py-4  justify-center '>
  {filterdata.map( (data) => {
      return(
        <button  
        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50  border-2 trasition-all duration-300
        ${category===data.title?'bg-opacity-60 border-white' : ' bg-opacity-40 border-transparent '}` }

      
        key={data.id} onClick={()=> filterhandler(data.title)} >{data.title} </button>)
  }
    )}
    </div>
  )
}

export default Filter