<template>

	<Header></Header>
	<RouterView/>
	<News/>
	
	<Footer></Footer>

</template>

<script setup>
	import Header from '../components/frontend/Header.vue'
	import Footer from '../components/frontend/Footer.vue'
	import News from '../components/frontend/News.vue'
	import { RouterView } from 'vue-router';

</script>