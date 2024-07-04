import React, { useState } from 'react'
import Card from './Card';

function Cards({courses,category,setcategory}) {


const[likedcourse,setlikedcourse]=useState([]);



  function getcourses(){
    if(category==='All'){
      let allcoursedata=[];
      Object.values(courses).forEach( (array) => {
   
        array.forEach((course)=>{
          allcoursedata.push(course);
        })
        
      })

  
      return allcoursedata;
    }
    else{
      // console.log(courses.Development);
      // console.log(courses);
      // console.log(Array.isArray(courses));
      // console.log(courses.category);
      // console.log(courses[category]);
      // console.log(Array.isArray(courses[category]));
      // console.log(category);
       return courses[category];// methord of pass variable key in object bracket methord
    

    }

  }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'> 
      {
      
      getcourses().map((coursedata)=>{

        return(
          <Card key={coursedata.id} course={coursedata}  likedcourse={likedcourse}  setlikedcourse={setlikedcourse}></Card>
        )

      })
        }
      
    </div>
  )
}

export default Cards