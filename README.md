# Trust Care 🏥❤️

**Trust Care** is a modern, secure, and user-friendly caregiving service platform designed to connect families with trusted caretakers for **children, elderly people, and patients who need special care at home**. The platform focuses on reliability, transparency, and ease of use, making caregiving services accessible anytime, anywhere.

This project is built as a **real-world, production-ready web application** using **Next.js**, following industry best practices in authentication, booking workflows, and user experience.

---

## 🌍 Live Project
- **Live Site:** https://trust-care-one.vercel.app/
- **GitHub Repository:** https://github.com/sm-remal/trust-care 

---

## 🎯 Project Purpose
In real life, finding a reliable caregiver is often stressful and time-consuming. Trust Care solves this problem by providing:

- A **centralized platform** to explore caregiving services
- A **secure booking system** with real-time cost calculation
- **Authentication and booking tracking** for transparency
- A **scalable foundation** for future features like payments and admin management

The goal is simple: **make caregiving easy, secure, and trustworthy for everyone**.

---

## ✨ Key Features

- **Responsive Design** – Fully optimized for mobile, tablet, and desktop
- **User Authentication** – Email & Password login and Google social login (NextAuth)
- **Service-Based Booking System** – Book caregivers based on service type and duration
- **Dynamic Location Selection** – Division, District, City, Area, and Address input
- **Automatic Cost Calculation** – Duration × service charge
- **Booking Status Tracking** – Pending, Confirmed, Completed, Cancelled
- **My Bookings Dashboard** – Users can view and manage all bookings
- **Email Invoice System** – Automatic email invoice after successful booking
- **SEO-Friendly Metadata** – Optimized metadata for Home and Service pages

---

## 🧩 Services Offered

- 👶 **Baby Care Service** – Professional babysitting and child care
- 👴 **Elderly Care Service** – Daily assistance and health support for seniors
- 🤕 **Sick Patient Care** – Home-based care for patients and special needs

Each service has its own **dedicated detail page** with full information and a booking option.

---

## 🗺️ Pages & Routes

### 1. Homepage (`/`)
- Motivational banner/slider
- Platform mission & vision
- Services overview
- Testimonials or success highlights

### 2. Service Details Page (`/service/:service_id`)
- Detailed service description
- Pricing and care information
- **Book Service** button (redirects to login if not authenticated)

### 3. Booking Page (`/booking/:service_id`) – 🔒 Private Route
- Select duration (hours/days)
- Choose location (Division → Area + Address)
- Live total cost calculation
- Confirm booking (Status: **Pending**)

### 4. Authentication
- **Login Page:** Email & Password, Google Login
- **Registration Page:**
  - Name, NID No, Email, Contact Number
  - Password validation (min 6 characters, uppercase & lowercase required)
  - Redirect back to booking after successful registration
- Logged-in users stay authenticated on page reload

### 5. My Bookings Page (`/my-bookings`) – 🔒 Private Route
- View all user bookings
- Details: Service Name, Duration, Location, Cost, Status
- Actions: View Details, Cancel Booking

### 6. Error Page (`404`)
- Friendly not-found message
- Redirect button to Home page

---

## ⚙️ Technology Stack

- **Frontend:** Next.js (App Router)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS / ShadCN UI
- **State Management:** React Hooks
- **Email Service:** SMTP (Gmail / Nodemailer)
- **Deployment:** Vercel

---

## 🔐 Environment Variables
All sensitive credentials are securely managed using environment variables:

```env
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

---

## 🚀 Challenges Implemented

- SEO-friendly **Metadata integration**
- Secure **private route protection**
- Dynamic **cost calculation logic**
- **Email invoice** after booking confirmation
- Production-ready authentication flow

---

## 📦 Installation & Setup

```bash
git clone https://github.com/sm-remal/trust-care.git
cd trust-care
npm install
npm run dev
```

The app will run on `http://localhost:3000`

---

## 🧠 Real-World Use Case
A working parent can easily book a verified babysitter for specific hours, track the booking status, receive an invoice by email, and manage everything from a single dashboard — all without phone calls or middlemen.

---

## 🤝 Contribution
This project is currently a learning-focused production build. Contributions, ideas, and improvements are always welcome.

---

**Trust Care – Because your family deserves trusted care.** 💙

