
// Tento kód přidává menu do elementu s ID 'navbar'

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./../index.html" style="font-size:80%;">Zpět</a>
                    <span>Centrálně spravované menu</span>
                    <div class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <div class="dropdown-menu bg-dark">
                            <a class="dropdown-item text-white" href="index.html"> <i class="fas fa-image"></i> Náhodný obrázek</a>
                            <a class="dropdown-item text-white" href="png.html"> <i class="fas fa-image"></i> Obrázky PNG</a>
                            <a class="dropdown-item text-white" href="jpg.html"> <i class="fas fa-image"></i> Obrázky JPG</a>
                            <a class="dropdown-item text-white" href="svg.html"> <i class="fas fa-image"></i> Obrázky SVG</a>
                            <a class="dropdown-item text-white" href="vlastni.html"> <i class="fas fa-image"></i> Vlastní téma</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
});

// <i class="fas fa-file-image"></i> JPG - Rastrová ztrátová  grafika</a>
// <i class="fas fa-file-archive"></i> PNG - Rastrová bezztrátová grafika</a>
// <i class="fas fa-vector-square"></i> SVG - Škálovatelná vektorová grafika</a>
// nod/182e87a842.png
