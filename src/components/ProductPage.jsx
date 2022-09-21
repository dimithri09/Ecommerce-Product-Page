import React from "react";

function ProductPage(){
    return(
        <div className="product-container">
            <div className="even-columns">
                <div>
                    <img className="product-img" src="images/image-product-1.jpg" alt="product-img" />

                    <img className="product-thumbnail" src="images/image-product-1-thumbnail.jpg" alt="product-thumbnail" />
                    <img className="product-thumbnail" src="images/image-product-2-thumbnail.jpg" alt="product-thumbnail" />
                    <img className="product-thumbnail" src="images/image-product-3-thumbnail.jpg" alt="product-thumbnail" />
                    <img className="product-thumbnail" src="images/image-product-4-thumbnail.jpg" alt="product-thumbnail" />
                </div>
                <div>
                    <h6 className="primary-orange primary-fw-400"> SNEAKER COMPANY </h6>
                    <h2 className="neutral-vv-blue primary-fw-700">Fall Limited Edition Sneakers</h2>
                    <p className="neutral-grayish-blue primary-fs">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <p className="neutral-vv-blue price">$125.00</p>
                    <p className="primary-orange">50%</p>
                    <p className="neutral-light-gray-blue">$250.00</p>

                    <img src="images/icon-minus.svg"/>
                    <p>0</p>
                    <img src="images/icon-plus.svg"/>

                    <button className="primary-orange button"><img src="images/icon-cart.svg" /> Add to cart</button>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;