type ServicesType = {
  title: string;
  list: string[];
}[];

type PricesType = {
  title: string;
  list: string[];
  price: string;
}[];

type ProjectsType = {
  name: string;
  description?: string;
  id: string;
  heroImage: string;
}[];

export interface AppConfigContextType {
  logo: string;
  phoneNumber: string;
  email: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
  behance: string;
  youtube: string;
  vk: string;
  aboutMe: string;
  description: string;
  services: ServicesType;
  prices: PricesType;
  projects: ProjectsType;
}
