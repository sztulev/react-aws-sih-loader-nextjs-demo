import React from 'react';

import { 
  AWSSIHImg as Img, 
  AWSSIHBackgroundImage as BckImg, 
  AWSSIHLazyLoadImg as LLImg, 
  AWSSIHLazyLoadBackgroundImage as LLBckImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function SIHImg() {

  return (
       <AWSSIHContext config={{
              width: 2048, 
              grayscale: false,
              normalize: false
            }}>
        <div>
          <Img src="static/img/large-photo-04.JPG" width={500} config={{resizeMode:'cover'}} />
        </div>
        </AWSSIHContext>
  )
}

function SIHLazyLoadImg() {

  return (

       <AWSSIHContext config={{
              bucket: 'react-aws-sih-loader-demo-2',
              width: 2048, 
              grayscale: false,
              normalize: true, 
              grayscalePreview: false
            }}>
        <div>
          <LLImg src="static/img/large-photo-05.JPG" width={500} config={{resizeMode:'cover'}} />
        </div>
        </AWSSIHContext>
  )
}

function SIHBckImg() {

  return (
        <AWSSIHContext config={{
              width: 2048, 
              grayscale: false,
              normalize: false, 
              grayscalePreview: false
            }}>

            <BckImg src="static/img/large-photo-02.JPG" 
                className='demo-classname'            
                config={{resizeMode:'cover', previewHeight: 25}}
                style={{width: '100%', height:'80vw', maxHeight:'600px', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
                <p>Hello</p>
            </BckImg>
        </AWSSIHContext>
  )
}


function SIHLazyLoadBckImg() {

  return (
        <AWSSIHContext config={{
              width: 2048, 
              grayscale: false,
              normalize: true, 
              previewGrayscale: true
            }}>

            <LLBckImg src="static/img/large-photo-03.JPG" 
                className='demo-classname'            
                config={{resizeMode:'cover', previewHeight: 25, transitionDuration:'.8s', trasitionTimingFunction:'ease-out' }}
                style={{
                  width: '100%', 
                  height:'80vw', 
                  maxHeight:'600px',
                  backgroundRepeat:'no-repeat', 
                  backgroundSize:'cover'}} 
              >
                <p>Hello</p>
            </LLBckImg>
        </AWSSIHContext>
  )
}


export default function Index() {
  return (
    <AWSSIHContext config={{
      endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
      bucket: 'react-aws-sih-loader-demo-1',
    }}>
      <div className="App">
        <header className="App-header">
          <p>
            Hello!
          </p>
          <SIHImg/> 

          <p>
            Hello2
          </p>
          <SIHLazyLoadImg/> 

          <p>
            Hello 3
          </p>
          <SIHBckImg/>        
          
          <p>
            Hello 4
          </p>
          <SIHLazyLoadBckImg/>        
     

        </header>
      </div>
    </AWSSIHContext>
  );
}
