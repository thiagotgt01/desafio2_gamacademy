var sNome,sEmail,sCPF,sAdress;
function record(){
    sNome = document.getElementById("clientName").value;
    sEmail = document.getElementById("clientEmail").value;
    sCPF = document.getElementById("clientCPF").value;
    sAdress = document.getElementById("clientAdress").value;

    localStorage.clientName = sNome;
    localStorage.clientEmail = sEmail;
    localStorage.clientCPFl = sCPF;
    localStorage.clientAdress = sAdress;
}

var sNomeProduct,sModel,sDescription,sPreco;
function recordProduct(){
    sNomeProduct = document.getElementById("nameProduct").value;
    sModel = document.getElementById("modelProduct").value;
    sDescription = document.getElementById("descriptionProduct").value;
    sPreco = document.getElementById("priceProduct").value;

    localStorage.nameProduct = sNomeProduct;
    localStorage.modelProduct = sModel;
    localStorage.descriptionProduct = sDescription;
    localStorage.priceProduct = sPreco;
    
}