document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".seccion");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Mostrar la sección correspondiente al botón clickeado
            document.getElementById(targetId).style.display = "block";
        });
    });
});
