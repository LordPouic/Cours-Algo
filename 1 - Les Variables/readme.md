1 - Ecrire un algorithme ayant une variable C, donner une valeur à C et calculer son carré

```
var c = 7;
var s = c * c;
console.log(c+" x "+c+" = "+s);

```

2 - Ecrire un algorithme ayant deux variable A et B, donner des valeurs à A et B puis tenter de trouver un moyen d’intervertir les deux valeurs contenues dans A et B

```
var a = 10;
var b = 5;
console.log("a = "+a+" b = "+b);
var c = a;
a = b;
b = c;
console.log("a = "+a+" b = "+b);

```

3 - Ecrire un algorithme ayant une variable R correspondant au rayon d’un cercle, donner une valeur à R et calculer le périmètre du cercle de rayon R

```
var rayon = 3;
var perimetre = 2 * rayon * Math.PI;
console.log("2 x PI x "+rayon+" = "+perimetre);

```

4 - Ecrire un algorithme ayant 4 variables correspondant à 4 notes, donner des valeurs aux variables et écrire un algorithme permettant de calculer la moyenne de ces 4 notes

```
var Note1 = 12;
var Note2 = 10;
var Note3 = 8;
var Note4 = 16;

var Moyenne = (Note1 + Note2 + Note3 + Note4) /4;

console.log(Moyenne);

```
5 - Ecrire un algorithme ayant une variable A, donner une valeur à A et ensuite écrire un algorithme permettant de découvrir si A est pair ou non

```
var h = 6;
var m = h%2;
if (m == 0){
    console.log("Pair");
}
else {
    console.log("impair");
}

```
