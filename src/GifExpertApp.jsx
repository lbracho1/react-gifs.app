import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
   
   const [categories, setCategories] = useState([ 'Barcelona FC' ]);   
   
   const onAddCategory = ( AddCategory ) => {
      if( categories.includes(AddCategory ) ) return;
      setCategories([ AddCategory, ...categories ]);
   }
   
   return (
    <>
     
       <h1>GifExpertApp</h1>
    
      
      <AddCategory 
    
         onNewCategory={ onAddCategory }
      />
    
     {
         categories.map( ( category ) => ( 
               <GifGrid 
               key={ category } 
               category={ category } /> 
         ))
      }
      
    </>
    )
}
