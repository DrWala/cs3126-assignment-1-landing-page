<template>
  <div>
    <Banner></Banner>
    <BoxesArea></BoxesArea>
    <DomainSearch></DomainSearch>
    <WhyChooseUs></WhyChooseUs>
    <Pricing></Pricing>
    <Feedback></Feedback>
    <!-- Start Ready To Talk Area -->
    <div class="ready-to-talk">
      <div class="container">
        <h3>Ready to talk?</h3>
        <p>Our team is here to answer your question about Pasona</p>
        <a href="#" class="btn btn-primary">Contact Us</a>
        <span><a href="#">Or, get started now with a free trial</a></span>
      </div>
    </div>
    <!-- End Ready To Talk Area -->
    <Partner></Partner>
    <HostingFeatures></HostingFeatures>
    <Blog></Blog>
    <CTAArea></CTAArea>
  </div>
</template>

<script>
import Banner from "./static-image-three/Banner";
import BoxesArea from "./static-image-three/BoxesArea";
import DomainSearch from "./static-image-three/DomainSearch";
import WhyChooseUs from "./static-image-three/WhyChooseUs";
import Pricing from "./static-image-three/Pricing";
import Feedback from "./static-image-three/Feedback";
import Partner from "./static-image-three/Partner";
import HostingFeatures from "./static-image-three/HostingFeatures";
import Blog from "./static-image-three/Blog";
import CTAArea from "./static-image-three/CTAArea";

export default {
  name: "BigdataAnalytics",
  components: {
    Banner,
    BoxesArea,
    DomainSearch,
    WhyChooseUs,
    Pricing,
    Feedback,
    Partner,
    HostingFeatures,
    Blog,
    CTAArea,
  },
};
</script>
