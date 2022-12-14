import { writable } from "svelte/store";
import type { CurrentOrganization } from "../../types";

// export const mockedOrg: CurrentOrganization = {
//   active: true,
//   additionalConcurrentWebEvents: 2,
//   additionalVodBandwidthGb: 0,
//   additionalVodStorageGb: 0,
//   additionalWebDataGb: 3,
//   allowed16ChannelAudio: true,
//   billingYearlyMultiSite: true,
//   billingYearlyVod: true,
//   billingYearlyWeb: false,
//   defaultWebEventProfileType: null,
//   managedBy: null,
//   msa: false,
//   multisitePlanId: "232323212l",
//   multisitePlanName: "Legacy",
//   multisiteStartDate: "2022-09-22T05:09:00Z",
//   name: "Resi Studio Test",
//   notes: null,
//   numConcurrentTranscodes: 2,
//   planName: "Enterprise",
//   regionId: "",
//   schedulerVersion: 2,
//   subscriptionDetails: { subtitlesHoursPerMonth: 12 },
//   usageSummary: {
//     enterpriseLicenses: 2,
//     lanCloudSiteLicenses: 1,
//     nonProductionSiteLicenses: 1,
//     professionalLicenses: 1,
//     softwareEncoderLicenses: 2,
//     webBandwidth: 3,
//   },
//   uuid: "323243423",
//   version: 2,
//   vodPlanId: "434323",
//   vodPlanName: "Starter",
//   vodStartDate: "2022-09-22T05:09:00Z",
//   webBandwidth: 2,
//   webMaxDeleteAfter: 12,
//   // webPlan: {},
//   webPlanId: "3212",
//   webPlanName: "Enterprise",
//   webStartDate: "2022-07-29T05:07:00Z",
// };

export const organization = writable<CurrentOrganization | null>(null);
export const accessToken = writable<string>("");
export const orgUUID = writable<string>("");
