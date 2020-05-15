import * as React from "react";
import { Gallery } from "./GalleryView.style";

type GalleryProps = {
  photos: (string | null)[];
};

export default function GalleryView({ photos }: GalleryProps): JSX.Element {
  return (
    <div>
      <Gallery />
    </div>
  );
}
