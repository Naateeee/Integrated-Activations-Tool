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
}

/*
const billingCycleDb1 = [
    {
        "City / Province": "Caloocan City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Las Pinas City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Makati City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Malabon City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Mandaluyong City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Manila",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Marikina City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Muntinlupa City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Navotas City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Paranaque City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Pasay City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Pasig City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Pateros",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Quezon City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "San Juan City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Taguig City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Valenzuela City",
        "Region": "NCR",
        "Super Region": "Metro Manila",
        "Billing Cycle": "BC1",
        "Bill generation": "1st of the month",
        "Bill delivery": "12th of the month",
        "E-Bill delivery": "14th or 15th of each month",
        "Bill In-Transmit SMS": "15th of each month",
        "Due date": "25th of the month"
    },
    {
        "City / Province": "Abra",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Apayao",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Benguet",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Ifugao",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Kalinga",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Mountain Province",
        "Region": "CAR",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Ilocos Norte",
        "Region": "REGION I",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Ilocos Sur",
        "Region": "REGION I",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "La Union",
        "Region": "REGION I",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Pangasinan",
        "Region": "REGION I",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Batanes",
        "Region": "REGION II",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Cagayan",
        "Region": "REGION II",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Isabela",
        "Region": "REGION II",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Nueva Vizcaya",
        "Region": "REGION II",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Quirino",
        "Region": "REGION II",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Aurora",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Bataan",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Bulacan",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Nueva Ecija",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Pampanga",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Tarlac",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Zambales",
        "Region": "REGION III",
        "Super Region": "North Luzon",
        "Billing Cycle": "BC2",
        "Bill generation": "6th of the month",
        "Bill delivery": "19th of the month",
        "E-Bill delivery": "19th or 20th of each month",
        "Bill In-Transmit SMS": "20th of each month",
        "Due date": "30th of the month"
    },
    {
        "City / Province": "Batangas",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Laguna",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Cavite",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Marinduque",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Occidental Mindoro",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Oriental Mindoro",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Palawan",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Quezon",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Rizal",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Romblon",
        "Region": "REGION IV",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Albay",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Camarines Norte",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Camarines Sur",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Catanduanes",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Masbate",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Sorsogon",
        "Region": "REGION V",
        "Super Region": "South Luzon",
        "Billing Cycle": "BC3",
        "Bill generation": "11th of the month",
        "Bill delivery": "24th of the month",
        "E-Bill delivery": "24th or 25th of each month",
        "Bill In-Transmit SMS": "25th of each month",
        "Due date": "5th of the ff month"
    },
    {
        "City / Province": "Aklan",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Antique",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Capiz",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Guimaras",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Iloilo",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Negros Occidental",
        "Region": "REGION VI",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Bohol",
        "Region": "REGION VII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Cebu",
        "Region": "REGION VII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Negros Oriental",
        "Region": "REGION VII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Siquijor",
        "Region": "REGION VII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Biliran",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Eastern Samar",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Leyte",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Northern Samar",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Southern Samar",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Western Samar",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Dinagat Islands",
        "Region": "REGION VIII",
        "Super Region": "Visayas",
        "Billing Cycle": "BC4",
        "Bill generation": "16th of the month",
        "Bill delivery": "29th of the month",
        "E-Bill delivery": "29th or 30th of each month",
        "Bill In-Transmit SMS": "30th of each month",
        "Due date": "10th of the ff month"
    },
    {
        "City / Province": "Basilan",
        "Region": "REGION IX",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Zamboanga Sibugay",
        "Region": "REGION IX",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Zamboanga Del Norte",
        "Region": "REGION IX",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Zamboanga Del Sur",
        "Region": "REGION IX",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Bukidnon",
        "Region": "REGION X",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Camiguin",
        "Region": "REGION X",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Lanao Del Norte",
        "Region": "REGION X",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Misamis Occidental",
        "Region": "REGION X",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Misamis Oriental",
        "Region": "REGION X",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Compostela Valley",
        "Region": "REGION XI",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Davao Oriental",
        "Region": "REGION XI",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Davao Del Sur",
        "Region": "REGION XI",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Davao Del Norte",
        "Region": "REGION XI",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Cotabato",
        "Region": "REGION XII",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Maguindanao",
        "Region": "REGION XII",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Sarangani",
        "Region": "REGION XII",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "South Cotabato",
        "Region": "REGION XII",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Sultan Kudarat",
        "Region": "REGION XII",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Lanao Del Sur",
        "Region": "ARMM",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Shariff Kabunsuan",
        "Region": "ARMM",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Sulu",
        "Region": "ARMM",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Tawi-Tawi",
        "Region": "ARMM",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Agusan del norte",
        "Region": "CARAGA",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Agusan del sur",
        "Region": "CARAGA",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Surigao del norte",
        "Region": "CARAGA",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    },
    {
        "City / Province": "Surigao del sur",
        "Region": "CARAGA",
        "Super Region": "Mindanao",
        "Billing Cycle": "BC5",
        "Bill generation": "21st of the month",
        "Bill delivery": "4th of the month",
        "E-Bill delivery": "4th or 5th of the ff month",
        "Bill In-Transmit SMS": "5th of ff month",
        "Due date": "15th of the ff month"
    }
];

function searchBilling() {
    const searchBox = document.getElementById("inputAddress");
    const query = searchBox.value.trim().toLowerCase();

    if (query === "") {
        var myModal = new bootstrap.Modal(document.getElementById('danger-alert-modal'));
        myModal.show();
        return;
    }

    const result = billingCycleDb.find(item => item["City / Province"].toLowerCase() === query);

    if (result) {
        // Get today's date (Date of Activation)
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("activationDate").textContent = today.toLocaleDateString("en-US", options);

        // Extract Super Region
        const superRegion = result["Super Region"];

        // Define bill cycle based on Super Region
        let billCycle = {
            "Metro Manila": { billGen: 1, billDelivery: 12, eBillStart: 14, eBillEnd: 15, billSMS: 15, dueDate: 25 },
            "North Luzon": { billGen: 6, billDelivery: 19, eBillStart: 19, eBillEnd: 20, billSMS: 20, dueDate: 30 },
            "South Luzon": { billGen: 11, billDelivery: 24, eBillStart: 24, eBillEnd: 25, billSMS: 25, dueDate: 5 },
            "Visayas": { billGen: 16, billDelivery: 29, eBillStart: 29, eBillEnd: 30, billSMS: 30, dueDate: 10 },
            "Mindanao": { billGen: 21, billDelivery: 4, eBillStart: 4, eBillEnd: 5, billSMS: 5, dueDate: 15 }
        };

        if (!billCycle[superRegion]) {
            console.error("Invalid Super Region");
            return;
        }

        let cycle = billCycle[superRegion];

        // Bill Generation Date
        let billGenDate = new Date(today.getFullYear(), today.getMonth(), cycle.billGen);

        // If it's South Luzon, Visayas, or Mindanao, move Bill Gen to next month if today is past Bill Gen Date
        if ((superRegion === "South Luzon" || superRegion === "Visayas" || superRegion === "Mindanao") && today > billGenDate) {
            billGenDate.setMonth(billGenDate.getMonth() + 1);
        }

        // Bill Delivery, E-Bill Delivery, and Bill SMS Dates
        const billDeliveryDate = new Date(billGenDate.getFullYear(), billGenDate.getMonth(), cycle.billDelivery);
        const eBillDeliveryDate1 = new Date(billGenDate.getFullYear(), billGenDate.getMonth(), cycle.eBillStart);
        const eBillDeliveryDate2 = new Date(billGenDate.getFullYear(), billGenDate.getMonth(), cycle.eBillEnd);
        const billSMSDate = new Date(billGenDate.getFullYear(), billGenDate.getMonth(), cycle.billSMS);

        // Due Date: If Metro Manila or North Luzon, keep in the same month. Otherwise, move to next month.
        const dueDate = (superRegion === "Metro Manila" || superRegion === "North Luzon")
            ? new Date(billGenDate.getFullYear(), billGenDate.getMonth(), cycle.dueDate)
            : new Date(billGenDate.getFullYear(), billGenDate.getMonth() + 1, cycle.dueDate);

        // Display results
        document.getElementById("address").textContent = result["City / Province"];
        document.getElementById("region").textContent = result["Region"];
        document.getElementById("billGeneration").textContent = billGenDate.toLocaleDateString("en-US", options);
        document.getElementById("billDelivery").textContent = billDeliveryDate.toLocaleDateString("en-US", options);
        document.getElementById("eBillDelivery").textContent =
            eBillDeliveryDate1.toLocaleDateString("en-US", options) + " or " +
            eBillDeliveryDate2.toLocaleDateString("en-US", options);
        document.getElementById("billSMS").textContent = billSMSDate.toLocaleDateString("en-US", options);
        document.getElementById("dueDate").textContent = dueDate.toLocaleDateString("en-US", options);
    } else {
        var infoModal = new bootstrap.Modal(document.getElementById('info-alert-modal'));
        infoModal.show();
    }
}

*/