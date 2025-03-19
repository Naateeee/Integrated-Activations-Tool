const billingCycleDb = [
    {
        "Super Region": "Metro Manila",
        "Regions": ["NCR"],
        "Cities": ["Caloocan City", "Las Pinas City", "Makati City", "Manila", "Marikina City", "Muntinlupa City", "Navotas City", "Paranaque City", "Pasay City", 
            "Pasig City", "Quezon City", "San Juan City", "Taguig City", "Valenzuela City", "Pateros", "Malabon City", "Mandaluyong City"],
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "Super Region": "North Luzon",
        "Regions": ["Region I", "Region II", "Region III", "CAR"],
        "Cities/Provinces": ["Pangasinan", "La Union", "Ilocos Norte", "Ilocos Sur", "Cagayan", "Isabela", "Nueva Vizcaya", "Benguet", "Abra", "Apayao", "Ifugao", 
            "Kalinga", "Mountain Province", "Batanes", "Quirino", "Aurora", "Bataan", "Bulacan", "Nueva Ecija", "Pampanga", "Tarlac", "Zambales"],
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "Super Region": "South Luzon",
        "Regions": ["Region IV-A", "Region IV-B", "Bicol Region"],
        "Cities/Provinces": ["Laguna", "Batangas", "Cavite", "Quezon", "Rizal", "Occidental Mindoro", "Oriental Mindoro", "Marinduque", "Camarines Sur", "Albay", 
            "Camarines Norte", "Sorsogon", "Catanduanes", "Masbate", "Romblon", "Palawan"],
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the following month"
    },
    {
        "Super Region": "Visayas",
        "Regions": ["Region VI", "Region VII", "Region VIII"],
        "Cities/Provinces": ["Iloilo", "Negros Occidental", "Dumaguete", "Aklan", "Antique", "Capiz", "Guimaras", "Bohol", "Cebu", "Negros Oriental", "Siquijor", 
            "Biliran", "Eastern Samar", "Leyte", "Northern Samar", "Southern Samar", "Western Samar", "Dinagat Islands"],
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the following month"
    },
    {
        "Super Region": "Mindanao",
        "Regions": ["Region IX", "Region X", "Region XI", "Region XII", "CARAGA", "BARMM"],
        "Cities/Provinces": ["Basilan", "Davao Del Sur", "Cagayan de Oro", "Zamboanga Sibugay", "Zamboanga Del Norte", "Zamboanga Del Sur", "Butuan", "Bukidnon", 
            "Camiguin", "Lanao Del Norte", "Misamis Occidental", "Misamis Oriental", "Compostela Valley", "Davao Oriental", "Davao Del Norte", "Cotabato", "Maguindanao", 
            "Sarangani", "South Cotabato", "Sultan Kudarat", "Lanao Del Sur", "Shariff Kabunsuan", "Sulu", "Tawi-Tawi", "Agusan Del Norte", "Agusan Del Sur", 
            "Surigao Del Norte", "Surigao Del Sur"],
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the following month",
        "E-Bill delivery": "4th or 5th of the following month",
        "Bill In-Transmit SMS": "5th of the following month",
        "Due date": "15th of the following month"
    }
];

/* // final version based on billing cycle
function searchBilling() {
    const searchBox = document.getElementById("inputAddress");
    const query = searchBox.value.trim().toLowerCase(); // Convert input to lowercase

    if (query === "") {
        var myModal = new bootstrap.Modal(document.getElementById('danger-alert-modal'));
        myModal.show();
        return;
    }

    // Find the matching super region based on the city/province input
    const result = billingCycleDb.find(region =>
        (region["Cities"]?.some(city => city.toLowerCase() === query) || 
        region["Cities/Provinces"]?.some(province => province.toLowerCase() === query))
    );

    if (result) {
        // Get today's date (Date of Activation)
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("activationDate").textContent = today.toLocaleDateString("en-US", options);

        // Capitalize first letter for display
        const formattedQuery = query.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        // Populate table with billing details
        document.getElementById("address").textContent = formattedQuery;
        document.getElementById("region").textContent = result["Super Region"];
        document.getElementById("billGeneration").textContent = result["Bill generation"];
        document.getElementById("billDelivery").textContent = result["Bill delivery"];
        document.getElementById("eBillDelivery").textContent = result["E-Bill delivery"];
        document.getElementById("billSMS").textContent = result["Bill In-Transmit SMS"];
        document.getElementById("dueDate").textContent = result["Due date"];
    } else {
        var infoModal = new bootstrap.Modal(document.getElementById('info-alert-modal'));
        infoModal.show();
    }
} */

    function searchBilling() {
        const searchBox = document.getElementById("inputAddress");
        const query = searchBox.value.trim().toLowerCase(); // Convert input to lowercase
    
        if (query === "") {
            var myModal = new bootstrap.Modal(document.getElementById('danger-alert-modal'));
            myModal.show();
            return;
        }
    
        // Find the matching super region based on the city/province input
        const result = billingCycleDb.find(region =>
            region["Cities"]?.some(city => city.toLowerCase() === query) ||
            region["Cities/Provinces"]?.some(province => province.toLowerCase() === query)
        );
    
        if (result) {
            const today = new Date();
            const currentMonth = today.getMonth(); // 0 = January, 1 = February...
            const currentYear = today.getFullYear();
            const nextMonth = (currentMonth + 1) % 12;
            const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    
            function convertToDate(dateString) {
                const month = dateString.includes("following") ? nextMonth : currentMonth;
                const year = dateString.includes("following") ? nextYear : currentYear;
    
                const match = dateString.match(/\d+/g); // Extract numbers from the text
                if (!match) return dateString; // Return original text if no numbers found
    
                return match.map(day => new Date(year, month, parseInt(day)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })).join(" & ");
            }
    
            document.getElementById("activationDate").textContent = today.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    
            document.getElementById("address").textContent = query.charAt(0).toUpperCase() + query.slice(1);
            document.getElementById("region").textContent = result["Super Region"];
            document.getElementById("billGeneration").textContent = convertToDate(result["Bill generation"]);
            document.getElementById("billDelivery").textContent = convertToDate(result["Bill delivery"]);
            document.getElementById("eBillDelivery").textContent = convertToDate(result["E-Bill delivery"]);
            document.getElementById("billSMS").textContent = convertToDate(result["Bill In-Transmit SMS"]);
            document.getElementById("dueDate").textContent = convertToDate(result["Due date"]);
        } else {
            var infoModal = new bootstrap.Modal(document.getElementById('info-alert-modal'));
            infoModal.show();
        }
    }
    