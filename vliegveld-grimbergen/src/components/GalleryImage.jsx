import "../styles/gallery.css";

function GalleryImage({ image, onClick, text }) {
  return (
    <div className="gallery-image" onClick={onClick}>
      <img loading="lazy" src={image} alt="gallery" />
      {/* <small>{text}</small> */}
    </div>
  );
}

export default GalleryImage;
