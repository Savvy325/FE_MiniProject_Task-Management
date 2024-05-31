import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mx-5 my-5"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../src/images/colored_cones.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../src/images/leaf.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../src/images/candles.jpg"
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev btn btn-primary"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn btn-primary"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="row the-goods p-5 text-center">
        <h2 className="mb-5">Our Candles!</h2>
        <h6 className="mb-5">
          Transform your home into a sanctuary of tranquility with our
          handcrafted candles. Crafted with premium ingredients and infused with
          captivating scents, each flicker of our candles enhances ambiance and
          invites relaxation. Elevate your senses and indulge in moments of
          serenity with our irresistible candle collection.
        </h6>
        <div className="card col shirt-4-sale d-flex flex-column justify-content-between ">
          <div>
            <img
              className="img-fluid"
              src="../src/images/IMG_8431.png"
              alt="candle image"
            />
          </div>
          <h6>Vanilla Scented</h6>
          <p>Try out this wonderfull smelling candle.</p>
        </div>
        <div className="card col shirt-4-sale d-flex flex-column justify-content-between mx-3">
          <div>
            <img
              className="img-fluid"
              src="../src/images/IMG_8432.png"
              alt="candle image 3"
            />
          </div>
          <h6>Down by the sea</h6>
          <p>This candle will make you feel like you're at the beach!</p>
        </div>
        <div className="card col shirt-4-sale d-flex flex-column justify-content-between">
          <div>
            <img
              className="img-fluid"
              src="../src/images/IMG_8433.png"
              alt="candle image 2"
            />
          </div>
          <h6 className="mb-3 mt-4">Sculpture Candles</h6>
          <p className="mb-5">
            Bring David home with you with our sculpture candles!
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;