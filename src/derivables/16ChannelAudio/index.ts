import { derived } from "svelte/store";
import { organization } from "../../store";

export const is16ChannelAudio = derived(
  organization,
  ($organization) => $organization.allowed16ChannelAudio
);
