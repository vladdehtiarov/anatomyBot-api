# AnatomyBot API

Simple API for escaping text into JSON-safe format.

## Endpoint

### `POST /escape`

#### Body:
```json
{
  "text": "Your raw text"
}
```
#### Response:
```json
{
  "escaped": "\"Escaped \\\"text\\\" with \\n newlines\""
}
```
### Local run
```bash
npm install
npm start
```