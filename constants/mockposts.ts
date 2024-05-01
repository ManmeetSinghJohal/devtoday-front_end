export const mockPosts: any = [
  {
    id: "1",
    authorId: "user1",
    title:
      "React Libraries to You Should Know About and Use in Your Projects in 2024",
    type: "PODCAST",
    image: "/assets/mockimg.png",
    createdAt: new Date("2024-04-30T10:00:00Z"),
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",

    tags: [
      {
        id: "tag1",
        label: "Technology",
      },
      {
        id: "tag2",
        label: "AI",
      },
    ],
    comments: [
      {
        id: "comment1",
        content: "Great podcast!",
        authorId: "user2",
        createdAt: new Date("2024-02-30T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like1",
        userId: "user3",
      },
    ],
    views: 100,
  },
  {
    id: "2",
    authorId: "user1",
    title: "Meetup 1",
    type: "MEETUP",
    createdAt: new Date("2024-03-29T10:00:00Z"),
    meetDate: new Date("2024-010-01T18:00:00Z"),
    location: "Online",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag3",
        label: "Networking",
      },
    ],
    comments: [
      {
        id: "comment2",
        content: "Looking forward to it!",
        authorId: "user2",
        createdAt: new Date("2023-04-29T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like2",
        userId: "user3",
      },
    ],
    views: 200,
  },
  {
    id: "3",
    authorId: "user1",
    title: "Group 1",
    type: "GROUP",
    createdAt: new Date("2024-03-28T10:00:00Z"),
    groupId: "group1",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag4",
        label: "Community",
      },
    ],
    comments: [
      {
        id: "comment3",
        content: "Excited to join!",
        authorId: "user2",
        createdAt: new Date("2024-01-28T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like3",
        userId: "user3",
      },
    ],
    views: 300,
  },
  {
    id: "4",
    authorId: "user2",
    title: "Podcast 2",
    type: "PODCAST",
    createdAt: new Date("2024-03-27T10:00:00Z"),
    audio: "https://example.com/podcast2.mp3",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag5",
        label: "Health",
      },
    ],
    comments: [
      {
        id: "comment4",
        content: "Very insightful!",
        authorId: "user3",
        createdAt: new Date("2024-03-27T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like4",
        userId: "user1",
      },
    ],
    views: 400,
  },
  {
    id: "5",
    authorId: "user2",
    title: "Meetup 2",
    type: "MEETUP",
    createdAt: new Date("2024-06-26T10:00:00Z"),
    meetDate: new Date("2024-09-02T18:00:00Z"),
    location: "Online",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag6",
        name: "Career",
      },
    ],
    comments: [
      {
        id: "comment5",
        content: "Can't wait!",
        authorId: "user3",
        createdAt: new Date("2024-02-26T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like5",
        userId: "user1",
      },
    ],
    views: 500,
  },
  {
    id: "6",
    authorId: "user2",
    title: "Group 2",
    type: "GROUP",
    createdAt: new Date("2024-02-25T10:00:00Z"),
    groupId: "group2",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu sem magna.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag7",
        label: "Education",
      },
    ],
    comments: [
      {
        id: "comment6",
        content: "Great group!",
        authorId: "user3",
        createdAt: new Date("2024-04-25T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like6",
        userId: "user1",
      },
    ],
    views: 600,
  },
  {
    id: "7",
    authorId: "user3",
    title: "Post 1",
    type: "POST",
    createdAt: new Date("2024-01-24T10:00:00Z"),
    content: "This is a sample post content.",
    image: "/assets/mockimg.png",

    tags: [
      {
        id: "tag8",
        label: "General",
      },
    ],
    comments: [
      {
        id: "comment7",
        content: "Interesting post!",
        authorId: "user1",
        createdAt: new Date("2024-01-24T10:05:00Z"),
      },
    ],
    likes: [
      {
        id: "like7",
        userId: "user2",
      },
    ],
    views: 700,
  },
];
