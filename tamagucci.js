/*****************************************************
***************  FRANCOIS  **************************
*****************************************************/

function afficheBouton() {

    document.querySelector(".balader").style.visibility = "hidden";
    document.querySelector(".rencontre").style.visibility = "hidden";
    document.querySelector(".boire").style.visibility = "hidden";
    document.querySelector(".manger").style.visibility = "hidden";
    document.querySelector(".jouer").style.visibility = "hidden";
    document.querySelector(".dormir").style.visibility = "hidden";
    if (localStorage.NvellePartie == "On") {
        document.querySelector(".balader").style.visibility = "visible";
        document.querySelector(".rencontre").style.visibility = "visible";
        document.querySelector(".boire").style.visibility = "visible";
        document.querySelector(".manger").style.visibility = "visible";
        document.querySelector(".jouer").style.visibility = "visible";
        document.querySelector(".dormir").style.visibility = "visible";
    }
}

function pause() {
    clearInterval();
    localStorage.NvellePartie = "OFF";
    document.querySelector(".titre").innerHTML = "Partie en pause !"
    afficheBouton();
    zonejeu.style.background = "url(image/house.gif";
}

function reprendrePartie() {
    if (localStorage.Pseudo != '') {
        localStorage.NvellePartie = "On";
        document.querySelector(".titre").innerHTML = "tama-gucci !"
        document.querySelector('.nom').innerHTML = localStorage.Pseudo
        afficheJauges();
        afficheBouton();
    }
}

function testmaxmin() {
    if (localStorage.Sante > 100) {
        localStorage.Sante = 100
    }
    if (localStorage.Sante <0) {
        clearInterval();
        localStorage.clear();
        localStorage.Pseudo = '';
        localStorage.NvellePartie = "OFF";
        afficheBouton();
        document.querySelector(".titre").innerHTML = "Game Over !"
    }

    if (localStorage.Fatigue > 100) {
        localStorage.Fatigue = 100;
    }
    if (localStorage.Fatigue < 0) {
        localStorage.Fatigue = 0;
    }
    if (localStorage.Humeur > 100) {
        localStorage.Humeur = 100;
    }
    if (localStorage.Humeur < 0) {
        localStorage.Humeur= 0;
    }
    if (localStorage.Poids > 100) {
        localStorage.Poids = 100;
    }
    if (localStorage.Poids < 0) {
        localStorage.Poids = 0;
    }
    if (localStorage.Faim > 100) {
        localStorage.Faim = 100;
    }
    if (localStorage.Faim < 0) {
        localStorage.Faim = 0;
    }
}

let zonejeu = document.querySelector(".personnage");

function actionManger() {
    localStorage.Sante = parseInt(localStorage.Sante) + 20;
    localStorage.Faim -= 20;
    localStorage.Humeur = parseInt(localStorage.Humeur) + 10;
    localStorage.Poids = parseInt(localStorage.Poids) + 10;
    afficheJauges();
    zonejeu.style.background = "url(image/cuisine.gif";
}

function actionBoire() {
    localStorage.Sante = parseInt(localStorage.Sante) + 20;
    localStorage.Faim -= 5 ;
    localStorage.Humeur = parseInt(localStorage.Humeur) + 5;
    localStorage.Poids++;
    afficheJauges();
    zonejeu.style.background = "url(image/cuisine.gif";
}

function actionBalader() {
    localStorage.Sante = parseInt(localStorage.Sante) + 5;
    localStorage.Fatigue = parseInt(localStorage.Fatigue) + 20;
    localStorage.Humeur = parseInt(localStorage.Humeur) + 20;
    localStorage.Poids -= 5;
    afficheJauges();
    zonejeu.style.background = "url(image/" + Math.round((Math.random()*3)+1)+ ".gif";
}

function actionJouer() {
    localStorage.Poids -= 10;
    localStorage.Humeur = parseInt(localStorage.Humeur) + 15;
    localStorage.Fatigue = parseInt(localStorage.Fatigue) + 10;
    afficheJauges();
    zonejeu.style.background = "url(image/jeux.gif";
}

function actionRencontrer() {
    localStorage.Humeur = parseInt(localStorage.Humeur) + 30;
    afficheJauges();
    zonejeu.style.background = "url(image/amour.gif";
}

function actionDormir() {
    localStorage.Humeur = parseInt(localStorage.Humeur) + 10;
    localStorage.Fatigue -= 30;
    afficheJauges();
    zonejeu.style.background = "url(image/chambre.gif";
}

document.querySelector(".balader").addEventListener('click',actionBalader);
document.querySelector(".rencontre").addEventListener('click',actionRencontrer);
document.querySelector(".boire").addEventListener('click',actionBoire);
document.querySelector(".manger").addEventListener('click',actionManger);
document.querySelector(".jouer").addEventListener('click',actionJouer);
document.querySelector(".dormir").addEventListener('click',actionDormir);
document.querySelector(".nouvellePartie").addEventListener('click',nouvellePartie);
document.querySelector(".pause").addEventListener('click',pause);
document.querySelector(".reprendrePartie").addEventListener('click',reprendrePartie);

