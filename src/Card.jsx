import React from "react";

function Card() {
  return (
    <>
      <div className="event-card show">
        <div className="event-close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3007 5.71C17.9107 5.32 17.2807 5.32 16.8907 5.71L12.0007 10.59L7.1107 5.7C6.7207 5.31 6.0907 5.31 5.7007 5.7C5.3107 6.09 5.3107 6.72 5.7007 7.11L10.5907 12L5.7007 16.89C5.3107 17.28 5.3107 17.91 5.7007 18.3C6.0907 18.69 6.7207 18.69 7.1107 18.3L12.0007 13.41L16.8907 18.3C17.2807 18.69 17.9107 18.69 18.3007 18.3C18.6907 17.91 18.6907 17.28 18.3007 16.89L13.4107 12L18.3007 7.11C18.6807 6.73 18.6807 6.09 18.3007 5.71Z"
              fill="black"
            ></path>
          </svg>
        </div>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
        >
          <div className="event-img">
            <picture>
              <source
                srcSet=""
                type="image/webp"
              />
              <source
                srcSet=""
                type="image/jpeg"
              />
              <img
                className="w-100 h-auto d-block"
                src="https://drim.one/img/event-pic.jpg"
                width="300"
                height="167"
                alt="event"
              />
            </picture>
          </div>
          <div className="event-description">
            Card Element
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
