import "./Gallery.css";
import TopHeader from "../../components/TopHeader";
import headerImage from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const images = [];
  const galleryLength = 15;

  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <div className='Gallery'>
      <TopHeader title={"Our Gallery"} image={headerImage}></TopHeader>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
    
  )
}

export default Gallery