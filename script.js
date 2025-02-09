// Weather & event data for USVI
const usviWeatherData = {
    January: { temp: "78°F (26°C)", rainfall: "2.9 inches", hurricaneRisk: "Low", events: "Three Kings Day Festival" },
    February: { temp: "79°F (26°C)", rainfall: "1.8 inches", hurricaneRisk: "Low", events: "St. Croix Agriculture Fair" },
    March: { temp: "80°F (27°C)", rainfall: "1.6 inches", hurricaneRisk: "Low", events: "St. Thomas International Regatta" },
    April: { temp: "81°F (27°C)", rainfall: "3.0 inches", hurricaneRisk: "Low", events: "USVI Carnival in St. Thomas" },
    May: { temp: "82°F (28°C)", rainfall: "3.6 inches", hurricaneRisk: "Low", events: "Mango Melee Festival" },
    June: { temp: "83°F (28°C)", rainfall: "3.3 inches", hurricaneRisk: "Medium", events: "Emancipation Day Celebrations" },
    July: { temp: "84°F (29°C)", rainfall: "3.4 inches", hurricaneRisk: "Medium", events: "Bastille Day Kingfish Tournament" },
    August: { temp: "85°F (29°C)", rainfall: "4.4 inches", hurricaneRisk: "High", events: "Food & Wine Festival" },
    September: { temp: "85°F (29°C)", rainfall: "5.9 inches", hurricaneRisk: "High", events: "Hurricane Season - Few Events" },
    October: { temp: "84°F (29°C)", rainfall: "5.8 inches", hurricaneRisk: "High", events: "VI-Puerto Rico Friendship Festival" },
    November: { temp: "82°F (28°C)", rainfall: "5.2 inches", hurricaneRisk: "Medium", events: "St. John Film Festival" },
    December: { temp: "80°F (27°C)", rainfall: "3.1 inches", hurricaneRisk: "Low", events: "Christmas Festivals" }
};

// Function to update weather details when user selects a month
function updateWeather() {
    let selectedMonth = document.getElementById("month").value;

    if (selectedMonth && usviWeatherData[selectedMonth]) {
        let data = usviWeatherData[selectedMonth];

        document.getElementById("temp").textContent = data.temp;
        document.getElementById("rainfall").textContent = data.rainfall;
        document.getElementById("hurricaneRisk").textContent = data.hurricaneRisk;
        document.getElementById("events").textContent = data.events;

        // Change hurricane risk color
        let hurricaneElement = document.getElementById("hurricaneRisk");
        hurricaneElement.className = ""; // Reset class
        if (data.hurricaneRisk === "Low") {
            hurricaneElement.classList.add("low");
        } else if (data.hurricaneRisk === "Medium") {
            hurricaneElement.classList.add("medium");
        } else {
            hurricaneElement.classList.add("high");
        }
    }
}

// Add event listener to dropdown
document.getElementById("month").addEventListener("change", updateWeather);
