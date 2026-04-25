# BaMEE

BaMEE is a full-stack food delivery web application built with the MERN stack, including:

- Customer web app
- Admin dashboard
- Backend REST API
- Authentication and cart/order flow
- Stripe payment integration

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- Admin: React, Vite, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth and Security: JWT, bcrypt
- Payments: Stripe
- File Uploads: Multer

## Project Structure

```text
Food-Delivery-main/
  frontend/   -> customer app
  admin/      -> admin dashboard
  backend/    -> API server
```

## Features

- User signup/login
- JWT-based authentication
- Browse and filter food items
- Add to cart and place orders
- Stripe checkout integration
- View user orders
- Admin product management
- Admin order management
- Image upload support for products

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rounak2177/food-app.git
cd food-app
```

If your repository contains a nested folder, enter it first:

```bash
cd Food-Delivery-main
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3. Configure environment variables

Create a .env file inside backend folder:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SALT=10
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Run the application

Start backend:

```bash
cd backend
npm run server
```

Start customer frontend:

```bash
cd frontend
npm run dev
```

Start admin dashboard:

```bash
cd admin
npm run dev
```

## Default Local URLs

- Backend API: http://localhost:4000
- Frontend: http://localhost:5173
- Admin: http://localhost:5174

## API Base Routes

- /api/user
- /api/food
- /api/cart
- /api/order
- /images

## Notes

- Ensure MongoDB is running or MONGO_URL points to a valid MongoDB Atlas cluster.
- Update frontend and admin API base URLs if needed for production deployment.
- Do not commit .env files to GitHub.

## Future Improvements

- Add role-based access control for admin routes
- Add automated testing
- Add CI/CD pipeline
- Add Docker support
