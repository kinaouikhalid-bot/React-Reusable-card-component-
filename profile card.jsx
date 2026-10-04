// ProfileCard.jsx
import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ image, name, jobTitle, bio, skills = [] }) {
  return (
    <article className="profile-card">
      <div className="profile-card__media">
        <img src={image} alt={`${name} avatar`} className="profile-card__avatar" />
      </div>

      <div className="profile-card__body">
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__title">{jobTitle}</p>
        <p className="profile-card__bio">{bio}</p>

        {skills.length > 0 && (
          <div className="profile-card__skills">
            {skills.map((skill, i) => (
              <span key={i} className="profile-card__skill">
                {skill}
              </span>            ))}
          </div>       )}
      </div>
    </article>
  );
}
