const addonchannels = [
    {
        No: "95",
        ChannelName: "Fight Sports",
        AllThingsEnt: "yes",
        SportsAction: "yes",
        PinoyAndAsian: "yes",
        FamTime: "yes",
        Plan290: "yes",
        Plan520: "yes",
        Plan720: "yes",
        Plan1050: "yes",
        Plan1350: "yes",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "129",
        ChannelName: "Tap Edge",
        AllThingsEnt: "yes",
        SportsAction: "yes",
        PinoyAndAsian: "yes",
        FamTime: "yes",
        Plan290: "yes",
        Plan520: "yes",
        Plan720: "yes",
        Plan1050: "yes",
        Plan1350: "yes",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "261",
        ChannelName: "One Sports + HD",
        AllThingsEnt: "",
        SportsAction: "",
        PinoyAndAsian: "",
        FamTime: "",
        Plan290: "yes",
        Plan520: "",
        Plan720: "",
        Plan1050: "",
        Plan1350: "",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "262",
        ChannelName: "NBA TV Philippines HD",
        AllThingsEnt: "yes",
        SportsAction: "",
        PinoyAndAsian: "yes",
        FamTime: "yes",
        Plan290: "yes",
        Plan520: "",
        Plan720: "",
        Plan1050: "",
        Plan1350: "",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "271",
        ChannelName: "Premier Football HD",
        AllThingsEnt: "yes",
        SportsAction: "yes",
        PinoyAndAsian: "yes",
        FamTime: "yes",
        Plan290: "yes",
        Plan520: "yes",
        Plan720: "yes",
        Plan1050: "yes",
        Plan1350: "yes",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "199",
        ChannelName: "PPV SD",
        AllThingsEnt: "",
        SportsAction: "",
        PinoyAndAsian: "",
        FamTime: "",
        Plan290: "",
        Plan520: "",
        Plan720: "",
        Plan1050: "",
        Plan1350: "",
        Plan1650: "",
        Plan1990: ""
    },
    {
        No: "298",
        ChannelName: "PPV HD 1",
        AllThingsEnt: "",
        SportsAction: "",
        PinoyAndAsian: "",
        FamTime: "",
        Plan290: "",
        Plan520: "",
        Plan720: "",
        Plan1050: "",
        Plan1350: "",
        Plan1650: "",
        Plan1990: ""
    }
];

function populateTable(data) {
    const tableBody = document.getElementById("addonChannelsTable").querySelector("tbody");

    data.forEach(channel => {
        const row = document.createElement("tr");

        for (let key in channel) {
            const cell = document.createElement("td");
            cell.innerHTML = channel[key] === "yes" ? "✓" : channel[key] || ""; // Replace "yes" with checkmark
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}

// Populate the table when the page loads
populateTable(addonchannels);