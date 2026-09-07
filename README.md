# ⏱️ Time Series Analytics Engine

A Python and Flask-based web application for inserting, querying, and analyzing timestamped time-series data. The application provides basic statistical analysis and JSON export through a simple browser-based interface.

🔗 **Live Demo:** [https://time-series-analytics-engine.vercel.app/](https://time-series-analytics-engine.vercel.app/)

---

## ✨ Features

* 📥 Insert timestamped data with numerical values
* 🔎 Query data within a selected time range
* 📊 Calculate count and average
* 📈 Find minimum and maximum values
* 🗂️ View stored time-series data
* 📤 Export data as JSON
* 🔄 Refresh stored data
* 🗑️ Reset stored data
* 🧪 Unit tests for the analytics engine
* 🌐 Browser-based interface

---

## 🛠️ Tech Stack

* 🐍 **Python**
* ⚡ **Flask**
* 🌐 **HTML**
* 🎨 **CSS**
* 🟨 **JavaScript**
* 📦 **JSON**
* 🚀 **Vercel** — Deployment

---

## 📁 Project Structure

```text
time-series-analytics-engine/
│
├── static/
│   ├── script.js
│   └── style.css
│
├── templates/
│   └── index.html
│
├── tests/
│   └── test_engine.py
│
├── .gitignore
├── app.py
├── engine.py
├── README.md
└── requirements.txt
```

---

## ⚙️ How It Works

The application consists of two main components:

### 🧠 Analytics Engine

`engine.py` contains the core time-series functionality, including:

* Data insertion
* Sequential storage
* Range-based querying
* Average calculation
* Minimum and maximum detection
* JSON export

### 🌐 Flask Web Application

`app.py` provides the web interface and API endpoints that allow users to interact with the analytics engine through their browser.

---

## 🖥️ Using the Application

The application can be used through the **live deployment** or by running it locally.

### 📥 Insert Data

Select a date and time, enter a numerical value, and click **Insert**.

Example:

```text
05-01-2026 09:30:00 → 100
12-02-2026 15:45:00 → 150
20-03-2026 21:15:00 → 80
```

### 🔎 Analyze a Range

Select a start and end timestamp and click **Analyze**.

The application displays:

* Count
* Average
* Minimum
* Maximum
* Values within the selected range

### 📤 Export Data

Click **Export JSON** to export the stored time-series data in JSON format.

### 🔄 Refresh

Click **Refresh** to view the currently stored data.

### 🗑️ Reset

Click **Reset** to clear the currently stored data.

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd time-series-analytics-engine
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

### 3. Activate the virtual environment

**Windows PowerShell:**

```powershell
venv\Scripts\activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Start the application

```bash
python app.py
```

Open the application in your browser:

```text
http://127.0.0.1:5000
```

---

## 🔌 API Endpoints

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| `GET`  | `/`           | Web interface               |
| `POST` | `/api/insert` | Insert timestamped data     |
| `GET`  | `/api/query`  | Query values within a range |
| `GET`  | `/api/stats`  | Calculate statistics        |
| `GET`  | `/api/export` | Export data as JSON         |
| `POST` | `/api/reset`  | Reset stored data           |

---

## 🧪 Testing

Run the unit tests using:

```bash
python -m unittest discover tests
```

---

## 🎓 Project Background

This project was developed as part of the **AICTE–EduSkills Python Full Stack virtual internship**.

The original Time Series Analytics Engine was developed using Python to manage chronological data through timestamped data ingestion, sequential storage, range-based querying, statistical analysis, and JSON reporting.

This web version provides a browser-based interface for interacting with these core functionalities.

---

## 📜 Internship

**AICTE–EduSkill Virtual Internship**

* **Project:** Time Series Analytics Engine
* **Role:** Intern
* **Duration:** 10 Weeks — Jan 2026 to Mar 2026
* **Mode:** Online / Virtual
* **Domain:** Python Full Stack Development
