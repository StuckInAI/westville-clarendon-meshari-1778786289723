export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
};

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  source: string;
};

export type ReservationForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
};
