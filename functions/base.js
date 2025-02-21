let baseModel  = {
    clearButton: document.getElementById("clearText"),
    copyButton: document.getElementById("copyButton")
}

/* ========================= For Activation Notes ========================= */

function checkNotesValueFA() {
    var notesValueFA = document.getElementById("notesFA").value;
    var clearButtonFA = document.getElementById("clearButtonFA");
    var copyButtonFA = document.getElementById("copyButtonFA");
    var copySplitFA = document.getElementById("copySplitFA");

    if(notesValueFA === '') {
        clearButtonFA.disabled = true;
        copyButtonFA.disabled = true;
        copySplitFA.disabled = true;
        copySplitFA.style.display = 'none'; // Hide the element
    } else {
        clearButtonFA.disabled = false;
        copyButtonFA.disabled = false;
        copySplitFA.disabled = false;
        copySplitFA.style.display = 'inline'; // Show the element (you can use 'inline', 'block', or other appropriate display values)
    }
}
checkNotesValueFA();
document.getElementById("notesFA").addEventListener("input", checkNotesValueFA); 

function forActivation() {
    var phoneFA = document.getElementById("phoneFA").value;
    var callFA = document.getElementById("callFA").value;
    var itemsFA = document.getElementById("itemsFA").value;
    var hpaFA = document.getElementById("hpaFA").value;
    var ticketFA = document.getElementById("ticketFA").value;
    var notesFA = document.getElementById("notesFA");

    if (phoneFA === '' && callFA === '' && itemsFA === '' && hpaFA === '' && ticketFA === '') {
        notesFA.value = "";
    } else if (hpaFA === '' && ticketFA === '') {
        notesFA.value = "PHONE VERIFICATION: " + phoneFA + "\n1ST PARTY CALL OUT: " + callFA + "\nITEMS DISCUSSED: " + itemsFA;
    } else if (phoneFA === '' && callFA === '' && itemsFA === '') {
        notesFA.value = "ACCOUNT ACTIVE:\nHIGHEST PLAN APPROVED: " + hpaFA + "\nTICKET NUMBER: " + ticketFA;
    } else {
        notesFA.value = "PHONE VERIFICATION: " + phoneFA + "\n1ST PARTY CALL OUT: " + callFA + "\nITEMS DISCUSSED: " + itemsFA + "\n\nACCOUNT ACTIVE:\nHIGHEST PLAN APPROVED: " + hpaFA + "\nTICKET NUMBER: " + ticketFA;
    }
    checkNotesValueFA();

    // Apply styling to the notes
    notesFA.style.fontFamily = 'Courier New, Courier, monospace';
    notesFA.style.fontSize = '1.05rem';
}

function copiedOptionHPA(option) {
    document.getElementById("hpaFA").value = option;
    forActivation();
}

function clearNotesFA() {
    document.getElementById("phoneFA").value = '';
    document.getElementById("callFA").value = '';
    document.getElementById("itemsFA").value = '';
    document.getElementById("hpaFA").value = '';
    document.getElementById("ticketFA").value = '';
    document.getElementById("notesFA").value = '';

    checkNotesValueFA();
}

function copyNotesFA() {
    var copyTextFA = document.getElementById("notesFA");
    copyTextFA.select();
    copyTextFA.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTextFA.value);
}

function copyCallOutFA() {
    var phoneFA = document.getElementById("phoneFA").value;
    var callFA = document.getElementById("callFA").value;
    var itemsFA = document.getElementById("itemsFA").value;
    var copyTextFA = document.getElementById("notesFA").value;

    if (phoneFA === '' && callFA === '' && itemsFA === '') {
        alert("There's no text to copy.");
    } else {
        var copiedTextFA = "PHONE VERIFICATION: " + phoneFA + "\n1ST PARTY CALL OUT: " + callFA + "\nITEMS DISCUSSED: " + itemsFA;
    
        navigator.clipboard.writeText(copiedTextFA)
        .then(() => {
            var startPos = copyTextFA.indexOf(copiedTextFA);
            var endPos = startPos + copiedTextFA.length;
            document.getElementById("notesFA").focus();
            document.getElementById("notesFA").setSelectionRange(startPos, endPos);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

function copyActivationFA() {
    var hpaFA = document.getElementById("hpaFA").value;
    var ticketFA = document.getElementById("ticketFA").value;
    var copyTextFA = document.getElementById("notesFA").value;

    if (hpaFA === '' && ticketFA === '') {
        alert("There's no text to copy.");
    } else {
        var copiedTextFA = "ACCOUNT ACTIVE:\nHIGHEST PLAN APPROVED: " + hpaFA + "\nTICKET NUMBER: " + ticketFA;

        navigator.clipboard.writeText(copiedTextFA)
        .then(() => {
            var startPos = copyTextFA.indexOf(copiedTextFA);
            var endPos = startPos + copiedTextFA.length;
            document.getElementById("notesFA").focus();
            document.getElementById("notesFA").setSelectionRange(startPos, endPos);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

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

    // Apply styling to the notes
    notesUCO.style.fontFamily = 'Courier New, Courier, monospace';
    notesUCO.style.fontSize = '1.05rem';
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
    document.getElementById("address").textContent = "";
    document.getElementById("region").textContent = "";
    document.getElementById("billGeneration").textContent = "";
    document.getElementById("billDelivery").textContent = "";
    document.getElementById("eBillDelivery").textContent = "";
    document.getElementById("billSMS").textContent = "";
    document.getElementById("dueDate").textContent = "";
}