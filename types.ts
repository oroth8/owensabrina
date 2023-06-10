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

export type RsvpDataRes = {
  guest_name: string;
  significant_other: string | null;
  rsvp: Rsvp;
  status: number;
};

export interface RSVPGuestPageProps {
  rsvpData: RsvpDataRes | null;
}

export type RsvpResponse = {
  guest_name: string;
  significant_other: string | null;
  rsvp: Rsvp;
  status: number;
};

export type ApiError = {
  error: string;
  status: number;
};
