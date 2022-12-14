export type SubscriptionDetails = {
  // contentLibraryTrialCancelled: boolean;
  // contentLibraryTrialEndTimestamp: string | null;
  // contentLibraryTrialPlanId: string | null;
  // contentLibraryTrialStatus: TrialStatus | null;
  subtitlesHoursPerMonth: number;
  // uuid: string;
};

export type UsageSummary = {
  // concurrentWebBroadcasts: number;
  enterpriseLicenses: number;
  // inUseEnterpriseLicenses: number;
  // inUseLanCloudSiteLicenses: number;
  // inUseNonProductionSiteLicenses: number;
  // inUseProfessionalLicenses: number;
  // inUseSoftwareEncoders: number;
  lanCloudSiteLicenses: number;
  nonProductionSiteLicenses: number;
  professionalLicenses: number;
  softwareEncoderLicenses: number;
  webBandwidth: number;
};

export type CurrentOrganization = {
  active: boolean;
  additionalConcurrentWebEvents: number;
  additionalVodBandwidthGb: number;
  additionalVodStorageGb: number;
  additionalWebDataGb: number;
  allowed16ChannelAudio: boolean;
  billingYearlyMultiSite: boolean;
  billingYearlyVod: boolean;
  billingYearlyWeb: boolean;
  defaultWebEventProfileType: string | null;
  managedBy: string | null;
  msa: boolean;
  multisitePlanId: string | null;
  multisitePlanName: string | null;
  multisiteStartDate: string | null;
  name: string;
  notes?: string;
  numConcurrentTranscodes: number;
  planName: string | null;
  regionId: string;
  schedulerVersion: 1 | 2;
  subscriptionDetails: SubscriptionDetails;
  usageSummary: UsageSummary;
  uuid: string;
  version: number;
  vodPlanId: string | null;
  vodPlanName: string | null;
  vodStartDate: string | null;
  webBandwidth: number;
  webMaxDeleteAfter: number | null;
  // webPlan?: null;
  webPlanId: string | null;
  webPlanName: string | null;
  webStartDate: string | null;
};
