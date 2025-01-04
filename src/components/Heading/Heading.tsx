interface Headingprops {
  text: string;
}

const Heading = ({text}: Headingprops) => {
  return <h1 className="text-center pb-5 underline text-green-700">{text}</h1>;
};

export default Heading;
