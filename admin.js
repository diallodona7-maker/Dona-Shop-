document.getElementById("publier").addEventListener("click", function () {

const nom = document.getElementById("nom").value;
const prix = document.getElementById("prix").value;
const description = document.getElementById("description").value;

if (nom === "" || prix === "" || description === "") {
    alert("Veuillez remplir tous les champs.");
    return;
}

alert(
"Produit publié !\n\n" +
"Nom : " + nom +
"\nPrix : " + prix + " FCFA" +
"\nDescription : " + description
);

});
