
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
  const {
      _id,
      photo_url,
      name,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      quantity,
      description,
    } = toy || {};
    return (
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo_url}  alt="Shoes" className="rounded-xl w-72 h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Category: {sub_category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <span>
            <Rating style={{ maxWidth: 200 }} value={rating} readOnly />
          </span>
          <div className="card-actions">
            <Link to={`view-details/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Toy;