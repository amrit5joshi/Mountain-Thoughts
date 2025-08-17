# Mountain Website - Implementation Contracts

## Overview
This document outlines the frontend implementation and mock data structure for the Mountain climate-smart agriculture consulting website, similar to agritecture.com.

## Current Implementation Status
✅ **Frontend Complete** - Fully functional frontend with mock data
⏳ **Backend Pending** - Ready for backend implementation if requested

## API Contracts

### 1. Blog Posts API
```
GET /api/blog
Response: Array of blog posts
{
  id: number,
  title: string,
  excerpt: string,
  date: string (ISO),
  category: string,
  readTime: string,
  image: string (URL),
  slug: string
}
```

### 2. Events API
```
GET /api/events
Response: Array of events
{
  id: number,
  title: string,
  date: string (ISO),
  endDate: string (ISO),
  location: string,
  description: string,
  image: string (URL),
  slug: string
}
```

### 3. Research Reports API
```
GET /api/research
Response: Array of research reports
{
  id: number,
  title: string,
  date: string (ISO),
  description: string,
  downloadUrl: string,
  image: string (URL)
}
```

### 4. Team Members API
```
GET /api/team
Response: Array of team members
{
  id: number,
  name: string,
  description: string,
  expertise: string,
  image: string (URL)
}
```

### 5. Contact Form API
```
POST /api/contact
Request Body:
{
  name: string,
  email: string,
  company?: string,
  message: string,
  type: string (consultation|general|partnership)
}
Response: { success: boolean, message: string }
```

### 6. Newsletter Signup API
```
POST /api/newsletter
Request Body: { email: string }
Response: { success: boolean, message: string }
```

## Mock Data Currently Used

### In `/app/frontend/src/mock.js`:
- **mockBlogPosts**: 3 sample blog posts about mountain agriculture
- **mockEvents**: 2 upcoming events (Mountain Farming Congress, Alpine Innovation Summit)
- **mockResearchReports**: 2 research reports on climate change and mountain agriculture
- **mockServices**: 3 main service offerings
- **mockClients**: 3 example client projects
- **mockStats**: Company statistics (150+ clients, 200+ projects, 45+ countries, 12+ years)

## Components Structure

### Main Components:
1. **Header.jsx** - Navigation with Mountain branding
2. **Hero.jsx** - Main hero section with climate-smart agriculture messaging
3. **Features.jsx** - 6 feature cards showcasing services and capabilities
4. **Stats.jsx** - Company statistics display
5. **Team.jsx** - Team member profiles (6 members)
6. **Latest.jsx** - Blog posts, events, and research in 3-column layout
7. **Footer.jsx** - Company info, services, resources, newsletter signup

### UI Components Used:
- Shadcn UI components (Button, Card, etc.)
- Lucide React icons
- Tailwind CSS for styling

## Design Features

### Color Scheme:
- **Primary**: Emerald/Green (#059669, #047857)
- **Secondary**: Blue, Purple accents
- **Background**: Light green gradients, white, gray-50

### Typography:
- Clean, professional fonts
- Proper hierarchy and spacing
- Good contrast ratios

### Interactive Features:
- Smooth hover animations
- Card lift effects
- Button transitions
- Mobile-responsive navigation

## Backend Integration Plan

### Database Models Needed:
1. **BlogPost** model
2. **Event** model
3. **ResearchReport** model
4. **TeamMember** model
5. **ContactSubmission** model
6. **NewsletterSubscriber** model

### Frontend Integration:
- Replace mock imports with API calls
- Add loading states
- Implement error handling
- Add form validation

## Content Adaptation

### From Agritecture to Mountain:
- **Focus**: Agriculture → Mountain agriculture
- **Expertise**: CEA → High-altitude farming
- **Location**: Global → Mountain regions
- **Technology**: Vertical farming → Alpine systems
- **Services**: Urban farming → Mountain farming development

## Technical Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Icons**: Lucide React
- **Routing**: React Router
- **State**: Local state (ready for global state if needed)
- **Images**: Professional stock images via vision expert agent

## Next Steps for Backend Development
1. Set up MongoDB collections for each data type
2. Create FastAPI endpoints matching the API contracts
3. Replace mock data imports with actual API calls
4. Add form handling for contact and newsletter
5. Implement admin panel for content management (optional)
6. Add authentication for admin features (optional)

## Notes
- All images are high-quality and professionally relevant
- Content is adapted to mountain agriculture focus
- Design follows accessibility best practices
- Mobile-responsive throughout
- Performance optimized with lazy loading