import { RsvpApiResponse } from "./types";

const apiError = (error: string, status: number): RsvpApiResponse => {
  return {
    status,
    error,
    guest_name: null,
    significant_other: null,
    rsvp: null,
  };
};
export default apiError;
