import React from "react";
import Container from "./Container";
import Title from "./Title";
import DiscoverBanner from "./discover/DiscoverBanner";

const Discover = () => {
  return (
    <div>
      <Container>
        <div>
          <Title
            titleName="More to Discover"
            titlePera="Our bundles were designed to conveniently package your tanning essentials while saving you money."
          />
          <DiscoverBanner />
        </div>
      </Container>
    </div>
  );
};

export default Discover;
