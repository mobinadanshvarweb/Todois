const Today = () => {
  return (
    <div className="w-full h-screen  p-3 ">
      <div className="w-[80%] mx-auto  h-full">
        <p className="font-bold text-2xl ">Today</p>
        <div className="flex flex-col justify-center h-[80%]  items-center">
          <img
            src="/img/today.png"
            alt="pic"
            className="w-56 h-52 object-cover"
          />
          <p className="font-[500]">In Progress ...</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
