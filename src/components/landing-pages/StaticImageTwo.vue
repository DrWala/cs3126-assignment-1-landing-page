<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <FeaturesArea></FeaturesArea>
        <Features></Features>
        <Services></Services>
        <Team></Team>
        <Funfacts></Funfacts>
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
        <Blog></Blog>
    </div>
</template>

<script>
import Banner from './static-image-two/Banner';
import BoxesArea from './static-image-two/BoxesArea';
import FeaturesArea from './static-image-two/FeaturesArea';
import Features from './static-image-two/Features';
import Services from './static-image-two/Services';
import Team from './static-image-two/Team';
import Funfacts from './static-image-two/Funfacts';
import Pricing from './static-image-two/Pricing';
import Feedback from './static-image-two/Feedback';
import Partner from './static-image-two/Partner';
import Blog from './static-image-two/Blog';

export default {
    name: 'BigdataAnalytics',
    components: {
        Banner,
        BoxesArea,
        FeaturesArea,
        Features,
        Services,
        Team,
        Funfacts,
        Pricing,
        Feedback,
        Partner,
        Blog,
    }
}
</script>