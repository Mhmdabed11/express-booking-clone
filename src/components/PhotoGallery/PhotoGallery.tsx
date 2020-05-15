import * as React from "react";
import { Container, Title, Address } from "./PhotoGallery.style";
import GalleryView from "../GalleryView/GalleryView";

type GalleryProps = {
  title?: string;
  rating?: number;
  address?: string;
  photos?: string[];
  bestPrice?: string;
  roomType?: string;
  dateRange?: string;
  numberOfAdults?: number;
  numberOfChildren?: number;
};

export default function PhotoGallery({
  title = "Test Hotel 1",
  rating = 5,
  address = "459 Michale Divide, 77474 Thompsonberg",
  photos = [],
  bestPrice = "$124",
  roomType = "Deluxe Room",
  dateRange = "05/22/2020 - 05/23/2020,",
  numberOfAdults = 1,
  numberOfChildren = 0
}: GalleryProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <Address>{address}</Address>
      <GalleryView photos={photos} />
    </Container>
  );
}
