import { useMutation, useQueryClient } from 'react-query';
import * as api from '../api/dataApi';
import { MeetingAppointmentRequestBody } from '../types';

export const useCreateNewData = (): any => {
  const queryClient = useQueryClient();

  const mutation = useMutation(api.createData, {
    async onMutate(newData: MeetingAppointmentRequestBody) {
      await queryClient.cancelQueries('meeting');

      const prevData = queryClient.getQueryData('todos');

      queryClient.setQueryData('meeting', (old: any) => {
        let newInfo = { ...old };
        newInfo.appointment = newData;
        return newInfo;
      });

      return { prevData };
    },
  });
  return mutation;
};
