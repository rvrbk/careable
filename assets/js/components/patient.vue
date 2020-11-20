<template>
</template>

<script>
    export default {
        methods: {
            patient() {
                const scope = this;

                axios.get('patients.json').then((response) => {
                    console.log(response);
                }); 
            }
        },
        created() {
            const scope = this;

            scope.patient();
        }
    }
</script>