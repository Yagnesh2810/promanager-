# ProManage+ Installation Guide

This guide provides detailed instructions for installing and setting up the ProManage+ project management system.

## System Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn v1.22.0 or higher)
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## Installation Options

### Option 1: Local Development Setup

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/yourusername/promanage-plus.git
   cd promanage-plus
   \`\`\`

2. **Install dependencies**

   Using npm:
   \`\`\`bash
   npm install
   \`\`\`

   Using yarn:
   \`\`\`bash
   yarn install
   \`\`\`

3. **Set up environment variables**

   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_API_URL=your_api_url
   \`\`\`

   For local development without a backend, you can use:
   \`\`\`
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   \`\`\`

4. **Run the development server**

   Using npm:
   \`\`\`bash
   npm run dev
   \`\`\`

   Using yarn:
   \`\`\`bash
   yarn dev
   \`\`\`

5. **Access the application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Setup

1. **Build the Docker image**

   \`\`\`bash
   docker build -t promanage-plus .
   \`\`\`

2. **Run the Docker container**

   \`\`\`bash
   docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=your_api_url promanage-plus
   \`\`\`

3. **Access the application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Option 3: Vercel Deployment

1. **Fork the repository on GitHub**

2. **Import the project to Vercel**

   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import the forked repository
   - Configure environment variables
   - Click "Deploy"

3. **Access the application**

   Once deployed, Vercel will provide a URL to access your application.

## Configuration

### Environment Variables

- `NEXT_PUBLIC_API_URL`: URL of the backend API
- `NEXT_PUBLIC_GITHUB_CLIENT_ID`: GitHub OAuth client ID (for GitHub integration)
- `NEXT_PUBLIC_APP_URL`: URL of the frontend application

### Custom Styling

To customize the application's styling:

1. **Modify the Tailwind configuration**

   Edit the `tailwind.config.ts` file to change colors, fonts, and other design elements.

2. **Update the global CSS**

   Edit the `app/globals.css` file to add custom CSS rules.

## Troubleshooting

### Common Issues

1. **Node.js version incompatibility**

   Error: `The engine "node" is incompatible with this module`

   Solution: Update Node.js to v18.0.0 or higher.

2. **Port already in use**

   Error: `Error: listen EADDRINUSE: address already in use :::3000`

   Solution: Change the port by running:
   \`\`\`bash
   npm run dev -- -p 3001
   \`\`\`

3. **Missing environment variables**

   Error: `Error: Missing environment variable: NEXT_PUBLIC_API_URL`

   Solution: Create or update the `.env.local` file with the required variables.

### Getting Help

If you encounter any issues not covered in this guide:

1. Check the [GitHub Issues](https://github.com/yourusername/promanage-plus/issues) for similar problems and solutions
2. Create a new issue with detailed information about your problem
3. Contact the maintainers at [your-email@example.com](mailto:your-email@example.com)

## Updating

To update to the latest version:

1. **Pull the latest changes**

   \`\`\`bash
   git pull origin main
   \`\`\`

2. **Install any new dependencies**

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Restart the development server**

   \`\`\`bash
   npm run dev
   # or
   yarn dev
