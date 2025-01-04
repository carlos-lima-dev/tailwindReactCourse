import {ReactNode} from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className="p-6 bg-gray-300 border-b-4 border-orange-500">
      {children}
    </div>
  );
};

export default Container;
