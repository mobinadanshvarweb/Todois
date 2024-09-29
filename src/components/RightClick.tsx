const RightClick = () => {
  return (
    <div className="flex fixed top-0 left-0  w-full h-full">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[200px] p-3 rounded bg-white absolute top-[0] border right-0"
      >
        RightClick
      </div>
    </div>
  );
};

export default RightClick;
