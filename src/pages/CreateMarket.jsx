import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { ReactComponent as Arrow } from "../components/arrow.svg";
import { ReactComponent as ArrowDown } from "../components/image 8.svg";

const Box = ({ text, active, click }) => {
  return (
    <button
      onClick={click}
      className={`border-primary border-2 flex items-center justify-center ${
        active ? "bg-primary" : "bg-white"
      } w-[200px] h-[100px]`}
    >
      <p className={`${active ? "text-white font-bold" : ""}`}>{text}</p>
    </button>
  );
};

const SelectTopic = ({ setWidget }) => {
  return (
    <>
      <Banner text="Select a Topic" />
      <div className="flex">
        <div className="py-12 px-4 flex-wrap gap-3 flex items-center justify-center">
          <Box click={() => {}} text="NFL" active />
          <Box click={() => setWidget(2)} text="Weather" />
          <Box click={() => {}} text="Oscars" />
          <Box click={() => {}} text="Natural Disasters" />
          <Box click={() => {}} text="Movies" />
          <Box click={() => {}} text="Politics" />
          <Box click={() => {}} text="NBA" />
          <Box click={() => {}} text="NHL" />
          <Box click={() => {}} text="Emmys" />
        </div>
        <div className="flex items-center justify-center px-2">
          <button className="bg-primary rounded-full w-10 h-10">
            <Arrow />
          </button>
        </div>
      </div>
      <div className="flex mt-8 mb-10 items-center justify-center">
        <span className="bg-primary flex-1 h-1"></span>
        <p className="text-xl mx-2 font-bold text-primary">OR</p>
        <span className="bg-primary flex-1 py-[2px]"></span>
      </div>
      <Banner text="Create a Custom Market" />
      <div className="mb-16 px-8">
        <p className="font-bold my-5 text-xl text-primary">
          Markets created here will be reviewed
        </p>
        <p className="font-bold my-5 text-xl text-primary">Market</p>
        <input
          type="text"
          placeholder="Text Entry"
          className="bg-gray-300 text-black py-1 px-2 w-full border-2 border-primary"
        />
        <p className="font-bold my-5 text-xl text-primary">
          How would you like the market to be settled
        </p>
        <input
          type="text"
          placeholder="Text Entry"
          className="bg-gray-300 text-black py-1 px-2 w-full border-2 border-primary"
        />
      </div>
    </>
  );
};

const Label = ({ text }) => {
  return <p className="font-bold text-2xl text-primary">{text}</p>;
};

const Select = ({ text }) => {
  return (
    <div className="bg-white border-2 py-1 px-4 rounded-full mt-2 border-primary w-full">
      <div className="flex items-center justify-between">
        <p>{text}</p>
        <ArrowDown />
      </div>
    </div>
  );
};

const SelectEvent = ({ setWidget }) => {
  return (
    <>
      <Banner text="Select Event - Weather" />
      <div className="flex gap-6 flex-col px-4 py-4">
        <div className="flex flex-col">
          <Label text="Select City" />
          <Select text={"Select your answer"} />
        </div>
        <div className="flex flex-col">
          <Label text="Select Attribute To Bet On" />
          <Select text={"Select your answer"} />
        </div>
        <div>
          <Label text="Enter Value" />
          <input
            type="text"
            className="border-2 w-full py-2 px-4 border-primary "
            placeholder="Type entry"
          />
        </div>
        <div className="flex flex-1 items-end justify-end">
          <button
            onClick={() => setWidget(3)}
            className="rounded-full bg-primary px-[13px] py-1 font-bold text-white text-3xl"
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

const Button = ({ text, active, click }) => {
  return (
    <div
      className={`w-[150px] text-center border-primary border-2 ${
        active ? "bg-primary" : "bg-white"
      }`}
    >
      <p className={`${active ? "text-white" : "text-primary"}`}>{text}</p>
    </div>
  );
};

const ConfirmSelection = () => {
  return (
    <>
      <Banner text="Select Event - Weather" />
      <p className="text-primary p-4 text-xl">Confirmation:</p>
      <div className="flex">
        <div className="bg-white px-4 py-2 flex-1 border-gray-200 border-r-2 h-48">
          <p>Event : Weather</p>
          <p className="mt-5">Database : Weather</p>
        </div>
        <div className="bg-white px-4 py-2 flex-1 h-48">
          <p>City : Princeton</p>
          <p className="mt-5">Attribute(s) : TBU</p>
        </div>
      </div>
      <div className="w-full mt-4 flex items-center justify-center">
        <button className="bg-primary py-2 text-xl px-2 text-white w-48 text-center">
          Confirm Selection
        </button>
      </div>
    </>
  );
};

const CreateMarket = ({ setDisplay }) => {
  useEffect(() => {
    setDisplay();
  }, []);
  const [widget, setWidget] = useState(1);
  return (
    <div className="flex-1">
      <Banner text="Create a Market" />
      <div className="flex items-center justify-center py-16 px-8">
        <Button text="Select a topic" active={widget === 1} />
        <span className="bg-primary px-1 py-[1px] flex-1"></span>
        <Button text="Select Attributes" active={widget === 2} />
        <span className="bg-primary px-1 py-[1px] flex-1"></span>
        <Button text="Confirm Selection" active={widget === 3} />
      </div>
      {widget === 1 && <SelectTopic setWidget={setWidget} />}
      {widget === 2 && <SelectEvent setWidget={setWidget} />}
      {widget === 3 && <ConfirmSelection />}
    </div>
  );
};
export default CreateMarket;
