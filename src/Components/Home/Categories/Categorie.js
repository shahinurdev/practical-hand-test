import React, { useState } from 'react';
import SubCatg from '../SubCatg/SubCatg';

const Categorie = (props) => {
    const {category_name,subcatg}=props.categorie;

    const [show,setShow]= useState(false);
    // const [checkBox,setCheckBox] = useState(false);
//    console.log('checkbox',checkBox);
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
           {/* <input onChange={()=>setCheckBox(!checkBox)} type="checkbox" /> */}
           </div>
              
          </div>
        
           
        </div>
    );
};

export default Categorie;