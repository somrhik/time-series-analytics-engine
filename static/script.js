async function insertData() {
    const timestamp = document.getElementById("timestamp").value;
    const value = document.getElementById("value").value;

    const response = await fetch("/api/insert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            timestamp: timestamp,
            value: value
        })
    });

    const data = await response.json();

    const result = document.getElementById("insertResult");

    result.textContent = data.error || "Data inserted successfully";
    result.className = data.error ? "error" : "success";

    if (!data.error) {
        document.getElementById("timestamp").value = "";
        document.getElementById("value").value = "";
        loadData();
    }
}


async function analyze() {
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    if (!start || !end) {
        document.getElementById("stats").innerHTML =
            '<p class="error">Select both start and end timestamps</p>';
        return;
    }

    const params = new URLSearchParams({
        start: start,
        end: end
    });

    const response = await fetch(`/api/stats?${params}`);
    const data = await response.json();

    if (data.error) {
        document.getElementById("stats").innerHTML =
            `<p class="error">${data.error}</p>`;
        return;
    }

    document.getElementById("stats").innerHTML = `
        <div class="card">
            <b>Count</b><br>${data.count}
        </div>

        <div class="card">
            <b>Average</b><br>${data.average}
        </div>

        <div class="card">
            <b>Minimum</b><br>${data.min ?? "None"}
        </div>

        <div class="card">
            <b>Maximum</b><br>${data.max ?? "None"}
        </div>
    `;

    const queryResponse = await fetch(`/api/query?${params}`);
    const values = await queryResponse.json();

    document.getElementById("queryResult").innerHTML = `
        <h3>Values</h3>
        <pre>${JSON.stringify(values.values, null, 2)}</pre>
    `;
}


async function loadData() {
    const response = await fetch("/api/export");
    const data = await response.json();

    document.getElementById("data").innerHTML =
        `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}


async function downloadData() {
    const response = await fetch("/api/export");
    const data = await response.json();

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "time_series_data.json";
    link.click();

    URL.revokeObjectURL(link.href);
}


async function resetData() {
    await fetch("/api/reset", {
        method: "POST"
    });

    document.getElementById("stats").innerHTML = "";
    document.getElementById("queryResult").innerHTML = "";

    loadData();
}


loadData();