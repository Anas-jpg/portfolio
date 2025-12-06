import AchievementsData from "../data/AchievementsData";

const Achievements = () => {
    return (
        <section className="achievements_section" id="achievements">
            <div className="container">
                <div className="section_title">
                    <h2>Honors & Achievements</h2>
                </div>

                <div className="achievements_content_wrapper">
                    {AchievementsData.map((achievement, index) => {
                        return (
                            <div className="single_achievement" key={index}>
                                <div className="achievement-content">
                                    <div className="achievement-icon">
                                        {achievement.icon}
                                    </div>
                                    <h3>{achievement.title}</h3>
                                    <span className="achievement-place">{achievement.place}</span>
                                    <p>{achievement.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
