const HeroSection = ({ srcImage = '/ballina.png', altText = 'Ballina' }) => {
  return (
    <div className="w-full">
      <img
        className="h-full shadow-xl object-contain rounded-xl"
        src={srcImage}
        alt={altText}
      />
    </div>
  );
};

export default HeroSection;
