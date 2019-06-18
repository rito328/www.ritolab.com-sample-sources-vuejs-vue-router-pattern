<template>
    <div class="page">
        <h1>Page</h1>
        <button @click="dump">dump</button>
        <!-- Boolean/Function mode -->
        <p>
            {{ id }}
        </p>
        <!-- Object mode -->
        <!--
        <p>
            {{ propA }} | {{ propB }} | {{ propC }}
        </p>
        -->
    </div>
</template>

<script>
    export default {
        // Boolean mode
        // props: ['id'],

        // Object mode
        //props: ['propA', 'propB', 'propC'],

        // Function mode
        props: {
            id: Number
        },

        methods: {
            dump () {
                // Boolean mode
                //console.log(this.id)

                // Object mode
                // console.log(this.propA)
                // console.log(this.propB)
                // console.log(this.propC)

                // Function mode
                console.log(this.id)

            }
        }
    }
</script>