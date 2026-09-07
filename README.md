# Time Series Analytics Engine

A Flask-based web application for inserting, querying, and analyzing timestamped time-series data. The project provides statistical analysis and JSON export through a simple browser interface.

## Features

* Insert timestamp/value data
* Store and manage time-series data sequentially
* Query values within a timestamp range
* Calculate count and average
* Find minimum and maximum values
* View stored data in JSON format
* Export data as a JSON file
* Reset stored data
* Unit tests for the analytics engine

## Tech Stack

* **Python**
* **Flask**
* **HTML**
* **CSS**
* **JavaScript**
* **JSON**

## Project Structure

```text
time-series-analytics-engine/
├── app.py
├── engine.py
├── requirements.txt
├── README.md
├── .gitignore
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── tests/
    └── test_engine.py
```

## How It Works

The application consists of two main parts:

**Analytics Engine (`engine.py`)**
Handles data insertion, range queries, average calculation, minimum/maximum detection, and JSON export.

**Flask Application (`app.py`)**
Provides the web interface and API endpoints through which users interact with the engine.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd time-series-analytics-engine
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows PowerShell:

```powershell
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

## Run the Application

```bash
python app.py
```

Open the application in your browser:

```text
http://127.0.0.1:5000
```

## Using the Application

1. Enter a **timestamp** and **value**.
2. Click **Insert**.
3. Enter a start and end timestamp.
4. Click **Analyze**.
5. View the count, average, minimum, maximum, and values within the selected range.
6. Use **Export JSON** to export the stored data.
7. Use **Reset** to clear the current data.

## API Endpoints

| Method | Endpoint      | Purpose                     |
| ------ | ------------- | --------------------------- |
| `GET`  | `/`           | Web interface               |
| `POST` | `/api/insert` | Insert timestamped data     |
| `GET`  | `/api/query`  | Query values within a range |
| `GET`  | `/api/stats`  | Calculate statistics        |
| `GET`  | `/api/export` | Export stored data as JSON  |
| `POST` | `/api/reset`  | Reset stored data           |

## Testing

Run the unit tests with:

```bash
python -m unittest discover tests
```

## Project Background

This project is an organized web extension of the **Time Series Analytics Engine** developed during the **AICTE–EduSkills Python Full Stack virtual internship**. The original project focused on timestamped data ingestion, sequential storage, range-based querying, statistical aggregation, and JSON reporting.

The web interface extends those core capabilities to allow users to interact with the engine through a browser. The internship report also identifies a GUI/API as a possible future extension of the project.  

## Future Improvements

* Persistent database storage
* Time-series visualization and charts
* Authentication
* Advanced forecasting and trend analysis
* Additional statistical operations
* Cloud deployment

**Note:** The current version uses in-memory storage, so data is cleared when the application restarts.
