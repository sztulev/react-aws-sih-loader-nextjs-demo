import React from 'react';

import { 
  AWSSIHImg as Img, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function CropSimpleImageDemo() {
    return (<Img src="static/img/large-photo-04.JPG" config={{ width: 200, height: 300 }}/>)
}

function CropSimpleImageCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHImg  src="large-photo-04.JPG" 
            config={{ 
                endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
                bucket: 'react-aws-sih-loader-demo-1',
                width: 200, 
                height: 300 }} />`}
        </pre>
        </div>
    )
}

function CropSimpleImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Crop single image</h2>
             <p>
                Provide both <code>{'width'}</code> and <code>{'height'}</code> to crop the image to a given size.
             </p>
         </div>
    )
}


export { CropSimpleImageDemo, CropSimpleImageCodeSample, CropSimpleImageDescription };