# Threads Clone

A full-stack social media application inspired by Threads, built with Next.js 14, MongoDB, and modern web development tools. This project demonstrates advanced web development concepts, including server-side rendering, real-time data handling, authentication, and more.

## Features

- **Server-Side Rendering (SSR):** Seamless page loading and SEO optimization with Next.js 14.
- **MongoDB Integration:** Efficient handling of complex schemas and multiple data population.
- **Responsive UI with TailwindCSS:** Beautiful and modern layouts optimized for all devices.
- **Authentication with Clerk:** Secure and easy-to-implement user authentication system.
- **File Uploads with UploadThing:** Smooth handling of media uploads.
- **Reusable Components with Shadcn:** Clean and scalable UI components.
- **Real-Time Events via Webhooks:** Listen and respond to real-time activities.
- **Middleware & API Actions:** Advanced API routing and middleware for better scalability.
- **Next.js Layout Route Groups:** Organized and efficient navigation with route groups.
- **Data Validation with Zod:** Reliable and secure data validation.
- **Form Management with React Hook Form:** Simplified and optimized form handling.
- **Reusable UI Components:** Modular and reusable components for rapid development.
- **Scalable Architecture:** Well-structured and maintainable codebase.
- **Deployment Ready:** Fully deployable to production environments.

## Technologies Used

- **Framework:** Next.js 14  
- **Database:** MongoDB  
- **Styling:** TailwindCSS  
- **Authentication:** Clerk  
- **File Uploads:** UploadThing  
- **UI Components:** Shadcn  
- **Form Management:** React Hook Form  
- **Validation:** Zod  

## Getting Started

### Prerequisites

- Node.js v18 or higher
- MongoDB database
- Clerk account for authentication
- UploadThing account for file uploads

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/threads-clone.git
   cd threads-clone
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   UPLOADTHING_SECRET_KEY=your_uploadthing_secret_key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   NEXT_PUBLIC_UPLOADTHING_URL=your_uploadthing_url
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Deployment

Deploy the application using Vercel or any preferred hosting service:

```bash
vercel deploy
```

## Project Structure

```
threads-clone/
├── components/       # Reusable UI components
├── pages/            # Next.js pages and routes
├── styles/           # TailwindCSS styles
├── utils/            # Utility functions
├── middleware/       # API middleware and authorization
├── public/           # Static assets
├── prisma/           # Database schema (if applicable)
├── hooks/            # Custom React hooks
├── .env.local        # Environment variables
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Developed with Next.js, MongoDB, TailwindCSS, and modern web development tools.**

