<template> 
    <nav class="navbar navbar-expand-lg " :class="{'navbar-dark bg-dark': useDarkNav}">
        <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

                <!-- using a vue directive {v-} the v-for direct works for the below  -->

                <li v-for="(page, index) in pages" class="nav-item active" :key="index">

                    <!-- Free to use Javascript expressions within the curly braces
                    We can use another vue directive to bind data to an attribute, the shorthand is :href
                    -->

                    <a class="nav-link" :class="{active: activePage == index}" v-bind:href="page.link.url"
                        :title="`This link goes to the ${page.link.text}`"
                        @click.prevent="changeActivePage(index)">{{page.link.text}}
                    </a>
                </li>
            </ul>
        </div>


        <!-- For this we are binding the class and defining an array, tenary operator can be used this way  -->
        
        <span :class="[setAlert ? 'text-success': 'text-danger', 'bg-warning', 'navbar-text', 'px-2', 'rounded-2']">
            We are testing dynamic classes using arrays
        </span>

        <!-- Changing value based on a theme -->
        
        <span :class="[`bg-${ theme }`, `text-info`, 'px-5', 'mx-2', 'rounded-2', 'navbar-text']">
            We are using a predefined theme to change these values
        </span>

        <button class="btn btn-primary mx-2 " @click.prevent="changeTheme">
            Change Theme
        </button>

        <form class="d-flex mx-5">
            <button class="btn btn-secondary" @click.prevent="useDarkNav = !useDarkNav">
                {{useDarkNav ? 'set Light' : 'set Dark'}}
            </button>
        </form>
    </nav>
</template>

<script>
export default {
    props: ['pages', 'activePage', 'changeActivePage'],
    data() {
        return {
            theme: 'dark',
            setAlert: true,
            useDarkNav: true,
        }
    },

    // A compute property is a property that's evaluated on the fly, automatically computes value when useDarkNav changes
    // has to execute to generate data
    computed: {
        navbarClasses() {
            return {
                'navbar-light': !this.useDarkNav,
                'bg-light': !this.useDarkNav,
            }
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme == 'light') {
                theme = 'dark'
            }

            this.theme = theme
        }}
}
</script>
