import React from 'react';

import { 
    AWSSIHLazyLoadImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function SingleImageLazyLoadDemo() {
    return (
        <AWSSIHLazyLoadImg src="static/img/large-photo-03.JPG" width={400} config={{width:2048}}/>
    )
}

function SingleImageLazyLoadCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHLazyLoadImg src="large-photo-03.JPG" 
                    width={400} 
                    config={{width:2048}} />`}
        </pre>
        </div>
    )
}

function SingleImageLazyLoadDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Lazy loading a single image</h2>
             <p >
                 Use 'AWSSIHLazyLoadImg' component to lazy load images of larger size. It wraps the image in a 'div' element 
                 with a background of a smaller image while the larger image is loading.  Refresh the page to see the image transition.
             </p>
         </div>
    )
}


export { SingleImageLazyLoadDemo, SingleImageLazyLoadCodeSample, SingleImageLazyLoadDescription };