document.getElementById("publier").addEventListener("click", function () {

let nom = document.getElementById("nom").value;
let categorie = document.getElementById("categorie").value;
let prix = document.getElementById("prix").value;
let ancienprix = document.getElementById("ancienprix").value;
let description = document.getElementById("description").value;
let stock = document.getElementById("stock").value;

if (
    nom === "" ||
    categorie === "" ||
    prix === "" ||
    description === "" ||
    stock === ""
) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
}

let message =
"Produit publié avec succès !\n\n" +
"Nom : " + nom + "\n" +
"Catégorie : " + categorie + "\n" +
"Prix : " + prix + " FCFA\n" +
"Ancien prix : " + ancienprix + " FCFA\n" +
"Description : " + description + "\n" +
"Quantité disponible : " + stock + "\n\n" +
"Produit 100 % neuf\n" +
"Livraison partout en Côte d'Ivoire.";

alert(message);

});
document
.getElementById("publierProduit")
.addEventListener("click", function () {

alert("Votre produit a été publié avec succès !");

});
