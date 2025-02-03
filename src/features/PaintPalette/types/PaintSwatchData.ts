export interface PaintSwatchData {
  id: number;
  color: string;
  brand: string;
  name: string;
  spare: { hasSpare: boolean; location: string };
  locationPainted: string[];
}
