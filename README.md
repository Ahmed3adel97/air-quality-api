# Air Quality API

## Overview

The Air Quality API is a Node.js-based REST API designed to fetch and provide real-time air quality information for cities based on GPS coordinates. This project utilizes the IQAir API to retrieve air quality data and includes a CRON job to periodically monitor and store air quality information for Paris.

## Features

- **Fetch Air Quality Data**: Retrieve air quality information for a specified location (latitude and longitude) using the IQAir API.
- **Periodic Data Collection**: A CRON job that collects air quality data for Paris every minute and stores it in a database.
- **Endpoint**: Retrieve the datetime when the Paris zone was the most polluted based on the collected data.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- A database (e.g., MongoDB)
- [IQAir API Key](https://www.iqair.com/fr/dashboard/api)

## Documentation
swagger is used to document the apis used

## TEST
Api test and unit test are included

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/air-quality-api.git
cd air-quality-api
