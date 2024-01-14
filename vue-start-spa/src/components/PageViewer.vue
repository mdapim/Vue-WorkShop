<template>
    <div class="container">
        <h1> {{pageTitle}} </h1>
        <p> {{pageContent}} </p>
    </div>
</template>

<script>
    export default {
        props: ['pageTitle', 'pageContent']
    }
</script>