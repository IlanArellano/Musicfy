import HomeActive from "./home/active";
import HomeInactive from "./home/inactive";
import SearchActive from "./search/active";
import SearchInactive from "./search/inactive";
import Spotify from "./spotify";

export const SVG = {
  HomeActive,
  HomeInactive,
  SearchActive,
  SearchInactive,
  Spotify,
};

export type SVGIcon = keyof typeof SVG;