/*****************************************************
 ***************  FRANCOIS  **************************
 *****************************************************/


/*****************************************************
 ******************  PATRICK  ************************
 *****************************************************/

function demandePseudo() {      // Patrick
    localStorage.setItem('Pseudo', '');
    while (localStorage.getItem('Pseudo') == ''){   // Demande le pseudo tant que chaine vide
        localStorage.setItem('Pseudo', window.prompt('Entrez le pseudo : '));
    }
    document.querySelector('.nom').innerHTML = localStorage.Pseudo
}

// Nouvelle Partie
function nouvellePartie() {     // Patrick
    // Définition des niveaux du départ
    demandePseudo();
    localStorage.setItem('NvellePartie', 'On');
    localStorage.setItem('Sante', '100');
    localStorage.setItem('Age', '0');
    localStorage.setItem('Faim', '80');
    localStorage.setItem('Fatigue', '20');
    localStorage.setItem('Humeur', '30');
    localStorage.setItem('Poids', '85');
    localStorage.setItem('CptTemps', '0');
    afficheJauges();
    afficheBouton();
}

// Affichage d'une Jauge
function afficheLaJauge(id){    // Patrick
    let idJauge = "myBar" + id;
    let jauge = document.getElementById(`${idJauge}`);
    let niveau = localStorage.getItem(`${id}`);
    console.log(`niveau ${id} : `, niveau);
    let couleur = '#91ba52';

    if ((id == 'Sante') || (id == 'Humeur')) {
        // Détermine la couleur de la jauge en fonction du niveau
        if (niveau < 20) {
            couleur = '#f63a0f';
        } else if (niveau < 40) {
            couleur = '#f0bb4b';
        } else {
            couleur = '#91ba52';
        }
    }

    if ((id == 'Fatigue') || (id == 'Faim')){
        // Détermine la couleur de la jauge en fonction du niveau
        if (niveau > 80) {
            couleur = '#f63a0f';
        } else if (niveau > 60) {
            couleur = '#f0bb4b';
        } else {
            couleur = '#91ba52';
        }
    }

    if (id == 'Poids'){
        // Détermine la couleur de la jauge en fonction du niveau
        if ((niveau < 20) || (niveau > 80)) {
            couleur = '#f63a0f';
        } else if ((niveau < 40) || (niveau > 60)) {
            couleur = '#f0bb4b';
        } else {
            couleur = '#91ba52';
        }
    }

    // Affiche la jauge avec ses parametres
    jauge.style.backgroundColor = couleur;
    jauge.style.width = niveau + '%';
}

// Appel d'affichage des Jauges
function afficheJauges(){
    testmaxmin();
    afficheLaJauge('Sante');
    afficheLaJauge('Humeur');
    afficheLaJauge('Faim');
    afficheLaJauge('Fatigue');
    afficheLaJauge('Poids');
}

function gestionAge() {
    let temps = ++localStorage.CptTemps;
    if (temps >= 24){
        localStorage.Age++;
        localStorage.CptTemps = 0;
    }
    document.querySelector(".age").innerHTML = localStorage.Age;
}

function gestionFaim() {
    let faim = ++localStorage.Faim;
    if (faim > 60){
        localStorage.Sante--;
    }
    if (faim > 70) {
        localStorage.Sante--;
    }
    if (faim > 80) {
        localStorage.Sante--;
    }
    if (faim > 90 ) {
        localStorage.Sante--;
    }
}

function gestionSante() {

}

function gestionFatigue() {
    let fatigue = ++localStorage.Fatigue;
    if (fatigue > 60){
        localStorage.Sante--;
    }
    if (fatigue > 70) {
        localStorage.Sante--;
    }
    if (fatigue > 80) {
        localStorage.Sante--;
    }
    if (fatigue > 90 ) {
        localStorage.Sante--;
    }
}

function gestionHumeur() {
    let humeur = --localStorage.Humeur;
    if (humeur < 40){
        localStorage.Fatigue++;
    }
    if (humeur < 30){
        localStorage.Fatigue++;
    }
    if (humeur < 20){
        localStorage.Fatigue++;
    }
    if (humeur < 10){
        localStorage.Fatigue++;
    }
}

function gestionPoids() {
    let poids = --localStorage.Poids;
    if ((poids < 30) || (poids > 70)){
        localStorage.Sante--;
    }
    if ((poids < 20) || (poids > 80)){
        localStorage.Sante--;
    }
    if ((poids < 10) || (poids > 90)){
        localStorage.Sante--;
    }
}

function routines() {
    gestionAge();
    gestionFaim();
    gestionSante();
    gestionHumeur();
    gestionFatigue();
    gestionPoids();
    afficheJauges();

}

afficheBouton();
setInterval(function (){
    if (localStorage.NvellePartie == 'On') {
        routines();
    }}, 3000);


/*****************************************************
 ******************  PATRICK  ************************
 *****************************************************/