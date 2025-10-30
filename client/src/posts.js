const posts = [
  {
    id: 1,
    title: "Mastering React in 2025",
    author: "Vivek Kumar",
    date: "October 30, 2025",
    content:
      "React is one of the most powerful frontend libraries. Let’s explore what makes it so special...",
    fullContent: `React is used to build dynamic and interactive user interfaces. 
In 2025, it remains one of the most in-demand frontend tools. 

⚡ **Core Concepts**
- Components and JSX
- Props and State
- Hooks like useState and useEffect

🔥 **Pro Tip:**
Start by building small projects — a weather app, to-do list, or calculator. 
Once you’re comfortable, move to advanced projects like a blog app using MERN stack.`,

    tags: ["React", "Frontend", "JavaScript"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
  {
    id: 2,
    title: "Building a Full Stack Blog with MERN",
    author: "Vivek Kumar",
    date: "October 29, 2025",
    content:
      "The MERN stack—MongoDB, Express, React, and Node.js—is the ultimate combination for creating full stack apps...",
    fullContent: `MERN combines four powerful technologies:
1️⃣ **MongoDB** for database  
2️⃣ **Express** for backend framework  
3️⃣ **React** for frontend  
4️⃣ **Node.js** for server runtime

💡 **Project Idea:**  
Create a blog platform where users can write, update, and delete posts.

🧩 **Code Example (Express route):**
`,
    code: `app.post("/api/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).send(post);
});`,
    tags: ["MERN", "Backend", "Fullstack"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 3,
    title: "Why DSA Still Matters for Developers",
    author: "Vivek Kumar",
    date: "October 28, 2025",
    content:
      "While frameworks change fast, Data Structures and Algorithms remain your strongest weapon in coding interviews...",
    fullContent: `DSA (Data Structures and Algorithms) build your problem-solving mindset. 
It’s essential for placements and competitive programming.

✅ **Topics to Focus:**
- Arrays, Strings, Linked Lists
- Trees, Graphs, DP

🏁 **Strategy:**  
Solve 2 questions daily on LeetCode or CodeStudio.
Within 3 months, you’ll notice a major jump in logic & confidence.`,
    tags: ["DSA", "Interview", "Logic"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
];

export default posts;
