document.getElementById("publierProduit").addEventListener("click", () => {

const nom = document.getElementById("nomProduit").value;
const prix = document.getElementById("prixProduit").value;

const produit = {
    nom: nom,
    prix: prix
};

localStorage.setItem("produit", JSON.stringify(produit));

alert("Produit publié avec succès !");

});
