const reproductor = {
    estado: "apagado",

    play: function (cancion){
        if (this.estado === "apagado") {
            console.log(`Comenzando reproducción de ${cancion}`);
            this.estado = "reproduciendo";
        } else {
            console.log(`Canción en ejecución: Stop Para detener`);
        }
    },

    stop: function() {
        if (this.estado === "apagado") {
            console.log(`Reproductor apagado`);
        } else {
            console.log(`Apagando reproductor`);
            this.estado = "apagado";
        }
    },

    getEstado: function() {
        return this.estado;
    },

    setEstado: function(estado) {
        this.estado = estado;
    }
};

// Ejemplo de uso del reproductor
reproductor.play("Campo de rosas");
reproductor.stop();
reproductor.stop();