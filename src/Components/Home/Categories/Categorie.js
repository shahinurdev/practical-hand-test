import React, { useState } from 'react';
import SubCatg from '../SubCatg/SubCatg';

const Categorie = (props) => {
    const {category_id,category_name,subcatg}=props.categorie;
    const [show,setShow]= useState(false);

    return (
        <div className="container" style={{color: '#9DCCFF'}} >
          <div className="row">
              <div className="col-md-8">
              <h4 onClick={()=>setShow(!show)} >{category_name}</h4>
           
           {
              show && subcatg.map(subCat=> <SubCatg subCat={subCat}></SubCatg>)
              
           }
           </div>
           <div className="col-md-4">
           <input type="checkbox" />
           </div>
              
          </div>
        
           
        </div>
    );
};

export default Categorie;