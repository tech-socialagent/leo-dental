import banner from "../../assets/ourservice/banner1.png";
import text from "../../assets/ourservice/text2.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import img1 from "../../assets/ourservice/img1.png";
import contact from "../../assets/ourservice/contact2.png";
import { TbPointFilled } from "react-icons/tb";
import ContactSection from "../../components/ContactSection";

const Invisalign = () => {
  const accordionData = [
    {
      value: "1",
      trigger: "How can I correct my forwardly placed teeth?",
      content:
        "Teeth which are anteriorly placed are called Proclined teeth, which can be either due to skeletal defect ( jaws are forwardly placed ) or due to dental defect ( habits like thumb sucking, mouth breathing ). This can be corrected with orthodontics. At LEO DENTAL, our Orthodontist in Bangalore and Orthodontist in Nellore clinics will suggest either braces or clear aligners for proclination.",
    },
    {
      value: "2",
      trigger: "Is Invisalign better than braces?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
  ];
  const advantages = [
    "Smile friendly, no brackets or wires",
    "Oral hygiene friendly",
    "Lesser visits to an orthodontist",
    "Patients with known allergy to nickel can opt Invisalign",
    "Virtual planning gives a fair idea of correction much before the procedure",
  ];
  return (
    <div className="pt-20">
      {/* <section className="relative w-full h-[481px]">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="absolute  lg:inset-y-44 lg:inset-1 max-w-[1400px]  mx-auto text-white text-[50px]">
          <p className=" text-white text-[24px] underline font-normal">
            Our Services
          </p>
          <h1 className="font-bold mt-">Invisalign</h1>
        </h1>
      </section> */}
      <section className="max-w-[1400px] mx-auto mt-[80px] lg:px-0 px-5">
        <div className="relative ">
          <div className="lg:w-[567px] h-[52px] w-[168px] lg:h-[164px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="lg:text-[52px]  text-[30px] font-medium absolute top-0 lg:top-12 text-reds leading-[62px]  ">
            Invisalign Treatment
          </h1>
          <p className="lg:text-[22px] lg:leading-8 mt-5 lg:mt-0">
            Irregular, crooked, anteriorly placed and retroclined teeth, all
            need correction. The options are either braces or the advanced
            Invisalign (clear aligners). Both braces and Invisalign facilitate
            alignment by eﬀectively moving teeth in the intended direction,
            correcting abnormalities. Braces are either metallic, ceramic or
            advanced ceramic with metal slots ( Damon Clear ) which are cemented
            on to the tooth surfaces and then ligated with Titanium or Stainless
            Steel or Copper Niti wires and Elastics to facilitate correction of
            maligned teeth. This process of correction needs repeated visits to
            an orthodontist. People who are conscious of their smile especially
            with braces, can opt either Lingual Braces or Clear Aligners (
            Invisalign ).
          </p>
        </div>
      </section>{" "}
      <section className="max-w-[1400px] lg:px-0 px-5 mx-auto mt-[80px] flex lg:flex-row flex-col justify-between items-center gap-7 lg:gap-16">
        <div className="lg:w-[435px]  lg:h-[375px]">
          <img src={img1} alt="" className="" />
        </div>
        <div className="lg:w-2/3 flex flex-col ">
          <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] ">
            Advantages Of <span className="text-reds">Invisalign</span>{" "}
          </h1>
          <div className="lg:mt-4">
            {advantages.map((item, index) => (
              <ul
                key={index}
                className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
              >
                <li className="text-black mt-4">{item}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="max-w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-[52px] text-reds leading-[62px]  ">
          Invisalign FAQ’s
        </h1>
        <div className="mt-10">
          <Accordian>
            {accordionData.map((item) => (
              <AccordianItem
                key={item.value}
                value={item.value}
                trigger={item.trigger}
              >
                {item.content}
              </AccordianItem>
            ))}
          </Accordian>
        </div>
      </section> */}
      <ContactSection image={contact} />
    </div>
  );
};

export default Invisalign;