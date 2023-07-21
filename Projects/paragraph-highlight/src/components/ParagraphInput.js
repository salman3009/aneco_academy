import React from 'react';

export const ParagraphInput = ({ pRef }) => {
    return (
        <>
            Enter paragraph here
            <div id="paragraph-input"
                contentEditable
                // onChange={worker}
                dangerouslySetInnerHTML={{ __html: pRef.current ? pRef.current.innerHTML : 'Enter Text Here' }}
                ref={pRef}
            >
            </div>
        </>
    )
}


// const App = () => {
//     const data = 'lorem <b>ipsum</b>';
//     return (
//       <div
//         dangerouslySetInnerHTML={{__html: data}}
//       />
//     );
//   }
  
//   export default App;