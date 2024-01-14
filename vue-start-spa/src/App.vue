<template>
    <div> <navbar :pages="pages" :active-page="activePage" :change-active-page="(index) => activePage = index"></navbar>
    <page-viewer :page-title="pages[activePage].pageTitle" :page-content="pages[activePage].content"></page-viewer></div>

</template>

<script>
    import PageViewer from './components/PageViewer.vue';
    import Navbar from './components/Navbar.vue';

    export default {
        components: {
            PageViewer,
            Navbar
        },
        data(){
            return {
                activePage: 0,
                pages: [
                    {
                        pageTitle: 'This is the Home Page',
                        content: 'this is the home content',
                        link: { text: 'Home', url: 'index.html' }
                    },
                    {
                        pageTitle: 'This is the About Page',
                        content: 'All about us',
                        link: { text: 'About', url: 'About.html' }
                    },
                    {
                        pageTitle: 'This is the Contact Page',
                        content: 'Get in touch with us now',
                        link: { text: 'Contact', url: 'Contact.html' }
                    }
                ]
            }
        }
    }
</script>