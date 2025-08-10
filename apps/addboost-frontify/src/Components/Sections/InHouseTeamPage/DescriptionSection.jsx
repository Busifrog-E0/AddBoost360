import { motion } from "framer-motion";
import ActionButtons from "./Elements/ActionButtons";

const DescriptionSection = () => {


  const fadeRotate = (index) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    },
    viewport: { once: true },
  });

  return (
    <div
      className="px-6 md:px-10 2xl:px-24 3xl:px-32
      4xl:px-60 5xl:px-80 6xl:px-180
      7xl:px-220 8xl:px-240 9xl:px-260
      10xl:px-280 11xl:px-300 12xl:px-320
      13xl:px-340 14xl:px-360 15xl:px-400
      py-10 md:py-14 lg:py-20
      4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
      8xl:py-40 9xl:py-44 10xl:py-48
      11xl:py-52 12xl:py-56 13xl:py-60
      14xl:py-64 15xl:py-72 bg-BackgroundGradientleft"
    >
      <section className="font-inter leading-relaxed text-white space-y-12">
        {/* Section 1 */}
        <motion.div {...fadeRotate(0)} className="flex flex-col">
          <p className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite mb-8">
            Embark on a Global Journey with Us
          </p>
          <p className="font-inter text-sm sm:text-base mt-2 text-white text-justify">
            At <span className="font-bold">ADD BOOST 360 LIMITED</span>, joining
            our team means stepping into a future brimming with opportunities.
            We are a <span className="italic">purpose-driven company</span> on a
            mission to empower digital futures worldwide, and we invite
            innovators from every corner of the globe to be part of this
            journey. Whether you become a Talent Pool member (our term for a
            flexible freelancer) or join us as a full-time team member, you'll
            find yourself at the heart of a{" "}
            <span className="italic">global movement</span>.
            <span className="font-bold">
              {" "}
              No matter your background or experience level
            </span>
            , if you have passion and potential, you have a place with us in our
            global family. Together, we're building a brighter future -{" "}
            <span className="italic">one creative idea at a time</span>.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div {...fadeRotate(1)} className="flex flex-col">
          <p className="capitalize font-anton text-lg sm:text-2xl text-PrimaryWhite">
            Open to All, Across the Globe
          </p>
          <p className="font-inter text-sm sm:text-base mt-2 text-white text-justify">
            Diversity and inclusivity aren't just buzzwords for us; they're the
            foundation of our team.
            <span className="font-bold"> ADD BOOST 360</span> proudly upholds a
            policy of <span className="italic">equal opportunity for all</span>,
            with a firm commitment to non-discrimination on the basis of race,
            gender, age, disability, religion, or any other protected
            characteristic. We welcome talent from every culture and country,
            believing that a diverse team fuels innovation and creativity.
            <span className="italic">
              {" "}
              International accessibility is in our DNA
            </span>{" "}
            - wherever you are in the world, we've designed our recruitment to
            reach you. Our{" "}
            <span className="italic">
              culturally inclusive environment
            </span>{" "}
            means you'll be collaborating with colleagues across continents,
            learning from each other's unique perspectives, and celebrating what
            makes each of us unique.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div {...fadeRotate(2)} className="flex flex-col">
          <p className="capitalize font-anton text-lg sm:text-2xl text-PrimaryWhite">
            Transparent and Fair Recruitment
          </p>
          <p className="font-inter text-sm sm:text-base mt-2 text-white text-justify">
            From the moment you apply to the final decision, our hiring process
            is <span className="italic">transparent and honest</span> at every
            step. We value your trust, so we ensure every candidate knows what
            to expect throughout the journey. Selections and evaluations are
            based on{" "}
            <span className="italic">merit, skills, and experience</span> -{" "}
            <span className="font-bold">never on bias</span>. We adhere strictly
            to all legal and ethical standards, whether it's respecting data
            privacy or complying with employment laws, so you can be confident
            that your application is handled with integrity. If you're an
            international candidate, rest assured we'll navigate the necessary
            work permits and local regulations with you - our{" "}
            <span className="italic">global mindset</span> comes with a
            commitment to do things the right way everywhere.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div {...fadeRotate(3)} className="flex flex-col">
          <p className="capitalize font-anton text-lg sm:text-2xl text-PrimaryWhite">
            Empowering Onboarding and Growth
          </p>
          <p className="font-inter text-sm sm:text-base mt-2 text-white text-justify">
            Your journey with us doesn't end with an offer letter - it's just
            beginning. We've crafted a structured yet{" "}
            <span className="italic">empowering onboarding program</span> to
            welcome you into the team. From day one, you'll receive a thorough
            introduction to our company's culture, meet your new colleagues, and
            get equipped with the knowledge and tools you need to succeed. This
            orientation isn't a box-ticking exercise; it's our way of setting
            you up for a confident start.
          </p>
          <p className="font-inter text-sm sm:text-base mt-4 text-white text-justify">
            Onboarding is just the beginning. As you settle in, we encourage you
            to <span className="font-bold">take charge of your growth</span>.
            Whether you're a Talent Pool member honing your craft on flexible
            projects or a full-time employee climbing the career ladder, we
            provide mentorship, continuous learning opportunities, and room to
            innovate. We believe in giving you clear structure and support, then
            empowering you to shine - your ideas will be heard, your talents
            nurtured, and your career path guided by your own ambition.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div {...fadeRotate(4)} className="flex flex-col">
          <p className="font-inter text-sm sm:text-base text-white text-justify">
            <span className="font-bold">
              Ready to shape the future with us?
            </span>{" "}
            At ADD BOOST 360, a career is more than just a job - it's a chance
            to be part of something global and meaningful. If you're looking for
            a{" "}
            <span className="italic">
              purpose-driven, flexible, and growth-oriented
            </span>{" "}
            place to work, your journey starts here. Join our global team and
            let's build something extraordinary together.
          </p>
        </motion.div>
      </section>

      <ActionButtons />

    </div>
  );
};

export default DescriptionSection;
