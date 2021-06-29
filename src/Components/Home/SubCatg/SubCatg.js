import React from 'react';

const SubCatg = (props) => {
    const{sub_category_id,sub_category_name}=props.subCat;
    // console.log('inputcheck',checkBox);
    return (
            <div>
             <p style={{ paddingLeft: "0px", marginLeft:' 331px',width:' 83%',display:'flex' }} className='text-dark bg-light'>{sub_category_name}</p>
             {/* <input type="checkbox" defaultChecked={checkBox}  /> */}

             </div>
             
        
    );
};

export default SubCatg;