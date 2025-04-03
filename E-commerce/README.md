
Myntra Clone (In Progress)


This is an e-commerce platform for fashion and lifestyle products, inspired by Myntra. The project is under development and aims to provide a shopping experience similar to Myntra, with features such as user authentication, product browsing, shopping cart, checkout, and order management.






## Features

- Light/dark mode toggle
- User Authentication: Basic login functionality is in progress.
- Product Catalog: Displaying products and filtering by categories is under development.
- Shopping Cart: Cart functionality is being integrated.
- Order Management: Placeholder for future features (work in progress).




## Tech Stack


- Frontend: React.js,Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB 
- Authentication: JWT (JSON Web Tokens)
- Payment Gateway: To be added (Razorpay)


##  Prerequisites

Make sure you have the following installed on your local machine:
- Node.js (>= v12.0)
- MongoDB (or use MongoDB Atlas for cloud DB)
- Git
- npm

## Clone the project



```bash
  git clone https://github.com/Codesmashersgit/myntra-clone.git
```

Go to the project directory

```bash
  cd myntra-clone
```

## Install dependencies
For both frontend and backend, install the required dependencies:

 Backend

```bash
  cd Backend
  npm install
```

Frontend

```bash
  cd frontend/e-app
  npm install
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI=your_mongodb_connection_string`
`JWT_SECRET=your_secret_key`



## Running Tests

To run tests, run the following command

Backend

```bash
  cd Backend
  npm run dev
```

Frontend

```bash
  cd frontend/e-app
  npm run dev
```