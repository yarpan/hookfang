
Test project for testing Web-hook with GitHub Actions




curl --location 'https://api.github.com/repos/yarpan/webhook-playwright/dispatches' \
--header 'Accept: application/vnd.github+json' \
--header 'Authorization: token <token>' \
--header 'Content-Type: application/json' \
--data '{
    "event_type": "webhook",
    "client_payload": {
        "unit": false,
        "integration": true,
        "user_data": {
            "user_name": "Ann",
            "user_age": 22,
            "user_type": "student"
        }
    }
}'