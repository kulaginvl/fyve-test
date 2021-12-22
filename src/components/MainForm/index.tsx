import React, { FC } from 'react';

import { ISO8601Date, MeetingPropertyRequestBody } from '../../types';

interface MainFormType {
  property: MeetingPropertyRequestBody;
  getData: (time: ISO8601Date[], additional: string) => void;
}

export const MainForm: FC<MainFormType> = ({ property, getData }) => {
  const [additionalInfo, setAdditionalInfo] = React.useState('');
  const [arrInfo, setArrInfo] = React.useState<string[]>([]);
  const [disable, setDisable] = React.useState(false);
  const [disableAlternate, setDisableAlternate] = React.useState(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setArrInfo([...arrInfo, e.currentTarget.value]);
    if (disable) {
      setDisableAlternate(true);
    }
    setDisable(true);
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/6 text-xl">
        <div>
          <h3 className="font-semibold mt-12">Let's meet in-person! </h3>
          <p>Schedule your First Meeting with us. </p>
        </div>
        <h3 className="font-semibold mt-12">What data and time work best for you?</h3>
        <div className="flex flex-row flex-wrap text-sm mt-6">
          <div className="mr-24">
            <p className="text-yellow-600 uppercase">YOUR PROPERTY MEETING LOCATION</p>
            <p className="w-9/12 mt-2.5">{property.address}</p>
          </div>
          <div>
            <p className="text-yellow-600 uppercase">Meeting date and time</p>
            <input
              className="mt-2.5 bg-inherit"
              disabled={disable}
              type="datetime-local"
              onChange={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
            />
            {disable ? (
              <div className="mt-2.5 text-xs">
                <p className="text-blue-600">Alternate Date & Time</p>
                <input
                  className="bg-inherit"
                  disabled={disableAlternate}
                  type="datetime-local"
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
                />
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="w-full mt-6">
            <p className="mt-2.5">Additional info and notes for this meeting</p>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.currentTarget.value)}
              className="placeholder:text-stone-300 w-full mt-2.5 border border-stone-300 rounded-md p-3.5 h-24 resize-none"
              placeholder="Other information"
            />
            <button
              onClick={() => getData(arrInfo, additionalInfo)}
              className="font-semibold bg-yellow-600 text-white w-full py-4 flex justify-center rounded-lg my-12">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
