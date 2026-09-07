from flask import Flask, render_template, request, jsonify
from datetime import datetime
from engine import TimeSeriesAnalyticsEngine

app = Flask(__name__)
engine = TimeSeriesAnalyticsEngine()


def normalize_timestamp(value):
    """Convert browser datetime input into a consistent timestamp string."""
    dt = datetime.fromisoformat(value)
    return dt.strftime("%Y-%m-%d %H:%M:%S")


@app.route("/")
def home():
    return render_template("index.html")


@app.post("/api/insert")
def insert():
    data = request.get_json()

    try:
        timestamp = normalize_timestamp(data["timestamp"])
        value = float(data["value"])

        result = engine.insert(timestamp, value)
        return jsonify(result)

    except (KeyError, TypeError, ValueError):
        return jsonify({"error": "Enter a valid timestamp and value"}), 400


@app.get("/api/query")
def query():
    try:
        start = normalize_timestamp(request.args["start"])
        end = normalize_timestamp(request.args["end"])

        return jsonify({
            "values": engine.query(start, end)
        })

    except (KeyError, TypeError, ValueError):
        return jsonify({
            "error": "Enter valid start and end timestamps"
        }), 400


@app.get("/api/stats")
def stats():
    try:
        start = normalize_timestamp(request.args["start"])
        end = normalize_timestamp(request.args["end"])

        values = engine.query(start, end)

        return jsonify({
            "count": len(values),
            "average": engine.average(start, end),
            "min": min(values) if values else None,
            "max": max(values) if values else None
        })

    except (KeyError, TypeError, ValueError):
        return jsonify({
            "error": "Enter valid start and end timestamps"
        }), 400


@app.get("/api/export")
def export():
    return jsonify(engine.export())


@app.post("/api/reset")
def reset():
    engine.series = []
    return jsonify({"status": "reset"})


if __name__ == "__main__":
    app.run(debug=True)