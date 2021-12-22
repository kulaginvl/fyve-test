import { FC } from 'react';
import Image from '../../assets/img/bg.jpg';

interface TopContentType {
  name: string;
}

export const TopContent: FC<TopContentType> = ({ name }) => {
  return (
    <div className="relative w-full flex justify-center bg-main-color bg-main-image py-28">
      <img className="absolute bottom-0 right-0" src={Image} alt="sdas" />
      <div className="z-20 text-4xl font-bold w-3/6">
        <h2>{`Great! Thank you, ${name}.`}</h2>
        <h2>You have successfully added your property with Fyve.</h2>
      </div>
    </div>
  );
};
