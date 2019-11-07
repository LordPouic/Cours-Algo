1a - Via une boucle while afficher tout les chiffres entiers de 100 à 1

```
var a = 100;
while (a > 1) {
    console.log(a);
    a -= 1; // a = a -1
}
```

1b - Via une boucle for afficher tout les chiffres entiers de 100 à 1

```
for(var i =100; i>1 ; i--){ 
    //i-- pareil que i-=1 pareil que i= i - 1
    console.log(i);
}
```

2a - Via une boucle while afficher tout les chiffres pairs de 1 à 100

```
var a = 0;
while (a<=100){
    console.log(a);
    a = a + 2;
}

OU 

var a = 0;
while (a<=100){
    if(a%2===0){
        console.log(a);
    }
    a++;
}
```

2b - Via une boucle for afficher tout les chiffres pairs de 1 à 100

```
for( var i =0;i<=100; i = i + 2){
    console.log(i);
}
```

3 - Via une boucle écrire un programme qui calcule la somme des 10 premiers chiffres entiers

```
var somme = 0;
for(var i =1; i <= 10;i++){
    somme = somme + i;
}
console.log(somme);
```

4 - Faire un programme qui prend 10 notes aléatoires et affiche affiche la moyenne des notes

```
A venir
```

5 - Ecrire un programme qui prend un chiffre et qui affiche sa table de multiplication.

```
A venir
```

6 - Ecrire un programme qui prend un nombre et calcule la factorielle de ce nombre.

```
A venir
```

7 - Ecrire un programme qui calcule la 20eme valeur de la suite de Fibonacci.

```
A venir
```

Bonus - Ecrire un programme détectant les nombres de Armstrong compris entre 0 et 999.

```
A venir
```





