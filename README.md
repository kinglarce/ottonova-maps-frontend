# Ottonova Maps Frontend

This is a react app that displays the frontend fetch from [Ottonova Maps API](https://github.com/kinglarce/ottonova-maps-api).

## Getting started

You can view a live demo over at https://ottonova-maps-frontend.vercel.app/

To get the frontend running locally:

- Clone this repo
  - `git clone https://github.com/kinglarce/ottonova-maps-frontend.git`
- Install the required dependencies
  - `npm install`
- Copy the example environment variable
  - `.env.example` to `.env`
- Provide the `REACT_APP_GOOGLE_MAPS_API_KEY` environment variable with your google map API key which you can get from Google Cloud.
- Start the development server
  - `npm start`
- Visit URL
  - `http://localhost:3000/`

### Requesting backend API

The source code for the backend api can be found in the [[Ottonova Maps API](https://github.com/kinglarce/ottonova-maps-api)](https://github.com/kinglarce/ottonova-maps-api).

If you want to change the API URL to a different backend server, simply edit `.env` and change `REACT_APP_API_URL` to what you desired.

## Functionality overview

- Fetch Cities and Continents API
- Display Continents in dropdown for sorting purpose
- Display Cities in a card list
- Reflect Cities displayed in card list to Google Maps

## Frontend Structure

- `src/api` - This folder contains the function for request to our API.
- `src/index.tsx` - This file is the entry point to our frontend.
- `src/App.tsx` - This file is the entry point to our components.
- `src/interface.ts` - This file is where the shared interfaces are placed that are used by the components.
- `src/components` - This folder contains the components for our frontend.
  - `Header` - For displaying static header.
  - `List` - For displaying the list of cities.
  - `Loading` - For displaying loading component while fetching from the API is in progress.
  - `Map` - For display the fetching cities to the Google Map.
  - `CityDetails` - For displaying the city details.

<br />