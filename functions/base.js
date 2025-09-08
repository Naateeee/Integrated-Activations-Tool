let baseModel  = {
    clearButton: document.getElementById("clearText"),
    copyNotes: document.getElementById("copyNotes")
}

/* ========================= NOTES GENERATOR ========================= */

// Centralized Input Elements
const inputs = {
    // Common
    notesValue: document.getElementById("notes_value"),

    // Shared fields
    ticketNumber: document.getElementById("ticketNumber"),
    callRespondent: document.getElementById("callRespondent"),

    // Successful Call Out for Activation - specific fields
    contactMethod: document.getElementById("contactMethod"),
    itemsDiscussed: document.getElementById("itemsDiscussed"),
    numberOfBoxes: document.getElementById("numberOfBoxes"),
    planAvailed: document.getElementById("planAvailed"),
    accountNumber: document.getElementById("accountNumber"),

    // Activation - specific fields
    highestPlan: document.getElementById("highestPlan"),

    // Unsuccessful Call Out for Activation - specific fields
    callOutResult: document.getElementById("callOutResult"),
    numberCalled: document.getElementById("numberCalled"),
    remarks: document.getElementById("remarks"),
    itemsToVerify: document.getElementById("itemsToVerify"),

    // Successful Call Out with Compliance - specific fields
    ticketAssignment: document.getElementById("ticketAssignment"),
    pendingStatus: document.getElementById("pendingStatus"),
    complianceReason: document.getElementById("complianceReason"),

    // Compliance - specific fields

    // Docs for Approval - specific fields

    // Supervisor Approval - specific fields

    // Disapprove

    // PLDT

    // Radius Dual Play
    
    // Radius Standalone

    // Demo

    // Content & Syndication

    // HRH

    // VSAT Docs for Approval

    // VSAT for Activation

};

// inputs.accountNumber.addEventListener('input', function () {
//     // remove all non-digits and limit to 9
//     const cleaned = this.value.replace(/\D/g, '').slice(0, 9);
//     if (this.value !== cleaned) {
//         this.value = cleaned;
//         this.setSelectionRange(cleaned.length, cleaned.length);
//     }
// });

// // optional paste handler, also on inputs.accountNumber
// inputs.accountNumber.addEventListener('paste', function (e) {
//     e.preventDefault();
//     const text = (e.clipboardData || window.clipboardData).getData('text');
//     const digits = text.replace(/\D/g, '').slice(0, 10);
//     const start = this.selectionStart;
//     const end = this.selectionEnd;
//     const newVal = (this.value.slice(0, start) + digits + this.value.slice(end)).replace(/\D/g, '').slice(0, 10);

//     this.value = newVal;
//     const caret = Math.min(start + digits.length, newVal.length);
//     this.setSelectionRange(caret, caret);
// });

function getValue(input) {
    return input?.value.trim() || "";
}

// Clear all fields
function clearNotes() {
    Object.values(inputs).forEach(field => {
        if (!field) return; // skip if null (in case not all fields exist yet)

        // Handle different input types properly
        if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
            field.value = "";
        } else if (field.tagName === "SELECT") {
            field.selectedIndex = 0;
        } else if (field.type === "checkbox" || field.type === "radio") {
            field.checked = false;
        }
    });
}

function styleNotesArea() {
    inputs.notesValue.style.fontFamily = 'Courier New, Courier, monospace';
    inputs.notesValue.style.fontSize = '1.05rem';
}


/* ========================= FOR ACTIVATION ========================= */

