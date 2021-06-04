import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infastructure/theme";
import { Navigation } from "./src/infastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/auth.context";
import { FavouritesContextProvider } from "./src/services/favourites/fav.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUzBhlhsN-_306Jrt-lTeir8FUojAz2L4",
  authDomain: "mealsgo-b05fd.firebaseapp.com",
  projectId: "mealsgo-b05fd",
  storageBucket: "mealsgo-b05fd.appspot.com",
  messagingSenderId: "932798539482",
  appId: "1:932798539482:web:cc189792ae01f34eb7a7e3",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <AuthenticationContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </AuthenticationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
