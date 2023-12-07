import { Episode } from "./episode";
import { Info } from "./info";
export interface EpisodesResponse {
  info: Info;
  results: Episode[];
}
