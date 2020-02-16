import React from 'react';

import { 
  AWSSIHImg as Img, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function CropSimpleImageDemo() {
    return (<Img src="static/img/large-photo-04.JPG" config={{ width: 200, height: 200 }}/>)
}

function CropSimpleImageCodeSample() {
    return (
        <div>
        <pre>
            {
`<Img  src="large-photo-04.JPG" 
      config={{ width: 200, height: 200 }} />`}
        </pre>
        </div>
    )
}

function CropSimpleImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Crop single image</h2>
             <p>
                If both 'width' and 'height' are provided, it resizes and crops the image to the given size.
             </p>
         </div>
    )
}


export { CropSimpleImageDemo, CropSimpleImageCodeSample, CropSimpleImageDescription };