1 - Faire un programme qui prend l'age d'une personne et qui affiche si cette personne est majeure ou non.

```
var age = 12;
if (age >= 18){
    console.log("Majeur");
}
else {
    console.log("Mineur");
}
```

2 - Faire un programme qui prend deux valeurs et qui affiche la plus petite des deux

```
var a = 5;
var b = 12;
if (a<b){
    console.log(a);
}
else {
    console.log(b);
}
```

3 - Même exercice que le 2 mais cette fois le programme prend 3 valeurs

```
var a = 2;
var b = 3;
var c = 1;
if ( a < b && a < c){
    console.log(a);
}
else if ( b < c){
    console.log(b);
}
else{
    console.log(c);
}
```

4 - Faire un programme qui prend une note au bac et qui affiche la mention assignée à cette note

```
var note = 15;
if (note > 20 || note < 0){
    console.log("error");
}
else if (note >= 18) {
    console.log("Exellent");
}
else if (note >= 16){
    console.log("Très bien");
}
else if (note >= 14){
    console.log("Bien");
}
else if (note >= 12){
    console.log("Assez bien");
}
else if (note >= 10){
    console.log("Passable");
}
else {
    console.log("Echec");
}
```

5 - Faire un programme qui prend un chiffre et qui affiche si ce chiffre est pair ou impair

```
var c = 12;
if ( c%2 == 0) {
    console.log("Pair");
}
else {
    console.log("Impair");
}
```

6 - Ecrire un programme qui détecte si une année est bissextile

```
A venir
```
