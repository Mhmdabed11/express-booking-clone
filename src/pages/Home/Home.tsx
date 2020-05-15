import * as React from "react";
import Header from "../../components/Header/Header";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import { Container } from "./Home.style";

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <PhotoGallery />
      </Container>
    </>
  );
}
