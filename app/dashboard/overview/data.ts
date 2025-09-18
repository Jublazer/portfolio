// data.ts - Dummy sales data for services

export type ServiceSale = {
  id: number;
  customerId: string;
  customerName: string;
  email: string;
  country: string;
  service: string;
  amountUSD: number;
  purchaseDate: string;
  paymentMethod: string;
  durationWeeks: number;
  level: string;
};

export const salesData: ServiceSale[] = [
  {
    id: 1,
    customerId: 'CUST001',
    customerName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    country: 'USA',
    service: 'Web Design',
    amountUSD: 1200,
    purchaseDate: '2025-01-15',
    paymentMethod: 'Credit Card',
    durationWeeks: 4,
    level: 'Premium',
  },
  {
    id: 2,
    customerId: 'CUST002',
    customerName: 'Bob Smith',
    email: 'bob.smith@example.com',
    country: 'Canada',
    service: 'SEO Optimization',
    amountUSD: 800,
    purchaseDate: '2025-02-10',
    paymentMethod: 'PayPal',
    durationWeeks: 2,
    level: 'Standard',
  },
  {
    id: 3,
    customerId: 'CUST003',
    customerName: 'Carlos Martinez',
    email: 'carlos.martinez@example.com',
    country: 'Mexico',
    service: 'App Development',
    amountUSD: 2500,
    purchaseDate: '2025-03-05',
    paymentMethod: 'Bank Transfer',
    durationWeeks: 8,
    level: 'Enterprise',
  },
  {
    id: 4,
    customerId: 'CUST004',
    customerName: 'Diana Lee',
    email: 'diana.lee@example.com',
    country: 'UK',
    service: 'Web Design',
    amountUSD: 1100,
    purchaseDate: '2025-03-20',
    paymentMethod: 'Credit Card',
    durationWeeks: 4,
    level: 'Standard',
  },
  {
    id: 5,
    customerId: 'CUST005',
    customerName: 'Ethan Brown',
    email: 'ethan.brown@example.com',
    country: 'Australia',
    service: 'SEO Optimization',
    amountUSD: 950,
    purchaseDate: '2025-04-02',
    paymentMethod: 'PayPal',
    durationWeeks: 3,
    level: 'Premium',
  },
  {
    id: 6,
    customerId: 'CUST006',
    customerName: 'Fatima Khan',
    email: 'fatima.khan@example.com',
    country: 'UAE',
    service: 'App Development',
    amountUSD: 2700,
    purchaseDate: '2025-04-18',
    paymentMethod: 'Credit Card',
    durationWeeks: 10,
    level: 'Enterprise',
  },
  {
    id: 7,
    customerId: 'CUST007',
    customerName: 'George Wang',
    email: 'george.wang@example.com',
    country: 'China',
    service: 'Web Design',
    amountUSD: 1300,
    purchaseDate: '2025-05-01',
    paymentMethod: 'Bank Transfer',
    durationWeeks: 5,
    level: 'Premium',
  },
  {
    id: 8,
    customerId: 'CUST008',
    customerName: 'Hannah Müller',
    email: 'hannah.muller@example.com',
    country: 'Germany',
    service: 'SEO Optimization',
    amountUSD: 700,
    purchaseDate: '2025-05-15',
    paymentMethod: 'Credit Card',
    durationWeeks: 2,
    level: 'Standard',
  },
  {
    id: 9,
    customerId: 'CUST009',
    customerName: 'Ivan Petrov',
    email: 'ivan.petrov@example.com',
    country: 'Russia',
    service: 'App Development',
    amountUSD: 2600,
    purchaseDate: '2025-06-10',
    paymentMethod: 'PayPal',
    durationWeeks: 9,
    level: 'Enterprise',
  },
  {
    id: 10,
    customerId: 'CUST010',
    customerName: 'Julia Rossi',
    email: 'julia.rossi@example.com',
    country: 'Italy',
    service: 'Web Design',
    amountUSD: 1250,
    purchaseDate: '2025-06-25',
    paymentMethod: 'Credit Card',
    durationWeeks: 4,
    level: 'Premium',
  }
];
