<div align="center">

  <img src="/public/logo-dark.svg#gh-dark-mode-only" alt="logo" width="200" height="auto" />
  <img src="/public/logo-light.svg#gh-light-mode-only" alt="logo" width="200" height="auto" />
  <br/>
  <br/>
  <p>
   The Serene Solitude is an internal hotel management system built with React Query, Supabase, Styled Components, and many other technologies. It allows employees to manage everything about hotel bookings, cabins, and guests.
  </p>

<p>
  <a href="https://github.com/sudeepmahato16/the-wild-oasis/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Ventorix/the-serene-solitude" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Ventorix/the-serene-solitude" alt="last update" />
  </a>
  <a href="https://github.com/Ventorix/the-serene-solitude/network/members">
    <img src="https://img.shields.io/github/forks/Ventorix/the-serene-solitude" alt="forks" />
  </a>
  <a href="https://github.com/Ventorix/the-serene-solitude/stargazers">
    <img src="https://img.shields.io/github/stars/Ventorix/the-serene-solitude" alt="stars" />
  </a>
  <a href="https://github.com/Ventorix/the-serene-solitude/issues/">
    <img src="https://img.shields.io/github/issues/Ventorix/the-serene-solitude" alt="open issues" />
  </a>
  <a href="https://github.com/Ventorix/the-serene-solitude/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Ventorix/the-serene-solitude.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://the-serene-solitude.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Ventorix/the-serene-solitude/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Ventorix/the-serene-solitude/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Ventorix/the-serene-solitude/issues/">Request Feature</a>
  </h4>
</div>

</br>

## Features

1. **User Authentication and Signup:**

   1. Hotel employees can log in to the application to perform tasks.
   2. New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

2. **User Profile Management:**

   1. Users can upload an avatar to personalize their profile.
   2. Users can change their name and password.

3. **Cabin Management:**

   1. The app provides a table view with all cabins.
   2. The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
   3. Users can update or delete existing cabins.
   4. Users can create new cabins, including the ability to upload a photo.

4. **Booking Management:**

   1. The app provides a table view with all bookings.
   2. The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
   3. Booking status can be "unconfirmed," "checked in," or "checked out."
   4. The table view is filterable by booking status.
   5. Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

5. **Booking Operations:**

   1. Users can delete, check in, or check out a booking as the guest arrives.
   2. On check-in, users can accept payment outside the app and then confirm the payment within the app.
   3. Guests can add breakfast for the entire stay during check-in if they haven't already.

6. **Guest Data Management:**

   1. Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

7. **Dashboard:**

   1. The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
   2. It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
   3. The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
   4. It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
   5. There's also a chart displaying statistics on stay durations, an important metric for the hotel.

8. **Application-wide Settings:**

   1. Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

9. **Dark Mode:**
   1. The app includes a dark mode option for a different visual appearance and enhanced user experience in low-light conditions.

<br/>

## :camera: Screenshots

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/28a1bbe7-b48a-430e-a2e5-b21b1d75df0d)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/0decfe75-93a5-4dbf-91b5-a5f0d1e170f3)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/d9ccd4b3-aa2f-45d6-809e-6c21993712d1)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/df61e5b4-8975-4e4a-ad1b-48faa942e335)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/289ed531-ca77-403a-afaa-9c092f4c8281)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/5d3f147d-343d-43bf-9144-bb144d926fb6)</kbd>

<kbd>![image](https://github.com/Ventorix/the-serene-solitude/assets/40743606/9fdd5a12-373a-4275-955a-370b9b7c2ed3)</kbd>

<br/>

## Installation

- Clone the repository:

  ```
  git clone https://github.com/Ventorix/the-serene-solitude.git
  ```

- Navigate to the project directory:

  ```
  cd the-serene-solitude
  ```

- Install the dependencies:

  ```
  npm install
  ```

<br/>

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
