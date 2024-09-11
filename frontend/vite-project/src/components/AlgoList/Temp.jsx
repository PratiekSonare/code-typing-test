import React, {useEffect} from 'react';
// import Prism from "prismjs";
// import "prismjs/themes/prism.css"; // Default theme
// import "prismjs/components/prism-core"; // Import Prism core before any language
// import "prismjs/components/prism-cpp"; // This imports the C++ language support

const Temp = () => {

    const code = 
  `
  int age = 25;
  double pi = 3.14159;
  char initial = 'A';
  boolean isStudent = true;

  for(int i = 0; i<n; i++){
      if(i==0){
          return 1;
      } else if (i==1){
          return 1; 
      }
      
      return f(n-1) + f(n-2);
  }
  `;

    // useEffect(() => {
    //     Prism.highlightAll(); // This will highlight the code
    //   }, [code]);


  return (
    <div className='block text-wrap bg-black rounded-xl p-5 h-auto w-96 invisible-scrollbar overflow-auto'>
      <pre>
        <code className=''>
            {code}
        </code>
      </pre>
    </div>
  );
};

export default Temp;



