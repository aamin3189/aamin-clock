export interface IPexlesPhotoScr {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface IPexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: IPexlesPhotoScr;
  liked: boolean;
  alt: string;
}

export interface IPexelsResponse {
  page: number;
  per_page: number;
  total_results: number;
  photos: [IPexelsPhoto];
}
