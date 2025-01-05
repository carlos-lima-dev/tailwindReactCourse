import Heading from "../Heading/Heading";

export const Flexbox = () => {
  return (
    <>
      <Heading text="Flexbox" />
      <div className="flex gap-4 flex-wrap justify-between items-center  bg-green-400 h-60 p-4">
        <p className="w-24 h-24 bg-slate-500">p1</p>
        <p className="w-24 h-24 bg-slate-500">p2</p>
        <p className="w-24 h-24 bg-slate-500">p3</p>
      </div>
      <div className="flex gap-4 justify-center items-center bg-green-400 h-60 p-4">
        <p className="w-24 h-24 bg-slate-500">p1</p>
        <p className="flex-grow flex-shrink-0 w-24 h-24 bg-slate-500">p2</p>
        <p className="w-24 h-24 bg-slate-500">p3</p>
      </div>
    </>
  );
};
