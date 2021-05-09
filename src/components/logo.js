import * as React from "react";

function SvgLogo(props) {
  return (
     <div>
      <img src='/logo.svg' className="img"></img>
      <style jsx>
        {
          `
          {
             .img{
               width:20rem;
             }
          }`
        }
      </style>
      </div>
  );
}

export default SvgLogo;
