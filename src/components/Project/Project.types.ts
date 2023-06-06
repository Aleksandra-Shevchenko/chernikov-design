export type ImageItem = {
  id: string;
  blockNumber: string;
  ordinal: number;
  imageUrl: string;
};

export type Images = { [key: string]: ImageItem[] };
