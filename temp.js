<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>tamagucci</title>
    <link href="https://fonts.googleapis.com/css?family=Cinzel" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
    </head>
    <div id="contener">
    <header>
    <div class="nomAge">
    <div class="titre">tama-gucci</div>
    <p class="nom"></p>
    <p class="age"></p>
    <ul class="tete">
    <li class="nouvellePartie"><input type="button" value="Nouvelle Partie"></li>
    <li class="reprendrePartie"><input type="button" value="Reprendre Partie"></li>
    <li class="pause"><input type="button" value="Jeu en pause"></li>
    </ul>
    </div>
    </header>
    <body>
    <div class="global">
    <div class="ecranJauge">
    <div class="ecran">
    <section class="personnage">
    <div class="perso"></div>
    </section>
    </div>
    <div class="jauges">
    <div class="myProgress">
    <div id="myBarSante">Santé</div>
    </div>
    <div class="myProgress">
    <div id="myBarHumeur">Humeur</div>
    </div>
    <div class="myProgress">
    <div id="myBarFaim">Faim</div>
    </div>
    <div class="myProgress">
    <div id="myBarFatigue">Fatigue</div>
    </div>
    <div class="myProgress">
    <div id="myBarPoids">Poids</div>
    </div>
    </div>
    </div>
    <div class="boutton">
    <ul class="choix">
    <li class="balader"><input type="button" value="Balader"></li>
    <li class="manger"><input type="button" value="Manger"></li>
    <li class="boire"><input type="button" value="Boire"></li>
    <li class="dormir"><input type="button" value="Dormir"></li>
    <li class="jouer"><input type="button" value="Jeux"></li>
    <li class="rencontre"><input type="button" value="Rencontre"></li>
    </ul>
    </div>
    </div>
    <script src="tamagucci.js"></script>
    </body>
    </div>
    </html>






html{
 /*background: #c8f623;*/

}

li {
 list-style-type: none;
}

.nomAge {
 background:dodgerblue;
 /*display: inline-flex;*/
 width: 605px;
 height: 150px;
 border: 1px solid dodgerblue;

}
.titre{
 background: dodgerblue;
 text-align: center;
 font-weight: bolder;
 color: red;
 text-shadow: 1px 1px 1px grey;
 letter-spacing: 8px;
 font-family: 'Cinzel', serif;
 text-transform: uppercase;
 font-size: x-large;

}

.nom{
 font-family: 'Cinzel', serif;
 font-weight: bold;
 background: silver;
 border: 1px solid blue;
 width: 200px;
 height: 20px;
 margin-left: 10px;
}
.age{
 font-family: 'Cinzel', serif;
 font-weight: bold;
 background: silver;
 border: 1px solid blue;
 width: 200px;
 height: 20px;
 margin-left: 10px;
}

.tete{
 display:inline-flex;
 float: right;
 margin-top: -40px;
 /*border: 1px solid orangered;*/
 border-spacing: 5px;
 width:50%;
 justify-content: space-evenly;
}
.tete ul{
 display: block;
 justify-content: right;
}
.nouvellePartie{
 width:100px;
 margin-left: -20px;
}

.reprendrePartie{
 width: 100px;
}

.ecranJauge{
 border: 1px solid limegreen;
 display: inline-flex;
}

.ecran{
 background: limegreen;
 width: 400px;
 height: 350px;
}

.personnage{
 background-image: url('../image/house.jpg');
 border: 1px solid green;
 height:300px;
 margin: 22px 10px 0 10px;
}
.jauges{
 background: limegreen;
}

.myProgress {
 width: 200px;
 background-color: lightgoldenrodyellow;
 margin: 40px 5px 10px 0;
}

#myBarSante {
 font-family: 'Cinzel', serif;
 font-weight: bolder;
 width: 1%;
 height: 20px;
 /*background-color: green;*/
}

#myBarHumeur {
 font-family: 'Cinzel', serif;
 font-weight: bolder;
 width: 1%;
 height: 20px;
 /*background-color: green;*/
}

#myBarFaim {
 font-family: 'Cinzel', serif;
 font-weight: bolder;
 width: 1%;
 height: 20px;
 /*background-color: green;*/
}

#myBarFatigue {
 font-family: 'Cinzel', serif;
 font-weight: bolder;
 width: 1%;
 height: 20px;
 /*background-color: green;*/
}

#myBarPoids {
 font-family: 'Cinzel', serif;
 font-weight: bolder;
 width: 1%;
 height: 20px;
 /*background-color: green;*/
}

.boutton{
 background: coral;
 border: 1px solid coral;
 width:605px;
 height: 80px;
 margin: -5px 20px 0 0 ;
}


.choix{

 display: flex;
 justify-content: space-evenly;
 margin-top: 30px;
 margin-left: -40px;

}
ul.choix{
 width: 100%;
}

input{
 background: silver;
 font-family: 'Cinzel', serif;
 font-weight: bold;
 border-radius: 5px;

}
