// import React ,{useRef,useState,useEffect} from 'react';
// import '../styles/App.css';

// //complete the following using forward refs concept 

// const InputField=()=>{
//     return(
//     <div>
//       <input id="input" type="text"  ref={ref}/>
//     </div>
//     )
//     }
// export default InputField;

import React from 'react';

const InputField = React.forwardRef((props, ref) => {
  return (
    <div>
      <input id="input" type="text" ref={ref} />
    </div>
  );
});

export default InputField;
