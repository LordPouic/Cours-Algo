1 - Créer un algorithme créant un tableau remplit de 50 fois la valeur 0

```
var T = [];
for(var i=0;i<50;i++){
    T.push(0);
}
console.log(T);

```

2 - Créer un algorithme créant un tableau de 20 cases chacune remplit par l’indice de la case 

```
var T = [];
for(var i=0;i<20;i++){
    T.push(i);
}
console.log(T);

```

3 - Créer un algorithme créant un tableau de 10 cases avec dix valeurs aléatoires

```
var T = [];
for(var i=0;i<20;i++){
    T.push(i);
}
console.log(T);

```

4 - Créer un algorithme calculant la moyenne des valeurs d'un tableau remplit de chiffres

```
var R = [12,15,8,9,6,18];

var Somme =0 ;
for (var i=0;i<R.length;i++){
    Somme += R[i];
}

if (R.length === 0){
    console.log("Error");
}
else {
    var Moyenne = Somme/R.length;
    console.log(R)
    console.log(Moyenne)
}
```

5 - Créer un algorithme Créant 2 tableaux de valeurs aléatoires et qui donne en résultat un nouveau tableau qui est la concaténation des deux premiers

```
var R1 = [];
var R2 = [];
for(var i=0;i<10;i++)
{
    var r1 = Math.random() * 20;
    r1 = Math.floor(r1);
    R1.push(r1);
    var r2 = Math.random() * 20;
    r2 = Math.floor(r2);
    R2.push(r2);
}
//var R3 = R1.concat(R2);
var R3 = R1;
for(var i=0;i<R2.length;i++){
    R3.push(R2[i]);
}

```

6 - Créer un algorithme prenant un entier X en paramètre et créant un tableau de X valeurs aléatoires 

```
var x = Math.random() * 20;
var T = [];
for(var i=0;i<x;i++){
    var r = Math.random() * 10;
    r = Math.floor(r);
    T.push(r);
}
```

7 - Créer un algorithme prenant un tableau en entrée et transformant ce même tableau sans les cases égales à 0

```
A venir

```

8 - Créer un algorthme prenant un tableau en entrée et affichant la valeur maximale comprise dans ce tableau

```
A venir

```

9 - Créer un algorithme prenant un entier et un tableau en paramètres qui affiche oui ou non cet entier est présent dans ce tableau

```
A venir

```

10- Créer un algorithme prenant en entrée un tableau et affichant ce même tableau mais triée par ordre croissant

```
A venir

```
