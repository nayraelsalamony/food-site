import React from 'react'
export default function Profile() {
    return (
        <>
            <section classNameName="vh-100" style= {{backgroundColor:" #f4f5f7"}} >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{borderRadius: ".5rem"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
                                        <img
                                            src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffoodsided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1331214362-1.jpeg"
                                            alt="Avatar"
                                            className="img-fluid my-5"
                                            style={{width: "80px" ,borderRadius:"50%"}}></img>
                                        <h3>macdonals</h3>
                                        <p>big testy</p>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4"/>
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>Email</h6>
                                                        <p className="text-muted">macdonals@example.com</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Phone</h6>
                                                        <p className="text-muted">123 456 789</p>
                                                    </div>
                                                </div>
                                                <h6>pranches</h6>
                                                <hr className="mt-0 mb-4"/>
                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>cairo</h6>
                                                            <p className="text-muted">october</p>
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <h6>Most Viewed</h6>
                                                            <p className="text-muted">masr el gdeda</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-start">
                                                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
