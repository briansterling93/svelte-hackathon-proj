import { derived } from "svelte/store";
import { organization } from "../../store";

export const isStatusActive = derived(
  organization,
  ($organization) => $organization.active === true
);
