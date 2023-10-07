import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["About"]}>
      <h2>Restaurant VP Bistro</h2>
      <p>
        Suntem bucuroși să vă întâmpinăm în restaurantul nostru confortabil și
        prietenos, unde vă puteți simți ca acasă și vă puteți relaxa din
        agitația zilnică. VP Bistro este un loc în care puteți găsi mâncare
        delicioasă și o companie bună.
      </p>
      <p>
        Pregătim toate mesele noastre cu produse proaspete, de calitate, cu mare
        grijă și atenție la detalii.
      </p>
    </section>
  );
};

export default About;
