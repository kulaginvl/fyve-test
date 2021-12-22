import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { MeetingAppointmentRequestBody } from '../../types';

interface SuccessFormType {
  appointment: MeetingAppointmentRequestBody;
}

export const SuccessForm: FC<SuccessFormType> = ({ appointment }) => {
  const { time } = appointment;
  const navigate = useNavigate();
  if (!time) {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }

  return (
    <div className="flex justify-center">
      <div className="w-3/6 text-xl">
        <h3 className="font-semibold mt-12">Successfully booked!</h3>
        <div className="text-lg mt-8 flex justify-between">
          <div>
            <p>Meeting date and time</p>
          </div>
          <div className="text-sm flex flex-col align-end">
            {time &&
              time.map((t) => (
                <input
                  className="bg-inherit"
                  key={t}
                  value={t}
                  type="datetime-local"
                  disabled={true}
                />
              ))}
          </div>
        </div>
        <div className="text-lg mt-6 flex justify-between">
          <div>
            <p>Meeting location</p>
          </div>
          <div className="text-sm">
            <p>436 W Rivo Alto Dr, Miami Beach, FL 33139</p>
          </div>
        </div>
        <p className="mt-7">
          Our manager will contact you shortly. If you have further questions please feel free to
          call us or chat with us.
        </p>
      </div>
    </div>
  );
};
