const RightBar = () => {
  return (
    <div className="flex-y-1 bg-secondary">
      <div className="bg-black h-14 flex flex-col justify-center">
        <p className="text-white text-center font-bold text-2xl">Bet Slip</p>
      </div>
      <div className="mt-6 bg-mywhite px-4">
        <div className="flex justify-between items-center px-2 py-1">
          <p className="text-[18px]">Los Angeles Lakers</p>
          <p className="border border-primary p-2">Odds</p>
        </div>
        <p className="pl-2 text-gray-400 text-[14px]">MONEYLINE</p>
        <p className="pl-2 text-[12px]">Los Angeles Lakers @ Brooklyn Nets</p>
        <div className="flex gap-6 items-center justify-between px-4 py-2">
          <div className="border border-primary p-1">
            <p className="text-[12px]">WAGER</p>
            <div className="flex items-center">
              <p className="text-[12px]">$</p>
              <input
                type="text"
                className="text-[12px] border-none w-[80px] pl-2 bg-mywhite"
              />
            </div>
          </div>
          <div className="border border-primary p-1">
            <p className="text-[12px]">TO WIN</p>
            <div className="flex items-center">
              <p className="text-[12px]">$</p>
              <input
                type="text"
                className="border-none text-[12px] w-[80px] pl-2 bg-mywhite"
              />
            </div>
          </div>
        </div>
        <div className="w-full pb-4 flex items-center justify-center">
          <button className="bg-primary mt-4 text-white font-bold text-xl w-[150px] px-8">
            Place $X to win $Y
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
