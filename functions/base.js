let baseModel  = {
    clearButton: document.getElementById("clearText"),
    copyButton: document.getElementById("copyButton")
}

/* ========================= For Activation Notes ========================= */


/* ========================= Unsuccessful Call Out Notes ========================= */

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Allow digits (0-9), space (32), and slash "/" (47)
    if ((charCode >= 48 && charCode <= 57) || charCode === 32 || charCode === 47) {
        return true;
    } else {
        return false;
    }
}

function unsucCallOut() {
    var phoneUCO = document.getElementById("phoneUCO").value;
    var mobileUCO = document.getElementById("mobileUCO").value;
    var reasonUCO = document.getElementById("reasonUCO").value;
    var verifyUCO = document.getElementById("verifyUCO").value;
    var notesUCO = document.getElementById("notesUCO");

    // Apply styling to the notes
    notesUCO.style.fontFamily = 'Courier New, Courier, monospace';
    notesUCO.style.fontSize = '1.05rem';

    if (phoneUCO === '' && mobileUCO === '' && reasonUCO === '' && verifyUCO === '') {
        notesUCO.value = "";
    } else if (reasonUCO === '' && verifyUCO === '') {
        notesUCO.value = "PHONE VERIFICATION: " + phoneUCO + "\nNUMBER CALLED: " + mobileUCO;
    } else if (reasonUCO === '') {
        notesUCO.value = "PHONE VERIFICATION: " + phoneUCO + "\nNUMBER CALLED: " + mobileUCO + "\nITEMS TO VERIFY: " + verifyUCO;
    } else if (verifyUCO === '') {
        notesUCO.value = "PHONE VERIFICATION: " + phoneUCO + "\nNUMBER CALLED: " + mobileUCO + "\nSTATUS: " + reasonUCO;
    } else {
        notesUCO.value = "PHONE VERIFICATION: " + phoneUCO + "\nNUMBER CALLED: " + mobileUCO + "\nSTATUS: " + reasonUCO + "\nITEMS TO VERIFY: " + verifyUCO;
    }
    checkNotesValue();
}

function copiedOptionREASON(option) {
    document.getElementById("reasonUCO").value = option;
    unsucCallOut();
}

function clearNotesUCO() {
    document.getElementById("phoneUCO").value = '';
    document.getElementById("mobileUCO").value = '';
    document.getElementById("reasonUCO").value = '';
    document.getElementById("verifyUCO").value = '';
    document.getElementById("notesUCO").value = '';

    checkNotesValue();
}

function copyNotesUCO() {
    var copyTextUCO = document.getElementById("notesUCO");
    copyTextUCO.select();
    copyTextUCO.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTextUCO.value);
}

function clearAddress() {
    document.getElementById("inputAddress").value = "";
    document.getElementById("activationDate").textContent = "";
    document.getElementById("address").textContent = "";
    document.getElementById("region").textContent = "";
    document.getElementById("billGeneration").textContent = "";
    document.getElementById("billDelivery").textContent = "";
    document.getElementById("eBillDelivery").textContent = "";
    document.getElementById("billSMS").textContent = "";
    document.getElementById("dueDate").textContent = "";
}
