export type ISO8601Date = string;

export type MeetingAppointmentRequestBody = {
  time: null | ISO8601Date[]
  additionalNotes?: null | string
}
export type MeetingPropertyRequestBody = {
  address: string
}

export type MyDataType = {
  id: number
  appointment: MeetingAppointmentRequestBody
  user: any
  property: MeetingPropertyRequestBody
}

export interface MainType {
  status: string;
  data: MyDataType;
}


