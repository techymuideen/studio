const Rainbow = (props) => {
  return (
    <div onClick={props.onClick} className={`flex h-[100%] w-[100%]`}>
      <div className="h-[100%] flex-1 bg-black dark:bg-white"></div>
      <div className="h-[100%] flex-1 bg-[#FF0000]"></div>
      <div className="h-[100%] flex-1 bg-[#FFB300]"></div>
      <div className="h-[100%] flex-1 bg-[#4CAF50]"></div>
      <div className="h-[100%] flex-1 bg-[#2196F3]"></div>
      <div className="h-[100%] flex-1 bg-pink"></div>
      <div className="h-[100%] flex-1 bg-[#9C27B0]"></div>
    </div>
  );
};

export default Rainbow;
