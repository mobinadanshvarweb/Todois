import ProfileCard from "./ProfileCard";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col">
        <ProfileCard name="Dina" />
        <ProfileCard name="Nina" />
        <ProfileCard name="Sina" />
      </div>
    </>
  );
};

export default Gallery;
