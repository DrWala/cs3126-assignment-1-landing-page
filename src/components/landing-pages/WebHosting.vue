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
import Banner from "./web-hosting/Banner";
import BoxesArea from "./web-hosting/BoxesArea";
import DomainSearch from "./web-hosting/DomainSearch";
import WhyChooseUs from "./web-hosting/WhyChooseUs";
import Pricing from "./web-hosting/Pricing";
import Feedback from "./web-hosting/Feedback";
import Partner from "./web-hosting/Partner";
import HostingFeatures from "./web-hosting/HostingFeatures";
import Blog from "./web-hosting/Blog";
import CTAArea from "./web-hosting/CTAArea";
export default {
  name: "WebHosting",
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
