import "./Gallery.css";
import TopHeader from "../../components/TopHeader";

const Gallery = () => {
  const images = [];

  for (let i = 1; i <= 8; i++){
    images.push(require("../../images/imageUrls")[`gallery${i}`]);
  }
  return (
    <div className='Gallery'>
      <TopHeader title={"Our Gallery"} image={require("../../images/imageUrls")[`header_bg_3`]}></TopHeader>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
    
  )
}

export default Gallery