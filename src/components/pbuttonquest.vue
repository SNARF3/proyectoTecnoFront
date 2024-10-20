<template>
    <button class="btn" :class="{ hover: hover, clicked: clicked }" @mouseover="hover = true"
        @mouseleave="hover = false" @click="clicked = true">
        {{ name }}
    </button>
</template>

<script>
export default {
    name: "pbuttonquest",
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            hover: false,
            clicked: false
        };
    }
};
</script>

<style scoped>
.btn {
    color: rgb(0, 131, 213) !important;
    text-transform: uppercase !important;
    text-decoration: none !important;
    border: 2px solid rgb(0, 131, 213) !important;
    padding: 10px 20px !important;
    font-size: 17px !important;
    cursor: pointer !important;
    font-weight: bold !important;
    background: transparent !important;
    position: relative !important;
    transition: all 0.5s !important;
    overflow: hidden !important;
    align-items: center;
    width: 100%;
}

.btn.hover {
    background-color: green !important;
    color: white !important;
}

.btn.clicked {
    background-color: cyan !important;
    color: white !important;
}
</style>