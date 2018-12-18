// Affichage d'une Jauge
function afficheLaJauge(id){    // Patrick
    let idJauge = "myBar" + id;
    console.log("idJauge : ", idJauge);
    let jauge = document.getElementById(`${idJauge}`);
    console.log("Jauge : ", jauge);
    let niveau = localStorage.getItem(`${id}`);
    console.log("niveau : ", niveau)
    let couleur = 'green';

    if ((id == 'Sante') || (id == 'Humeur')) {
        // Détermine la couleur de la jauge en fonction du niveau
        if (niveau < 20) {
            couleur = 'red';
        } else if (niveau < 40) {
            couleur = 'orange';
        } else {
            couleur = 'green';
        }
    }

    if ((id == 'Fatigue') || (id == 'Faim')){
        // Détermine la couleur de la jauge en fonction du niveau
        if (niveau > 80) {
            couleur = 'red';
        } else if (niveau > 60) {
            couleur = 'orange';
        } else {
            couleur = 'green';
        }
    }

    if (id == 'Poids'){
        // Détermine la couleur de la jauge en fonction du niveau
        if ((niveau < 20) || (niveau > 80)) {
            couleur = 'red';
        } else if ((niveau < 40) || (niveau > 60)) {
            couleur = 'orange';
        } else {
            couleur = 'green';
        }
    }

    // Affiche la jauge avec ses parametres
    jauge.style.backgroundColor = couleur;
    jauge.style.width = niveau + '%';
}

// Appel d'affichage des Jauges
function afficheJauges(){
    afficheLaJauge('Sante');
    afficheLaJauge('Humeur');
    afficheLaJauge('Faim');
    afficheLaJauge('Fatigue');
    afficheLaJauge('Poids');
}