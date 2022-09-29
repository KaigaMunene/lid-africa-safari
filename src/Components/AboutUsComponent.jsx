import pic from "../Assets/Images/about-img.png";

export function AboutUsComponent() {
  return (
    <section>
      <div>
        <img src={pic} alt="About us" />
      </div>
      <div>
        <h1>About us</h1>
        <h3>Us Lid Africa safari We offer interesting trips in Africa</h3>
        <p>
          {" "}
          Our team has been working throughtout Africa for 10years.
          <br /> We have counted hundrends of travels and thousands of satisfied
          customers. <br />
          This is not all inclusive , but a real unforgetable adventure that you
          will remember for a lifetime!
        </p>
      </div>
    </section>
  );
}
