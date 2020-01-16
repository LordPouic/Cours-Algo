// Ce code est là à titre d'Exemple de structure, 
// il ne doit pas être utilisé mais le résonnement derrière doit l'être 
// Pour votre prochain projet

function Start(){
    let p = CreatePlateau();
    while (GameNotOver(p))
    {
        MiseAjourPageWEB();
        p = PlayATurn(p);
    }
    
}

function PlayATurn(Plateau){
    let piece = SelectPiece();
    //stuff
    let p = MovePiece(Piece, Plateau, 5);
    return p;
}

function SelectPiece(Plateau){

    let Piece;
    //Stuff
    return Piece;
}

function MovePiece(Piece, Plateau, coord) {

    //Stuff
    return Plateau;
}

function CreatePlateau(){

    let Plateau;
    //Stuff
    return Plateau;
}

function GameNotOver(Plateau){

    //Stuff
    return false; //ou true 
}