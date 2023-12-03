import React from "react";
import "../Modal/Modal.css";
import { IoMdCloseCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";

const Modal = ({ movie, closeModal }) => {
  const URL_Image = "https://image.tmdb.org/t/p/w500/";
  const { title, overview, vote_average, vote_count, backdrop_path } = movie;
  return (
    <div className="modal-container">
      <div className="modal-item">
        <button className="close-modal" onClick={closeModal}>
          <IoMdCloseCircle />
        </button>
        <div className="modal-image">
          <img src={URL_Image + backdrop_path} alt={title} />
        </div>
        <div className="modal-detail">
          <h1>{title}</h1>
          <p>{overview}</p>
          <div className="modal-group">
            <div className="vote-average">
              <FaStar />
              {vote_average}
            </div>
            <div className="vote-count">
              <MdHowToVote /> {vote_count.toLocaleString("en-US")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
