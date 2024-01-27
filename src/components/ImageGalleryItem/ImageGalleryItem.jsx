export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
