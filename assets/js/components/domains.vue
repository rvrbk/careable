<template>
</template>

<script>
    export default {
        methods: {
            domains() {
                const scope = this;

                axios.get('domains.json').then((response) => {

                });
            }
        },
        created() {
            const scope = this;

            scope.domains();
        }
    }
</script>