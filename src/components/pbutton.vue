<template>
    <button class="btn" @click="$emit('click')">
        {{ name }}
    </button>
</template>

<script>
export default {
    name: 'pbutton',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
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
    transition: all 1s !important;
    overflow: hidden !important;
    align-items: center;
    width: 100%;
}

.btn:hover {
    color: white !important;
    background-color: rgb(0, 131, 213) !important;
}

.btn::before {
    content: "" !important;
    position: absolute !important;
    height: 100% !important;
    width: 0% !important;
    top: 0 !important;
    left: -40px !important;
    transform: skewX(45deg) !important;
    background-color: rgb(0, 131, 213) !important;
    z-index: -1 !important;
    transition: all 1s !important;
}

.btn:hover::before {
    width: 160% !important;
}
</style>
