//---------------------------------------------------> INICIO
// Función para mostrar/ocultar la contraseña en el login
function mostrarContrasena() {
    var contrasenaInput = document.getElementById("contrasena");
    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
    } else {
        contrasenaInput.type = "password";
    }
}
//---------------------------------------------------> FIN
//---------------------------------------------------> INICIO
// Función para establecer un fondo animado en el login
particlesJS('background-container', {
    particles: {
        number: {
            value: 30,  // Número de partículas
            density: {
                enable: true,
                value_area: 200  // Densidad de partículas
            }
        },
        color: {
            value: '#3498db'  // Color de las partículas
        },
        shape: {
            type: 'circle',  // Tipo de forma (círculo, triángulo, etc.)
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,  // Tamaño de las partículas
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3498db',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
//---------------------------------------------------> FIN
