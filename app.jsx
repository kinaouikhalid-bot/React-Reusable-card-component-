// App.jsx
import React from "react";
import ProfileCard from "./ProfileCard";
import "./ProfileCard.css";

const profiles = [
  {
    image: "https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1",
    name: "Mark Johnson",
    jobTitle: "Product Designer",
    bio: "Designs delightful user experiences with a focus on accessibility and motion.",
    skills: ["Figma", "UX Research", "Prototyping"]
  },
  {
    image: "https://www.google.com/imgres?q=profile%20picture&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F614810%2Fpexels-photo-614810.jpeg%3Fcs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&docid=FvQHUVZ-cx81xM&tbnid=I1v7EYSk3a2AQM&vet=12ahUKEwiJzKXJ3p-XAxU4VUEAHZG3K2YQnPAOegUIzAIQAA..i&w=500&h=427&hcb=2&ved=2ahUKEwiJzKXJ3p-XAxU4VUEAHZG3K2YQnPAOegUIzAIQAA",
    name: "Liam O'Connor",
    jobTitle: "Full Stack Engineer",
    bio: "Builds scalable web apps and loves clean architecture and test-driven development.",
    skills: ["React", "Node.js", "TypeScript", "GraphQL"]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpiLwwR4kmaQ4xVDx24BWPvXDm9BS9jmokchS7suRgg&s=10",
  name: "James Smith",
    jobTitle: "Data Scientist",
    bio: "Turns data into actionable insights and builds production-ready ML pipelines.",
    skills: ["Python", "Pandas", "TensorFlow", "SQL"]
  }
];

export default function App() {
  return (
    <main style={{ padding: 24, background: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#0f172a" }}>Team Profiles</h1>
      <section>
        {profiles.map((p, idx) => (
          <ProfileCard
            key={idx}
            image={p.image}
            name={p.name}
            jobTitle={p.jobTitle}
            bio={p.bio}
            skills={p.skills}
          />
        ))}
      </section>
    </main>
  );
}
