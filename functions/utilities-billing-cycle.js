const billingCycleDb = [
    {
        "Super Region": "Metro Manila",
        "Regions": ["NCR"],
        "Cities": ["Caloocan City", "Las Piñas City", "Makati City", "Manila", "Marikina City", "Muntinlupa City", "Navotas City", "Parañaque City", "Pasay City", 
                    "Pasig City", "Quezon City", "San Juan City", "Taguig City", "Valenzuela City", "Pateros", "Malabon City", "Mandaluyong City"],
        "Billing Cycle": "BC1",
        "Bill generation": "1st",
        "Bill delivery": "12th",
        "E-Bill delivery": ["14th", "15th"],
        "Bill In-Transmit SMS": "15th",
        "Due date": "25th"
    },
    {
        "Super Region": "North Luzon",
        "Regions": ["Region I", "Region II", "Region III", "CAR"],
        "Cities/Provinces": ["Pangasinan", "La Union", "Ilocos Norte", "Ilocos Sur", "Cagayan", "Isabela", "Nueva Vizcaya", "Benguet", "Abra", "Apayao", "Ifugao", 
                    "Kalinga", "Mountain Province", "Batanes", "Quirino", "Aurora", "Bataan", "Bulacan", "Nueva Ecija", "Pampanga", "Tarlac", "Zambales",
                    "Baguio City"],
        "Billing Cycle": "BC2",
        "Bill generation": "6th",
        "Bill delivery": "19th",
        "E-Bill delivery": ["19th", "20th"],
        "Bill In-Transmit SMS": "20th",
        "Due date": "30th"
    },
    {
        "Super Region": "South Luzon",
        "Regions": ["Region IV-A", "Region IV-B", "Bicol Region"],
        "Cities/Provinces": ["Laguna", "Batangas", "Cavite", "Quezon", "Rizal", "Occidental Mindoro", "Oriental Mindoro", "Marinduque", "Camarines Sur", "Albay", 
                    "Camarines Norte", "Sorsogon", "Catanduanes", "Masbate", "Romblon", "Palawan","Puerto Princesa City", "Lucena City", "Batangas City", "Lipa City",
                    "San Pablo City", "Calapan City", "Mamburao City", "Boac City", "Masbate City", "Naga City", "Iriga City", "Tabaco City", "Legazpi City", "Sorsogon City"],
        "Billing Cycle": "BC3",
        "Bill generation": "11th",
        "Bill delivery": "24th",
        "E-Bill delivery": ["24th", "25th"],
        "Bill In-Transmit SMS": "25th",
        "Due date": "5th of next month"
    },
    {
        "Super Region": "Visayas",
        "Regions": ["Region VI", "Region VII", "Region VIII"],
        "Cities/Provinces": ["Iloilo", "Negros Occidental", "Dumaguete", "Aklan", "Antique", "Capiz", "Guimaras", "Bohol", "Cebu", "Negros Oriental", "Siquijor", 
                    "Biliran", "Eastern Samar", "Leyte", "Northern Samar", "Southern Samar", "Western Samar", "Dinagat Islands"],
        "Billing Cycle": "BC4",
        "Bill generation": "16th",
        "Bill delivery": "29th",
        "E-Bill delivery": ["29th", "30th"],
        "Bill In-Transmit SMS": "30th",
        "Due date": "10th of next month"
    },
    {
        "Super Region": "Mindanao",
        "Regions": ["Region IX", "Region X", "Region XI", "Region XII", "CARAGA", "BARMM"],
        "Cities/Provinces": ["Basilan", "Davao Del Sur", "Cagayan de Oro", "Zamboanga Sibugay", "Zamboanga Del Norte", "Zamboanga Del Sur", "Butuan", "Bukidnon", 
                    "Camiguin", "Lanao Del Norte", "Misamis Occidental", "Misamis Oriental", "Compostela Valley", "Davao Oriental", "Davao Del Norte", "Cotabato", "Maguindanao", 
                    "Sarangani", "South Cotabato", "Sultan Kudarat", "Lanao Del Sur", "Shariff Kabunsuan", "Sulu", "Tawi-Tawi", "Agusan Del Norte", "Agusan Del Sur", 
                    "Surigao Del Norte", "Surigao Del Sur","Davao City", "General Santos City", "Koronadal City", "Tagum City", "Isabela City", "Zamboanga City", "Cotabato City",
                    "Kidapawan City", "Lamitan City", "Malaybalay City", "Oroquieta City", "Ozamiz City", "Tangub City", "Cabadbaran City", "Bayugan City", "Bislig City"],
        "Billing Cycle": "BC5",
        "Bill generation": "21st",
        "Bill delivery": "4th of next month",
        "E-Bill delivery": ["4th", "5th of next month"],
        "Bill In-Transmit SMS": "5th of next month",
        "Due date": "15th of next month"
    }
];

function getNextBillingDate(billingDay, today) {
    let billDate = new Date(today.getFullYear(), today.getMonth(), billingDay);
    if (billDate < today) {
        billDate.setMonth(billDate.getMonth() + 1);
    }
    return billDate;
}

function formatDate(date) {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function searchBilling() {
    const searchBox = document.getElementById("inputAddress");
    const query = searchBox.value.trim().toLowerCase();
        
    if (query === "") {
        var myModal = new bootstrap.Modal(document.getElementById('danger-alert-modal'));
        myModal.show();
        return;
    }

    const today = new Date();
    const result = billingCycleDb.find(region =>
        region["Cities"]?.some(city => city.toLowerCase() === query) ||
        region["Cities/Provinces"]?.some(province => province.toLowerCase() === query)
    );

    if (result) {
        document.getElementById("activationDate").textContent = formatDate(today);

        let billGenDay = parseInt(result["Bill generation"]);
        let billGenDate = getNextBillingDate(billGenDay, today);

        let billDelDay = parseInt(result["Bill delivery"]);
        let billDelDate = getNextBillingDate(billDelDay, billGenDate);

        let eBillDays = result["E-Bill delivery"].map(day => formatDate(getNextBillingDate(parseInt(day), billGenDate)));
        let billSmsDate = getNextBillingDate(parseInt(result["Bill In-Transmit SMS"]), billGenDate);

        let dueDate;

        if (result["Due date"].includes("next month")) {
            dueDate = new Date(billGenDate);
            dueDate.setMonth(dueDate.getMonth() + 1);
            dueDate.setDate(parseInt(result["Due date"]));
        } 
        else {
            dueDate = getNextBillingDate(parseInt(result["Due date"]), billGenDate);
        }

        document.getElementById("address").textContent = query.charAt(0).toUpperCase() + query.slice(1);
        document.getElementById("region").textContent = result["Super Region"];
        document.getElementById("billGeneration").textContent = formatDate(billGenDate);
        document.getElementById("billDelivery").textContent = formatDate(billDelDate);
        document.getElementById("eBillDelivery").textContent = eBillDays.join(" or ");
        document.getElementById("billSMS").textContent = formatDate(billSmsDate);
        document.getElementById("dueDate").textContent = formatDate(dueDate);
    } 
    else {
        var infoModal = new bootstrap.Modal(document.getElementById('info-alert-modal'));
        infoModal.show();
    }
}


