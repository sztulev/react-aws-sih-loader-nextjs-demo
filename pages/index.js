import React from 'react';

import '../styles/app.sass';

import { 
  AWSSIHImg as Img, 
  AWSSIHBackgroundImage as BckImg, 
  AWSSIHLazyLoadImg as LLImg, 
  AWSSIHLazyLoadBackgroundImage as LLBckImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


import { SimpleImageDemo, SimpleImageCodeSample, SimpleImageDescription } from '../componnents/SingleImageDemo';
import { CropSimpleImageDemo, CropSimpleImageCodeSample, CropSimpleImageDescription } from '../componnents/CropSingleImageDemo';
import { 
  SingleImageLazyLoadDemo, 
  SingleImageLazyLoadCodeSample, 
  SingleImageLazyLoadDescription 
} from '../componnents/SingleImageLazyLoad.jsx';

import { 
  MultiImageDemo, 
  MultiImageCodeSample, 
  MultiImageDescription 
} from '../componnents/MultipleImageWithSingleConfig';


function CropImageDemo() {
  return (
       <AWSSIHContext config={{
              width: 2048, 
              grayscale: false,
              normalize: false
            }}>
          <Img src="static/img/large-photo-04.JPG" width={100} config={{width: 100, height: 200}}/>
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
      <section className="section">
        <div className="container">
          <h1 className="title">
            Demo site for <i>react-aws-sih-loader</i>
          </h1>
          <p className="subtitle">
           
          </p>

        </div>
      </section>
      
      <section>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <SimpleImageDescription/>
                    <SimpleImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <SimpleImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <CropSimpleImageDescription/>
                    <CropSimpleImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <CropSimpleImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <SingleImageLazyLoadDescription/>
                    <SingleImageLazyLoadCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <SingleImageLazyLoadDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <MultiImageDescription/>
                    <MultiImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <MultiImageDemo/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <div className="App">
        <header className="Header">
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
      </div> */}
    </AWSSIHContext>
  );
}
