# HealthScope API

## Run

```bash
npm install
npm run dev:api
```

The API listens on `0.0.0.0:3000` so an iPhone on the same LAN can reach it.

## Ingestion endpoint

```text
POST /api/v1/ingest/apple-health
```

Example request:

```json
{
  "source": "shortcut-test",
  "exportedAt": "2026-07-15T10:00:00+08:00",
  "range": {
    "from": "2026-06-15T00:00:00+08:00",
    "to": "2026-07-15T00:00:00+08:00"
  },
  "records": [
    {
      "type": "resting_heart_rate",
      "value": 62,
      "unit": "bpm",
      "startTime": "2026-07-14T08:30:00+08:00",
      "endTime": "2026-07-14T08:30:00+08:00",
      "sourceName": "Apple Watch"
    }
  ]
}
```
