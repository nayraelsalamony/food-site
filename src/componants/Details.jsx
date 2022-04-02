import React from 'react'

export default function Details(props) {
    let {body,title} = props;
    return(
        <>
          <div className="card" style={{backgroundColor:'#f8f8f8', border:'none' , margin:'80px 0'}}>
              <div className="card-body text-center d-flex flex-wrap justify-content-around p-3" style={{width:'600px', margin:'auto' , border:'1px solid #cdcdcd' , borderRadius:'10px' , boxShadow:'1px 1px #1b000061' }}>
                <img src="https://image.shutterstock.com/image-photo/mcdonalds-logo-has-branches-around-260nw-1629323827.jpg" alt="avatar" class="rounded-circle img-fluid" style={{width: '110px'}} />
                <h5 className="my-3 d-inline-block align-self-center fs-2">mac</h5>
                <h3 className="my-5 col-12" style={{color:'#004785'}}>{title}</h3>
                <p className="text-muted mb-1 fs-5" style={{textAlign:'left'}}>{body}</p>
              </div>
            </div>
     
          <div></div> 
      
      
        </>
    
      
    )
}
