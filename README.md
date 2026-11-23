# truck-weather

## Endpoint
"https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&current=temperature_2m,is_day,wind_speed_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit"

## What I changed using the docs
I added wind speed units to mp/h, added auto time zone,changed from hourly update to current and specified if it was day or night.
Before: Wind speed unit was km/h and time zone was not set to accurate location.
After: Time zone shows correctly based on given longitude and latitude.

## Live site
https://shanteshannon01-cmd.github.io/truck-weather/