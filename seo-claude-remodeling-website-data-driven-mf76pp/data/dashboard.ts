import dashboardData from "./dashboardData.json";

export type CampaignMetrics = {
  id: string;
  name: string;
  status: string;
  cost: number;
  conversions: number;
  conversionsValue: number;
  impressions: number;
  clicks: number;
  roas: number | null;
};

export type Recommendation = {
  resourceName: string;
  type: string;
  campaign: string;
  dollarsRecoverable: number | null;
};

export type DashboardData = {
  generatedAt: string;
  customerId: string;
  campaigns: CampaignMetrics[];
  recommendations: Recommendation[];
};

export const dashboard = dashboardData as DashboardData;
