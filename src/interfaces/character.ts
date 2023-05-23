interface Url {
  type?: string;
  url?: string;
}

export interface Image {
  path?: string;
  extension?: string;
}

interface ComicList {
  available?: number;
  returned?: number;
  collectionURI?: number;
  items?: ComicSummary[];
}

interface ComicSummary {
  resourceURI?: string;
  name?: string;
}

interface StoryList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: StorySummary[];
}

interface StorySummary {
  resourceURI?: string;
  name?: string;
  type?: string;
}

interface EventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
}

interface EventSummary {
  resourceURI?: string;
  name?: string;
}

interface SeriesList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: SeriesSummary[];
}

interface SeriesSummary {
  resourceURI?: string;
  name?: string;
}

interface CharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export interface CharacterDataWrapper {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: CharacterDataContainer;
  etag?: string;
}
