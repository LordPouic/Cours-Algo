1 - Créer une fonction retournant un tableau de dix cases chacune contenant un tableau de 10 cases
    remplit par la valeur de l’indice du premier tableau plus celui du deuxième

```
function Exo1()
{
    let T = [];
    for(let i=0;i<10;i++)
    {
        let T2 = [];
        for(let j=0;j<10;j++)
        {
            T2.push(j+i);
        }
        T.push(T2);
    }
    return T;
}

let t = Exo1();
for(let i=0;i<10;i++)
{
    console.log(t[i]);
}

```

2 - Créer une fonction prenant en paramètres deux chiffres T1 et T2 et retournant un tableau de taille T1 
    contenant dans chaque case un tableau de taille T2 remplit de chiffres aléatoires

```
function Exo2(T1,T2,max)
{
    let Tab = [];
    for(let i=0;i<T1;i++)
    {
        let Tab2 = [];
        for(let j=0;j<T2;j++)
        {
            Tab2.push(Math.floor(Math.random()*max));
        }
        Tab.push(Tab2);
    }
    return Tab;
}

```

3 - Créer une fonction qui prend en paramètre un tableau bidimensionnel
    et un chiffre et qui renvoi en retour si oui ou non le chiffre est présent dans ce tabelau
    

```
A venir

```

4 - Créer une fonction qui calcule la somme des valeurs de toutes les cases d’un tableau bidimensionnel

```
A venir

```
