export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}
