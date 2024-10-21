<template>
    <div>
        <label class="btn" :class="{ hover: hover, clicked: isSelected }">
            <input type="checkbox" value="{{ valor }}"/>
        </label>
    </div>
</template>

<script>
export default {
    name: "CheckboxQuest",
    props: {
        name: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        handleClick() {
            this.$emit('select', this.name); // Emitir el nombre de la opción seleccionada
        }
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
    background-color: rgb(1, 131, 53) !important;
    color: white !important;
    border-color: rgb(1, 131, 53) !important;
}

.btn.clicked {
    background-color: rgb(1, 131, 53) !important;
    color: white !important;
    border-color: rgb(1, 131, 53) !important;
}
</style>
