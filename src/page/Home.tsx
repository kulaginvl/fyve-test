import { FC } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as hooks from '../hooks';
import { TopContent } from '../components/TopContent';
import { MainForm } from '../components/MainForm';
import { SuccessForm } from '../components/SuccessForm';
import { ISO8601Date } from '../types';

export const Home: FC = () => {
  const fetchData = hooks.useFetchData();
  const { mutateAsync: updData } = hooks.useCreateNewData();
  const navigate = useNavigate();

  if (fetchData.isLoading) {
    return <h2>Load....</h2>;
  }

  if (fetchData.isError) {
    return <h1>Error</h1>;
  }

  const handleAddData = (time: ISO8601Date[], additional: string) => {
    try {
      const newDataObject = { time: time, additionalNotes: additional };
      updData(newDataObject);
      setTimeout(() => {
        navigate('/success');
      }, 0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopContent name={fetchData.data.user.firstName} />
      <Routes>
        <Route
          path="/"
          element={
            <MainForm
              property={fetchData.data.property}
              getData={(time, additional) => {
                handleAddData(time, additional);
              }}
            />
          }
        />
        <Route path="/success" element={<SuccessForm appointment={fetchData.data.appointment} />} />
      </Routes>
    </>
  );
};
