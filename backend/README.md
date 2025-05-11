# ProManage+ Backend

This is the backend for the ProManage+ application, built with Node.js and Express, and connected to MongoDB Atlas.

## Features

- **User Authentication**: Register, login, and manage user sessions with JWT.
- **Project Management**: Create, update, delete, and retrieve projects.
- **Task Management**: Create, update, delete, and retrieve tasks associated with projects.
- **Chat Functionality**: Placeholder for chat-related features.
- **Meeting Management**: Placeholder for meeting-related features.
- **Notes Management**: Placeholder for notes-related features.
- **File Management**: Placeholder for file-related features.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/promanage-backend.git
   cd promanage-backend
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```plaintext
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on [http://localhost:5000](http://localhost:5000).

## API Documentation

Refer to the `docs/api-documentation.md` file for detailed API endpoints and usage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
