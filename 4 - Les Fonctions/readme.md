1 - Ecrire une fonction qui affiche la table de multiplication de 5

```
function Table5() {
    let a = 5;
    for(let i=0;i<10; i ++){
        let r = a * i;
        console.log(i+" x "+a+" = "+r);
    }
}
```

2 - Ecrire une fonction qui prend un paramètre et qui affiche la table de multiplication de ce paramètre

```
function TableMult(x) {
    for(let i=0;i<10; i ++){
        let r = x * i;
        console.log(i+" x "+x+" = "+r);
    }
}
```

3 - Ecrire une fonction qui prend un paramètre qui affiche error si le chiffre et négatif ou sa table de multiplication si il est positif

```
function ValidTableMult(x) {
    if (x<0){
        console.log("error");
    }
    else {
        TableMult(x);
    }
}
```

4 - Créer une fonction prenant 2 paramètres et retournant le plus grand des deux

```
function Max(a,b){
    if (a > b){
        return a;
    }
    else {
        return b;
    }
}
```

5 - Créer une fonction qui prenant en entrée deux paramètres A et B et retournant A puissance B

```
A venir
```

6 - Créer une fonction qui répond oui ou non au fait que le paramètre donné soit un chiffre premier ou pas

```
A venir
```

7 - Créer une fonction qui prend en paramètre un chiffre et qui affiche tout les chiffres premiers inférieur au paramètre

```
A venir
```

8 - Ecrire une fonction qui prend en entrée un chiffre compris entre 2 et 12 et qui affiche toutes les combinaisons possibles de faire le résultat via deux dés à 6 faces

```
A venir
```

Bonus - Ecrire une fonction qui prend un nombre compris entre 1 et 3999 et qui affiche son équivalent en chiffre romain. 

```
A venir
```
