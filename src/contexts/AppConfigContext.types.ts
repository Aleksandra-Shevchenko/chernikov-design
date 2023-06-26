type ServiceType = {
  title: string;
  list: string[];
};

type PriceType = {
  title: string;
  list: string[];
  price: string;
};

type ProjectType = {
  name: string;
  id: string;
  heroImage: string;
  num: string;
  year?: string;
  location?: string;
  description?: string;
};

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
  services: ServiceType[];
  prices: PriceType[];
  projects: ProjectType[];
}
