<template>
  <div>
    <Banner></Banner>
    <OurLatestProjects></OurLatestProjects>
    <About></About>
    <Feedback></Feedback>
    <Partner></Partner>
    <OurRecentNews></OurRecentNews>
    <Creative></Creative>
  </div>
</template>

<script>
import Banner from "./agency-portfolio/Banner";
import OurLatestProjects from "./agency-portfolio/OurLatestProjects";
import About from "./agency-portfolio/About";
import Feedback from "./agency-portfolio/Feedback";
import Partner from "./agency-portfolio/Partner";
import OurRecentNews from "./agency-portfolio/OurRecentNews";
import Creative from "./agency-portfolio/Creative";

export default {
  name: "AgencyPortfolio",
  components: {
    Banner,
    OurLatestProjects,
    About,
    Feedback,
    Partner,
    OurRecentNews,
    Creative,
  },
};
</script>
