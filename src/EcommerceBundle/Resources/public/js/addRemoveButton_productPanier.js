$(document).ready(function () {

    $(".buttonAddDelete").click(function () {

        //on recupere le id du produit pour le passaer au servuer on utilisant ajax
        var idProduct = $(this).attr('value');

        //recuperation du nom de lattribut name pour faire le test
        //si name = add cad que le boutton est pour ajouter produit au panier
        //apres le clique on change lattribut name to delete
        //et on change le text du boutton
        var state = $(this).attr("name");
        if (state == "add") {
            $(this).attr("name", "delete").text("retirer du panier");
        } else if (state == "delete") {
            $(this).attr("name", "add").text("ajouter au panier");
        }

        //a supprimer les param non utilises
        $.get('http://localhost/atelier3/web/app_dev.php/panier/add?id=' + idProduct + '&' + 'qte=' + 1, function (data, status) {

            $("#demo").text(data);
        });
    });
});