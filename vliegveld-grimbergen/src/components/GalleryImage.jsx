import "../styles/gallery.css";

function GalleryImage({ image, onClick }) {
  return (
    <div className="gallery-image" onClick={onClick}>
      <img loading="lazy" src={image} alt="gallery" />
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
        modi
      </small>
    </div>
  );
}

export default GalleryImage;
