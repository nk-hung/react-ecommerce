export type ProductProps = {
  title?: string;
  description?: string;
  _id: string;
  price: number;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
  category?: string;
};

export type CountType = {
  count: number;
};

export type UserType = {
  email?: string;
  username: string;
  password: string;
  confirmPassword?: string;
};
