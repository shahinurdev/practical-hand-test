import React from 'react';

const SubCatg = ({subCat,checkBox}) => {
    const{sub_category_name}=subCat;
    return (
            <div>
             <p style={{ paddingLeft: "0px", marginLeft:' 331px',width:' 83%',display:'flex' }} className='text-dark bg-light'>{sub_category_name}</p>
             <input type="checkbox" defaultChecked={checkBox}  />

             </div>
             
        
    );
};

export default SubCatg;