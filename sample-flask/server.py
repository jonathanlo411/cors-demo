from flask import Flask
import requests as r

app = Flask(__name__)

@app.route("/api/events")
def fetch():
    # Fetch from SvelteKit
    res = r.get("http://127.0.0.1:5173/api/events")
    return {
        "message": "Flask req OK",
        "other": res.json()
    }, 200