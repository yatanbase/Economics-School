import React, {useEffect} from 'react'
import Image1 from '../asset/data_workshop/workshop (1).jpg'
import Image2 from '../asset/data_workshop/workshop (2).jpg'
import Image3 from '../asset/data_workshop/workshop (3).jpg'
import Image4 from '../asset/data_workshop/workshop (4).jpg'


function Page21() {

  useEffect(() => {

    // scrolls to the top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div style={{ margin: '50px' }}>
     
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Workshop on “Data Analysis Using Software Packages for Social Scientists”</h2>
            </div>
          </div>
          <div className="row justify-content-around">
            {/* Adjust image size and display */}
            <div className="col-md-4 text-center mb-3">
              <img src={Image1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' , height: '210px'}} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image2} alt="Staff 2" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image3} alt="Staff 3" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image4} alt="Staff 4" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' , height: '210px'}} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page21