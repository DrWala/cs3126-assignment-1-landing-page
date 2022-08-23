<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <Services></Services>
        <ServicesArea></ServicesArea>
        <Features></Features>
        <Team></Team>
        <Funfacts></Funfacts>
        <Works></Works>
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
import Banner from './static-image-one/Banner';
import BoxesArea from './static-image-one/BoxesArea';
import Services from './static-image-one/Services';
import ServicesArea from './static-image-one/ServicesArea';
import Features from './static-image-one/Features';
import Team from './static-image-one/Team';
import Funfacts from './static-image-one/Funfacts';
import Works from './static-image-one/Works';
import Pricing from './static-image-one/Pricing';
import Feedback from './static-image-one/Feedback';
import Partner from './static-image-one/Partner';
import Blog from './static-image-one/Blog';

export default {
    name: 'BigdataAnalytics',
    components: {
        Banner,
        BoxesArea,
        Services,
        ServicesArea,
        Features,
        Team,
        Funfacts,
        Works,
        Pricing,
        Feedback,
        Partner,
        Blog,
    }
}
</script>