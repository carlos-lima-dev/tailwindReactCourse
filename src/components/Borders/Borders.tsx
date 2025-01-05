import Heading from "../Heading/Heading";

const Borders = () => {
  return (
    <>
      <Heading text="Borders" />
      <div className="p-5 border-4 border-red-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ipsa
        omnis quo! Voluptate nihil accusamus, non a amet ipsa. Esse dicta veniam
        deserunt, error provident ipsum fuga dolores repellat?
      </div>
      <div className="p-5 border-4 border-blue-400 rounded-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ipsa
        omnis quo! Voluptate nihil accusamus, non a amet ipsa. Esse dicta veniam
        deserunt, error provident ipsum fuga dolores repellat? <br />
        <button className="bg-yellow-400 p-4 rounded-full text-white focus:ring-2 ring-red-900">
          click
        </button>
      </div>
    </>
  );
};
export default Borders;
