const Profile = ({ name }: { name: string }) => {
  return (
    <div className="w-full p-3">
      <h2>{name}</h2>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt=""
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default Profile;