function forActivation() {
    let notes = [];
    let activationNotes = [];

    if (getValue(inputs.contactMethod)) activationNotes.push(`CONTACT METHOD: ${getValue(inputs.contactMethod)}`);
    if (getValue(inputs.callRespondent)) activationNotes.push(`CALL RESPONDENT: ${getValue(inputs.callRespondent)}`);
    if (getValue(inputs.itemsDiscussed)) activationNotes.push(`ITEMS DISCUSSED: ${getValue(inputs.itemsDiscussed)}`);

    if (activationNotes.length) {
        notes.push(`PHONE VERIFICATION `);
        notes.push(...activationNotes, ``);
    }

    let activationDetails = [];

    if (getValue(inputs.highestPlan)) activationDetails.push(`HIGHEST PLAN APPROVED: ${getValue(inputs.highestPlan)}`);
    if (getValue(inputs.ticketNumber)) activationDetails.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (activationDetails.length) {
        notes.push(`ACTIVATION DETAILS `);
        notes.push(...activationDetails, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

// function generateActivationMessage() {
//     const boxes = getValue(inputs.numberOfBoxes);
//     const plan = getValue(inputs.planAvailed);
//     const acct = getValue(inputs.accountNumber);

//     let boxPart = '';
//     let verbPart = '';
//     let planPart = '';

//     if (boxes) {
//         const boxWord = boxes === '1' ? 'box' : 'boxes';
//         verbPart = boxes === '1' ? 'is' : 'are';
//         boxPart = `${boxes} Cignal ${boxWord}`;
//     }

//     if (plan) {
//         if (/^commercial/i.test(plan)) {
//         planPart = `under ${plan}`;
//         } else if (/^basic/i.test(plan)) {
//             // treat as Basic Theme Pack or anything else
//             planPart = `under ${plan}`;
//         }
//     }

//     const message = `Your ${boxPart} is now active ${planPart}. Account no is ${acct}. Got questions? Chat with us on FB at Cignal.`;

//     inputs.notesValue.value = message.replace(/\s+/g, ' ').trim();

//     styleNotesArea();
// }

// function isNumberKeyAccount(evt) {
//     const charCode = (evt.which) ? evt.which : evt.keyCode;

//     // Allow only digits 0–9
//     if (charCode < 48 || charCode > 57) {
//         return false; // block anything not 0–9
//     }

//     // Prevent more than 10 digits
//     const input = evt.target;
//     if (input.value.length >= 10) {
//         return false;
//     }

//     return true; // allow the keypress
// }

// Helper: normalize a raw plan input into the desired display text
function formatPlan(raw) {
    const p = (raw || '').trim();
    if (!p) return '';

    // If it's just digits: "290" -> "Plan 290"
    if (/^\d+$/.test(p)) return `Plan ${p}`;

    // If it looks like "Commercial", normalize to "Commercial Plan {digits?}"
    const cm = p.match(/^commercial(?:\s+plan)?(?:\s+(\d+))?/i);
    if (cm) return `Commercial Plan ${cm[1] ? cm[1] : ''}`.trim();

    // If it starts with "Basic Theme Pack", keep as-is (e.g., "Basic Theme Pack 300 Sports Action")
    if (/^basic theme pack/i.test(p)) return p;

    // Otherwise, keep whatever the user typed (e.g., "Plan 1650", "Promo Gold 1499", etc.)
    return p;
}

function generateActivationMessage() {
    const boxes = getValue(inputs.numberOfBoxes);   // e.g., "1", "2", "" (empty)
    const planRaw = getValue(inputs.planAvailed);   // e.g., "1650", "Basic Theme Pack 300 Sports Action", "Commercial 520"
    const acct = getValue(inputs.accountNumber);    // e.g., "9115392289"

    if (!boxes && !planRaw && !acct) {
        inputs.notesValue.value = '';
        styleNotesArea();
        return;
    }

    // Subject + verb
    const subject = boxes ? `${boxes} Cignal ${boxes === '1' ? 'box' : 'boxes'}` : '_';
    const verb = boxes && boxes !== '1' ? 'are' : 'is';

  // Plan phrase
    const plan = formatPlan(planRaw);

    // Build the message sentences cleanly
    const firstSentence = plan
    ? `Your ${subject} ${verb} now active under ${plan}.`
    : `Your ${subject} ${verb} now active under Plan _.`;

    const accountSentence = acct ? ` Account no is ${acct}.` : ' Account no is _.';
    const tail = ' Got questions? Chat with us on FB at Cignal.';

    const message = `${firstSentence}${accountSentence}${tail}`;

    inputs.notesValue.value = message.replace(/\s+/g, ' ').trim();
    styleNotesArea();
}

function copyCallOutNotes() {
    const parts = [];
    parts.push("PHONE VERIFICATION ");

    if (getValue(inputs.contactMethod)) parts.push(`CONTACT METHOD: ${getValue(inputs.contactMethod)}`);
    if (getValue(inputs.callRespondent)) parts.push(`CALL RESPONDENT: ${getValue(inputs.callRespondent)}`);
    if (getValue(inputs.itemsDiscussed)) parts.push(`ITEMS DISCUSSED: ${getValue(inputs.itemsDiscussed)}`);

    const callOutValue = parts.join('\n');

    navigator.clipboard.writeText(callOutValue)
        .then(() => {
            const startPos = inputs.notesValue.value.indexOf("PHONE VERIFICATION ");
            if (startPos !== -1) {
                const endPos = startPos + callOutValue.length;
                inputs.notesValue.focus();
                inputs.notesValue.setSelectionRange(startPos, endPos);
            }
        })
        .catch(error => console.error('Error copying text: ', error));
}

function copyActivationNotes() {
    const parts = [];
    parts.push("ACTIVATION DETAILS ");

    if (getValue(inputs.highestPlan)) parts.push(`HIGHEST PLAN APPROVED: ${getValue(inputs.highestPlan)}`);
    if (getValue(inputs.ticketNumber)) parts.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    const activationNotes = parts.join('\n');

    navigator.clipboard.writeText(activationNotes)
        .then(() => {
            const startPos = inputs.notesValue.value.indexOf("ACTIVATION DETAILS ");
            if (startPos !== -1) {
                const endPos = startPos + activationNotes.length;
                inputs.notesValue.focus();
                inputs.notesValue.setSelectionRange(startPos, endPos);
            }
        })
        .catch(error => console.error('Error copying text: ', error));
}

function copyNotes() {
    inputs.notesValue.select();
    inputs.notesValue.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function copiedOptionHighestPlan(option) {
    highestPlan.value = option;
    forActivation();
}

/* ========================= UNSUCCESSFUL CALL OUT ========================= */

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Allow digits (0-9), space (32), and slash "/" (47)
    if ((charCode >= 48 && charCode <= 57) || charCode === 32 || charCode === 47) {
        return true;
    } else {
        return false;
    }
}

function unsuccessful() {
    let notes = [];
    let unsuccNotes = [];

    if (getValue(inputs.callOutResult)) unsuccNotes.push(`CALL OUT RESULT: ${getValue(inputs.callOutResult)}`);
    if (getValue(inputs.numberCalled)) unsuccNotes.push(`NUMBER CALLED: ${getValue(inputs.numberCalled)}`);
    if (getValue(inputs.remarks)) unsuccNotes.push(`REMARKS: ${getValue(inputs.remarks)}`);
    if (getValue(inputs.itemsToVerify)) unsuccNotes.push(`ITEMS TO VERIFY: ${getValue(inputs.itemsToVerify)}`);

    if (unsuccNotes.length) {
        notes.push(...unsuccNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function copiedOptionReason(option) {
    document.getElementById("remarks").value = option;
    unsuccessful();
}

/* ========================= WITH COMPLIANCE ISSUE ========================= */

function withCompliance() {
    let notes = [];
    let complianceNotes = [];

    if (getValue(inputs.contactMethod)) complianceNotes.push(`CONTACT METHOD: ${getValue(inputs.contactMethod)}`);
    if (getValue(inputs.callRespondent)) complianceNotes.push(`CALL RESPONDENT: ${getValue(inputs.callRespondent)}`);
    if (getValue(inputs.itemsDiscussed)) complianceNotes.push(`ITEMS DISCUSSED: ${getValue(inputs.itemsDiscussed)}`);
    if (getValue(inputs.ticketAssignment)) complianceNotes.push(`TICKET ASSIGNMENT: ${getValue(inputs.ticketAssignment)}`);
    if (getValue(inputs.ticketNumber)) complianceNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (complianceNotes.length) {
        notes.push(`PHONE VERIFICATION `);
        notes.push(...complianceNotes, ``)
    }

    let pendingNotes = [];

    if (getValue(inputs.pendingStatus)) pendingNotes.push(`PENDING STATUS: ${getValue(inputs.pendingStatus)}`);
    if (getValue(inputs.complianceReason)) pendingNotes.push(`COMPLIANCE REASON: ${getValue(inputs.complianceReason)}`);

    if (pendingNotes.length) {
        notes.push(...pendingNotes, ``)
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function copyCallOutWithComplianceNotes() {
    const parts = [];
    parts.push("PHONE VERIFICATION ");

    if (getValue(inputs.contactMethod)) parts.push(`CONTACT METHOD: ${getValue(inputs.contactMethod)}`);
    if (getValue(inputs.callRespondent)) parts.push(`CALL RESPONDENT: ${getValue(inputs.callRespondent)}`);
    if (getValue(inputs.itemsDiscussed)) parts.push(`ITEMS DISCUSSED: ${getValue(inputs.itemsDiscussed)}`);
    if (getValue(inputs.ticketAssignment)) parts.push(`TICKET ASSIGNMENT: ${getValue(inputs.ticketAssignment)}`);
    if (getValue(inputs.ticketNumber)) parts.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    const callOutWithComplianceValue = parts.join('\n');

    navigator.clipboard.writeText(callOutWithComplianceValue)
        .then(() => {
            const startPos = inputs.notesValue.value.indexOf("PHONE VERIFICATION");
            if (startPos !== -1) {
                const endPos = startPos + callOutWithComplianceValue.length;
                inputs.notesValue.focus();
                inputs.notesValue.setSelectionRange(startPos, endPos);
            }
        })
        .catch(error => console.error('Error copying text: ', error));
}

function copyPendingNotes() {
    const parts = [];

    if (getValue(inputs.pendingStatus)) parts.push(`PENDING STATUS: ${getValue(inputs.pendingStatus)}`);
    if (getValue(inputs.complianceReason)) parts.push(`COMPLIANCE REASON: ${getValue(inputs.complianceReason)}`);

    const pendingNotes = parts.join('\n');

    navigator.clipboard.writeText(pendingNotes)
        .then(() => {
            const startPos = inputs.notesValue.value.indexOf(pendingNotes);
            if (startPos !== -1) {
                const endPos = startPos + pendingNotes.length;
                inputs.notesValue.focus();
                inputs.notesValue.setSelectionRange(startPos, endPos);
            }
        })
        .catch(error => console.error('Error copying text: ', error));
}