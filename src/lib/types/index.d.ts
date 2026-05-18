interface GeneralApiResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

type PriceWithUSD = {
  inr: string;
  usd: string;
};

type BaseProject = {
  projectType: string;
  priceRange: PriceWithUSD;
  details: string;
};

type AddOnService = {
  service: string;
  pricing: PriceWithUSD;
  details: string;
};

type BundlePackage = {
  bundle: string;
  includes: string;
  discountedPrice: PriceWithUSD;
};

interface PricingCardItem {
  title: string
  price: string
  usd: string
  details: string
}


type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
};

interface ContactRequest{
  name: string;
  email: string;
  company: string;
  message: string;
}