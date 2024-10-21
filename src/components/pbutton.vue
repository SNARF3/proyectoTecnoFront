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
/* Estilo general del botón */
.btn {
    color: rgb(0, 131, 213) !important;
    text-transform: uppercase !important;
    text-decoration: none !important;
    border: 2px solid rgb(0, 131, 213) !important; /* Bordes definidos */
    padding: 16px 29px !important; /* Aumento en la altura para hacerlo más prominente */
    font-size: 20px !important; /* Fuente moderada */
    cursor: pointer !important;
    font-weight: bold !important;
    background: transparent !important;
    position: relative !important;
    transition: all 0.6s ease-in-out !important; /* Transición más lenta */
    overflow: hidden !important;
    border-radius: 0px; /* Mantenerlo cuadrado */
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 131, 213, 0.3); /* Sombra suave para brillo */
}

/* Efecto hover */
.btn:hover {
    color: white !important;
    background-color: rgb(0, 131, 213) !important; /* Color de fondo */
    box-shadow: 0 0 25px rgba(0, 131, 213, 0.8); /* Brillo al hacer hover */
    transform: scale(1.05); /* Efecto de agrandamiento */
}

/* Animación de borde (centrado) */
.btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 50%; /* Comienza desde el centro */
    transform: translateX(-50%); /* Centra la barra */
    background-color: rgb(0, 131, 213);
    z-index: -1;
    transition: width 1s ease-out; /* Animación más lenta */
}

/* Expansión del borde al hacer hover (centro hacia afuera) */
.btn:hover::before {
    width: 200%; /* Se expande más allá del 100% para cubrir ambos lados */
}

/* Animación de cambio de color del texto */
@keyframes text-color {
    0% {
        color: rgb(0, 131, 213);
    }
    100% {
        color: white;
    }
}

/* Aplicamos la animación de color de texto al hacer hover */
.btn:hover {
    animation: text-color 0.6s forwards;
}

/* Efecto de movimiento en el clic */
.btn:active {
    transform: translateY(2px); /* Desplazar el botón ligeramente al hacer clic */
    box-shadow: 0 2px 5px rgba(0, 131, 213, 0.4); /* Sombra más suave */
}
</style>
