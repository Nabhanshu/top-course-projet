
import React from 'react'
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';




function Card({course,likedcourse,setlikedcourse}) {


   function clickhandler(){
    
    if(likedcourse.includes(course.id)){
      // phle s liked h toh unlike krna h mtlb array s bhr krna h we use filtering in this case
      setlikedcourse((prev)=> prev.filter( (cid)=>  { return cid!=course.id }) )//filter or map dono function m return krana pdega agr=>{} agr in bracket ka use kiya varna bina returb krya kaam  chl jayega   
      toast.warning("unliked ")
    }

    else{

      if(likedcourse.length==0){
        setlikedcourse([course.id]);
      }
      else{
        setlikedcourse((prev)=>[...prev,course.id])
      }
      toast.success("liked ")

    }

    //logic of icon change
   }
  return (
    <div className='w-[300px]  bg-bgDark   bg-opacity-80 rounded-md overflow-hidden  '>
    <div className='relative'>
      <img src={course.image.url} alt="" />
      <div className='w-[40px]  h-[40px]  bg-white rounded-full absolute right-2  bottom-[-11px] grid  place-items-center '>
      <button onClick={clickhandler}>
         {

          likedcourse.includes(course.id) ? ( <FcLike fontSize='1.75rem'></FcLike>): (<FcLikePlaceholder fontSize='1.75rem'></FcLikePlaceholder>)

               
               }
   
        
      </button>
    </div> 
    </div>

   

    <div className='p-4'>
      <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
      <p className='text-white'>
        {
          course.description.length>100?( course.description.substr(0,100) +"..."):(course.description)
        }
      </p>
    </div>

    

    </div>
  )
}

export default Card