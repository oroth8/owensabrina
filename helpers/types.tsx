export type Rsvp = {
  id: number;
  guest_id: number;
  attending: boolean | null;
  transportation: string | null;
  dinner: string | null;
  allergies: string | null;
  dietary_restrictions: string | null;
  created_at: string;
  updated_at: string;
  so_attending: boolean | null;
  so_transportation: string | null;
  so_dinner: string | null;
  so_dietary_restrictions: string | null;
};

export type RsvpApiResponse = {
  status: number;
  guest_name: string | null;
  significant_other: string | null;
  rsvp: Rsvp | null;
  error: string | null;
};

export interface RSVPGuestPageProps {
  rsvpData: RsvpApiResponse | null;
}

export type ApiError = {
  error: string;
  status: number;
};
