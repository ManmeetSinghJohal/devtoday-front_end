export const mockPosts: any = [
  {
    id: "1",
    authorId: "user1",
    title: "10 Essential React Libraries for Modern Web Development",
    type: "PODCAST",
    image: "/assets/meeting-img2.jpeg",
    createdAt: new Date("2023-09-15T10:00:00Z"),
    content:
      "Join us for a discussion on 10 essential React libraries you should know for modern web development.",
    tags: [
      {
        id: "tag1",
        label: "React",
      },
      {
        id: "tag2",
        label: "Web Development",
      },
    ],
    comments: [
      {
        id: "comment1",
        content: "Great podcast! Very informative.",
        authorId: "user2",
        createdAt: new Date("2023-09-15T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like1",
        userId: "user3",
      },
    ],
    views: 150,
    liked: false,
  },
  {
    id: "2",
    authorId: "user1",
    title: "Tech Meetup: Introduction to Machine Learning",
    type: "MEETUP",
    createdAt: new Date("2023-09-20T10:00:00Z"),
    meetDate: new Date("2023-10-10T18:00:00Z"),
    location: "Tech Hub",
    content:
      "Join us for an introductory meetup on machine learning. Network with experts and beginners alike.",
    image: "/assets/meeting-img2.jpeg",
    tags: [
      {
        id: "tag3",
        label: "Machine Learning",
      },
      {
        id: "tag4",
        label: "Networking",
      },
    ],
    comments: [
      {
        id: "comment2",
        content: "Excited to attend!",
        authorId: "user2",
        createdAt: new Date("2023-09-22T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like2",
        userId: "user3",
      },
    ],
    views: 200,
    liked: true,
  },
  {
    id: "3",
    authorId: "user1",
    title: "Podcast: Health and Wellness Tips for Developers",
    type: "PODCAST",
    createdAt: new Date("2023-08-30T10:00:00Z"),
    audio: "https://example.com/podcast2.mp3",
    content:
      "Join us for a discussion on health and wellness tips specifically tailored for developers.",
    image: "/assets/meeting-img2.jpeg",
    tags: [
      {
        id: "tag5",
        label: "Health",
      },
      {
        id: "tag6",
        label: "Wellness",
      },
    ],
    comments: [
      {
        id: "comment3",
        content: "Very insightful! Looking forward to more episodes.",
        authorId: "user3",
        createdAt: new Date("2023-08-30T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like3",
        userId: "user1",
      },
    ],
    views: 400,
    liked: true,
  },
  {
    id: "4",
    authorId: "user2",
    title: "Career Development Meetup",
    type: "MEETUP",
    createdAt: new Date("2023-08-31T10:00:00Z"),
    meetDate: new Date("2023-10-01T18:00:00Z"),
    location: "Tech Park",
    content:
      "Join us for a meetup focused on career development in the tech industry. Network with professionals and explore opportunities.",
    image: "/assets/meeting-img2.jpeg",
    tags: [
      {
        id: "tag7",
        label: "Career",
      },
      {
        id: "tag8",
        label: "Networking",
      },
    ],
    comments: [
      {
        id: "comment4",
        content: "Can't wait to attend! This looks like a great opportunity.",
        authorId: "user3",
        createdAt: new Date("2023-09-01T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like4",
        userId: "user1",
      },
    ],
    views: 500,
    liked: true,
  },
  {
    id: "5",
    authorId: "user2",
    title: "Tech Study Group",
    type: "PODCAST",
    createdAt: new Date("2023-08-20T10:00:00Z"),
    audio: "https://example.com/podcast3.mp3",
    content:
      "Join our tech study group to collaborate on projects, share resources, and learn together.",
    image: "/assets/meeting-img2.jpeg",
    tags: [
      {
        id: "tag9",
        label: "Study",
      },
      {
        id: "tag10",
        label: "Collaboration",
      },
    ],
    comments: [
      {
        id: "comment5",
        content: "Great initiative! Looking forward to participating.",
        authorId: "user3",
        createdAt: new Date("2023-08-22T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like5",
        userId: "user1",
      },
    ],
    views: 600,
    liked: true,
  },
  {
    id: "6",
    authorId: "user3",
    title: "Latest JavaScript Trends",
    type: "POST",
    createdAt: new Date("2023-08-10T10:00:00Z"),
    content:
      "Check out the latest JavaScript trends and developments in the industry.",
    image: "/assets/meeting-img2.jpeg",
    tags: [
      {
        id: "tag11",
        label: "JavaScript",
      },
      {
        id: "tag12",
        label: "Web Development",
      },
    ],
    comments: [
      {
        id: "comment6",
        content: "Interesting post! Thanks for sharing.",
        authorId: "user1",
        createdAt: new Date("2023-08-10T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like6",
        userId: "user2",
      },
    ],
    views: 700,
    liked: true,
  },
];
