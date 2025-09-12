let baseModel  = {
    clearText: document.getElementById("clearText"),
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
    itemsToVerify: document.getElementById("itemsToVerify"),
    highestPlanApproved: document.getElementById("highestPlanApproved"),
    accountNumber: document.getElementById("accountNumber"),

    // Successful Call Out for Activation - specific fields
    contactMethod: document.getElementById("contactMethod"),
    itemsDiscussed: document.getElementById("itemsDiscussed"),
    sentViaSoprano: document.getElementById("sentViaSoprano"),

    // Text Blast - specific fields
    numberOfBoxes: document.getElementById("numberOfBoxes"),
    planAvailed: document.getElementById("planAvailed"),

    // Unsuccessful Call Out for Activation - specific fields
    callOutResult: document.getElementById("callOutResult"),
    numberCalled: document.getElementById("numberCalled"),
    remarks: document.getElementById("remarks"),

    // Successful Call Out with Compliance - specific fields
    ticketAssignment: document.getElementById("ticketAssignment"),
    pendingStatus: document.getElementById("pendingStatus"),
    complianceReason: document.getElementById("complianceReason"),

    // Docs for Approval, Supervisor Approval, Disapprove - specific fields
    reasonApproved: document.getElementById("reasonApproved"),
    reasonDisapproved: document.getElementById("reasonDisapproved"),

    // PLDT
    setTopBox: document.getElementById("setTopBox"),
    smartCard: document.getElementById("smartCard"),
    serialNumber: document.getElementById("serialNumber"),
    sameCustomer: document.getElementById("sameCustomer"),
    diffCustomer: document.getElementById("diffCustomer"),
    mainBox: document.getElementById("mainBox"),
    secondBox: document.getElementById("secondBox"),
    thirdBox: document.getElementById("thirdBox"),

    // Radius Dual Play
    radiusAcctNoDualPlay: document.getElementById("radiusAcctNoDualPlay"),
    broadbandPlanDualPlay: document.getElementById("broadbandPlanDualPlay"),
    iptvDualPlay: document.getElementById("iptvDualPlay"),
    lockInDualPlay: document.getElementById("lockInDualPlay"),
    promoDualPlay: document.getElementById("promoDualPlay"),
    propertyTypeDualPlay: document.getElementById("propertyTypeDualPlay"),
    acctNoDualPlay: document.getElementById("acctNoDualPlay"),
    ticketNoDualPlay: document.getElementById("ticketNumberDualPlay"),

    // Radius Standalone
    radiusAcctNoStandalone: document.getElementById("radiusAcctNoStandalone"),
    broadbandPlanStandalone: document.getElementById("broadbandPlanStandalone"),
    lockInStandalone: document.getElementById("lockInStandalone"),
    promoStandalone: document.getElementById("promoStandalone"),
    propertyTypeStandalone: document.getElementById("propertyTypeStandalone"),
    acctNoStandalone: document.getElementById("acctNoStandalone"),

    // Demo
    demoAccount: document.getElementById("demoAccount"),
    duration: document.getElementById("duration"),
    demoTicket: document.getElementById("demoTicket"),
    demoRemarks: document.getElementById("demoRemarks"),

    // Content & Syndication
    syndicationAcct: document.getElementById("syndicationAcct"),
    syndicationChannels: document.getElementById("syndicationChannels"),
    contract: document.getElementById("contract"),
    syndicationRemarks: document.getElementById("syndicationRemarks"),
    syndicationTicket: document.getElementById("syndicationTicket"),

    // HRH
    hrhAcct: document.getElementById("hrhAcct"),
    hrhLockIn: document.getElementById("hrhLockIn"),
    hrhBoxes: document.getElementById("hrhBoxes"),
    hrhPlan: document.getElementById("hrhPlan"),
    hrhTicket: document.getElementById("hrhTicket"),

    // VSAT Docs for Approval
    accountDocs: document.getElementById("accountDocs"),
    serial: document.getElementById("serial"),
    planCode: document.getElementById("planCode"),
    planName: document.getElementById("planName"),
    address: document.getElementById("address"),
    coordinates: document.getElementById("coordinates"),
    installer: document.getElementById("installer"),
    remarks: document.getElementById("remarks"),

    // VSAT for Activation
    planAvailed: document.getElementById("planAvailed"),
    lockIn: document.getElementById("lockIn"),
    modem: document.getElementById("modem"),
    accountCignal: document.getElementById("accountCignal")
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

function copyNotes() {
    inputs.notesValue.select();
    inputs.notesValue.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

// Clear all fields
function clearNotes() {
    Object.values(inputs).forEach(field => {
        if (!field) return; // skip if null (in case not all fields exist yet)

        // handle checkboxes and radios first
        if (field.type === "checkbox" || field.type === "radio") {
            field.checked = false;
        }
        // handle text-like inputs and textareas
        else if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
            field.value = "";
        } 
        // handle selects
        else if (field.tagName === "SELECT") {
            field.selectedIndex = 0;
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

    if (getValue(inputs.highestPlanApproved)) activationDetails.push(`HIGHEST PLAN APPROVED: ${getValue(inputs.highestPlanApproved)}`);
    if (getValue(inputs.ticketNumber)) activationDetails.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (inputs.sentViaSoprano.checked) activationDetails.push(`SENT ACTIVATION MESSAGE VIA SOPRANO`);

    if (activationDetails.length) {
        notes.push(`ACTIVATION DETAILS `);
        notes.push(...activationDetails, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function isNumberKeyAccount(evt) {  
    const charCode = (evt.which) ? evt.which : evt.keyCode;

    // Allow only digits 0–9
    if (charCode < 48 || charCode > 57) {
        return false; // block anything not 0–9
    }

    // Prevent more than 10 digits
    const input = evt.target;
    if (input.value.length >= 10) {
        return false;
    }

    return true; // allow the keypress
}

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

    if (getValue(inputs.highestPlanApproved)) parts.push(`HIGHEST PLAN APPROVED: ${getValue(inputs.highestPlanApproved)}`);
    if (getValue(inputs.ticketNumber)) parts.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);
    if (inputs.sentViaSoprano.checked) parts.push(`SENT ACTIVATION MESSAGE VIA SOPRANO`);

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

function copiedOptionHighestPlan(option) {
    highestPlanApproved.value = option;
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

/* ========================= DOCS AND SUP APPROVAL ========================= */

function docsForApproval() {
    let notes = [];
    let docsNotes = [];

    if (getValue(inputs.itemsToVerify)) docsNotes.push(`ITEMS TO VERIFY: ${getValue(inputs.itemsToVerify)}`);
    if (getValue(inputs.highestPlanApproved)) docsNotes.push(`HIGHEST PLAN APPROVED: ${getValue(inputs.highestPlanApproved)}`);
    if (getValue(inputs.ticketNumber)) docsNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (docsNotes.length) {
        notes.push(`DOCS APPROVED `);
        notes.push(...docsNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function supApproved() {
    let notes = [];
    let supApprovedNotes = [];

    if (getValue(inputs.reasonApproved)) supApprovedNotes.push(`REASON: ${getValue(inputs.reasonApproved)}`);
    if (getValue(inputs.ticketNumber)) supApprovedNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (supApprovedNotes.length) {
        notes.push(`FOR SUP APPROVAL `);
        notes.push(...supApprovedNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function supDisapproved() {
    let notes = [];
    let supDisapprovedNotes = [];

    if (getValue(inputs.reasonDisapproved)) supDisapprovedNotes.push(`REASON: ${getValue(inputs.reasonDisapproved)}`);
    if (getValue(inputs.ticketNumber)) supDisapprovedNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (supDisapprovedNotes.length) {
        notes.push(`FOR SUP DISAPPROVAL `);
        notes.push(...supDisapprovedNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

/* ========================= PLDT & RADIUS ========================= */

function activationPLDT() {
    const account = getValue(inputs.accountNumber);
    const ticket = getValue(inputs.ticketNumber);
    const stb = getValue(inputs.setTopBox);
    const sc = getValue(inputs.smartCard);
    const sN = getValue(inputs.serialNumber);

    const nothingSelected =
        !account && !ticket && !stb && !sc && !sN &&
        !inputs.mainBox.checked &&
        !inputs.sameCustomer.checked &&
        !inputs.diffCustomer.checked &&
        !inputs.secondBox.checked &&
        !inputs.thirdBox.checked;

    if (nothingSelected) {
        inputs.notesValue.value = '';   // clear textarea
        styleNotesArea();
        return; // stop the function here
    }

    let message = '';
    let dupText = '';
        if(stb && sc) {
            dupText = `STB ${stb} AND SC ${sc}`;
        }
        else if(sN) {
            dupText = `SERIAL NO ${sN}`;
        }

    if (inputs.mainBox.checked) {
        message = `Hi PLDT Team, the activation of the first box or Test Channel for the account should be included in the automation process.`;
    }
    else if (inputs.sameCustomer.checked) {
        let ref = '';
        if (account && ticket) {
            ref = `REFERENCE TO ACCOUNT NUMBER ${account} // ${ticket}`;
        }
        else if (account) {
            ref = `REFERENCE TO ACCOUNT NUMBER ${account}`;
        }
        else if (ticket) {
            ref = `REFERENCE TO TICKET NUMBER ${ticket}`;
        }

        message = `PLDT CLOSED\n${dupText} ALREADY ACTIVATED UNDER THE SAME CUSTOMER NAME${ref ? ' / ' + ref : ''}`;
    }
    else if (inputs.diffCustomer.checked) {
        let ref = '';
        if (account && ticket) {
            ref = `REFERENCE TO ACCOUNT NUMBER ${account} // ${ticket}`;
        }
        else if (account) {
            ref = `REFERENCE TO ACCOUNT NUMBER ${account}`;
        }
        else if (ticket) {
            ref = `REFERENCE TO TICKET NUMBER ${ticket}`;
        }

        message = `PLDT CLOSED\n${dupText} ALREADY ACTIVATED UNDER A DIFFERENT CUSTOMER NAME${ref ? ' / ' + ref : ''}`;
    }
    else {
        message = `PLDT ACTIVE\n`;

        if (account) {
            message += `CIGNAL ACCOUNT NUMBER: ${account}\n`;
        }

        if (ticket) {
            message += `TICKET NUMBER: ${ticket}`;
        }

        if (inputs.secondBox.checked && inputs.thirdBox.checked) {
            message += ` / 2ND AND 3RD BOX`;
        }
        else if (inputs.secondBox.checked) {
            message += ` / 2ND BOX`;
        }
        else if (inputs.thirdBox.checked) {
            message += ` / 3RD BOX`;
        }    
    }

    inputs.notesValue.value = message;
    styleNotesArea();
}

function activationDualPlay() {
    let notes = [];
    let actiDualPlayNotes = [];

    if (getValue(inputs.radiusAcctNoDualPlay)) actiDualPlayNotes.push(`RADIUS ACCOUNT NUMBER: ${getValue(inputs.radiusAcctNoDualPlay)}`);
    if (getValue(inputs.broadbandPlanDualPlay)) actiDualPlayNotes.push(`BROADBAND PLAN: ${getValue(inputs.broadbandPlanDualPlay)}`);
    if (getValue(inputs.iptvDualPlay)) actiDualPlayNotes.push(`IPTV: ${getValue(inputs.iptvDualPlay)}`);
    if (getValue(inputs.lockInDualPlay)) actiDualPlayNotes.push(`LOCK-IN PERIOD: ${getValue(inputs.lockInDualPlay)}`);
    if (getValue(inputs.promoDualPlay)) actiDualPlayNotes.push(`PROMOTION: ${getValue(inputs.promoDualPlay)}`);
    if (getValue(inputs.propertyTypeDualPlay)) actiDualPlayNotes.push(`PROPERTY TYPE: ${getValue(inputs.propertyTypeDualPlay)}`);
    if (getValue(inputs.acctNoDualPlay)) actiDualPlayNotes.push(`CIGNAL ACCOUNT NUMBER: ${getValue(inputs.acctNoDualPlay)}`);
    if (getValue(inputs.ticketNoDualPlay)) actiDualPlayNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNoDualPlay)}`);

    if (actiDualPlayNotes.length) {
        notes.push(`RADIUS ACTIVE `);
        notes.push(...actiDualPlayNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function activationStandalone() {
    let notes = [];
    let actiStandaloneNotes = [];

    if (getValue(inputs.radiusAcctNoStandalone)) actiStandaloneNotes.push(`RADIUS ACCOUNT NUMBER: ${getValue(inputs.radiusAcctNoStandalone)}`);
    if (getValue(inputs.broadbandPlanStandalone)) actiStandaloneNotes.push(`BROADBAND PLAN: ${getValue(inputs.broadbandPlanStandalone)}`);
    if (getValue(inputs.lockInStandalone)) actiStandaloneNotes.push(`LOCK-IN PERIOD: ${getValue(inputs.lockInStandalone)}`);
    if (getValue(inputs.promoStandalone)) actiStandaloneNotes.push(`PROMOTION: ${getValue(inputs.promoStandalone)}`);
    if (getValue(inputs.propertyTypeStandalone)) actiStandaloneNotes.push(`PROPERTY TYPE: ${getValue(inputs.propertyTypeStandalone)}`);
    if (getValue(inputs.acctNoStandalone)) actiStandaloneNotes.push(`CIGNAL ACCOUNT NUMBER: ${getValue(inputs.acctNoStandalone)}`);

    if (actiStandaloneNotes.length) {
        notes.push(`RADIUS ACTIVE `);
        notes.push(...actiStandaloneNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

/* ========================= DEMO CONTENT/SYNDICATION & HRH ========================= */

function activationDemo() {
    let notes = [];
    let demoNotes = [];

    if (getValue(inputs.demoAccount)) demoNotes.push(`ACCOUNT NUMBER: ${getValue(inputs.demoAccount)}`);
    if (getValue(inputs.duration)) demoNotes.push(`DURATION: ${getValue(inputs.duration)}`);
    if (getValue(inputs.demoTicket)) demoNotes.push(`TICKET NUMBER: ${getValue(inputs.demoTicket)}`);
    if (getValue(inputs.demoRemarks)) demoNotes.push(`REMARKS: ${getValue(inputs.demoRemarks)}`);

    if (demoNotes.length) {
        notes.push(`DEMO ACTIVE `);
        notes.push(...demoNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function activationSyndication() {
    let notes = [];
    let syndicationNotes = [];

    if (getValue(inputs.syndicationAcct)) syndicationNotes.push(`ACCOUNT NUMBER: ${getValue(inputs.syndicationAcct)}`);
    if (getValue(inputs.syndicationChannels)) syndicationNotes.push(`CHANNELS: ${getValue(inputs.syndicationChannels)}`);
    if (getValue(inputs.contract)) syndicationNotes.push(`CONTRACT: ${getValue(inputs.contract)}`);
    if (getValue(inputs.syndicationTicket)) syndicationNotes.push(`TICKET NUMBER: ${getValue(inputs.syndicationTicket)}`);
    if (getValue(inputs.syndicationRemarks)) syndicationNotes.push(`REMARKS: ${getValue(inputs.syndicationRemarks)}`);

    if (syndicationNotes.length) {
        notes.push(`ACCOUNT ACTIVE `);
        notes.push(...syndicationNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function activationHRH() {
    let notes = [];
    let hrhNotes = [];

    if (getValue(inputs.hrhPlan)) hrhNotes.push(`ACCOUNT NUMBER: ${getValue(inputs.hrhAcct)}`);
    if (getValue(inputs.hrhLockIn)) hrhNotes.push(`CHANNELS: ${getValue(inputs.hrhLockIn)}`);
    if (getValue(inputs.hrhBoxes)) hrhNotes.push(`CONTRACT: ${getValue(inputs.hrhBoxes)}`);
    if (getValue(inputs.hrhAcct)) hrhNotes.push(`TICKET NUMBER: ${getValue(inputs.hrhAcct)}`);
    if (getValue(inputs.hrhTicket)) hrhNotes.push(`REMARKS: ${getValue(inputs.hrhTicket)}`);

    if (hrhNotes.length) {
        notes.push(`HRH ACTIVE `);
        notes.push(...hrhNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

/* ========================= VSAT DOCS APPROVAL & ACTIVATION ========================= */

function approvalVSAT() {
    let notes = [];
    let approvalVSATNotes = [];

    if (getValue(inputs.accountDocs)) approvalVSATNotes.push(`ACCOUNT NUMBER: ${getValue(inputs.accountDocs)}`);
    if (getValue(inputs.serial)) approvalVSATNotes.push(`SERIAL NUMBER: ${getValue(inputs.serial)}`);
    if (getValue(inputs.planCode)) approvalVSATNotes.push(`PLAN CODE: ${getValue(inputs.planCode)}`);
    if (getValue(inputs.planName)) approvalVSATNotes.push(`PLAN NAME: ${getValue(inputs.planName)}`);
    if (getValue(inputs.address)) approvalVSATNotes.push(`ADDRESS: ${getValue(inputs.address)}`);
    if (getValue(inputs.coordinates)) approvalVSATNotes.push(`COORDINATES: ${getValue(inputs.coordinates)}`);
    if (getValue(inputs.installer)) approvalVSATNotes.push(`INSTALLER: ${getValue(inputs.installer)}`);
    if (getValue(inputs.remarks)) approvalVSATNotes.push(`REMARKS: ${getValue(inputs.remarks)}`);

    if (approvalVSATNotes.length) {
        notes.push(`VSAT DOCS APPROVED `);
        notes.push(...approvalVSATNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}

function activationVSAT() {
    let notes = [];
    let actiVSATNotes = [];

    if (getValue(inputs.planAvailed)) actiVSATNotes.push(`PLAN AVAILED: ${getValue(inputs.planAvailed)}`);
    if (getValue(inputs.lockIn)) actiVSATNotes.push(`LOCK-IN: ${getValue(inputs.lockIn)}`);
    if (getValue(inputs.modem)) actiVSATNotes.push(`MODEM SERIAL: ${getValue(inputs.modem)}`);
    if (getValue(inputs.accountCignal)) actiVSATNotes.push(`ACCOUNT NUMBER: ${getValue(inputs.accountCignal)}`);
    if (getValue(inputs.ticketNumber)) actiVSATNotes.push(`TICKET NUMBER: ${getValue(inputs.ticketNumber)}`);

    if (actiVSATNotes.length) {
        notes.push(`VSAT ACTIVE `);
        notes.push(...actiVSATNotes, ``);
    }

    inputs.notesValue.value = notes.length ? notes.join('\n') : '';
    styleNotesArea();
}