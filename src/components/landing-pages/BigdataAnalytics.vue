<template>
  <div>
    <Banner></Banner>
    <WhatWeDo></WhatWeDo>
    <Discover></Discover>
    <Services></Services>
    <Team></Team>
    <FunFacts></FunFacts>
    <Feedback></Feedback>
    <Industries></Industries>
    <OurRecentStory></OurRecentStory>
    <StartYourFreeTrial></StartYourFreeTrial>
  </div>
</template>

<script>
import Banner from "./bigdata-analytics/Banner";
import WhatWeDo from "./bigdata-analytics/WhatWeDo";
import Discover from "./bigdata-analytics/Discover";
import Services from "./bigdata-analytics/Services";
import Team from "./bigdata-analytics/Team";
import FunFacts from "./bigdata-analytics/FunFacts";
import Feedback from "./bigdata-analytics/Feedback";
import Industries from "./bigdata-analytics/Industries";
import OurRecentStory from "./bigdata-analytics/OurRecentStory";
import StartYourFreeTrial from "./bigdata-analytics/StartYourFreeTrial";

export default {
  name: "BigdataAnalytics",
  components: {
    Banner,
    WhatWeDo,
    Discover,
    Services,
    Team,
    FunFacts,
    Feedback,
    Industries,
    OurRecentStory,
    StartYourFreeTrial,
  },
};
</script>
