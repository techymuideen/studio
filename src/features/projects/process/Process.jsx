import ProcessItem from "./ProcessItem";

const processData = [
  {
    title: "Project Scoping and Requirements",
    text: "In this stage, I try to clarify what the project goals are with the client (if any), and determine as clearly as possible the functional and non-functional requirements to achieve those objectives. Here I also try to cover User Stories, Value propositions, and Business Models/Model Canvases (if any).",
    color: "#E57373",
    icon: "account_tree",
    tohover: "hover:bg-[#E57373]/10",
    bordercolor: "border-[#E57373]",
    textcol: "text-[#E57373]",
    headerbg: "bg-[#E57373]",
    link: "More About Project Scoping",
  },

  {
    title: "System Design and Architecture",
    text: "After clarifying requirements, I select the best technologies most suitable for project execution to ensure we're working with the right tools. Here, I try to design the system architecture and simple work flows and UML/Component diagrams to develop a high-level overview of what the system would be. I also take scalability, reliability, security, and maintainability concerns into consideration in this step.",
    color: "#FB8C00",
    icon: "miscellaneous_services",
    tohover: "hover:bg-[#FB8C00]/10",
    bordercolor: "border-[#FB8C00]",
    textcol: "text-[#FB8C00]",
    headerbg: "bg-[#FB8C00]",
    link: "More About System Design and Architecture",
  },

  {
    title: "UI/UX Mockups, Database + API Design",
    text: "I like to work with UI/UX designers who make Styles Guides and Story Books for easy and straight-forward frontEnd implementation. And for the backend, in this step I begin determining the shape of the data required to execute the business logic and while leveraging the strengths of selected technologies to produce fully functional APIs to meet the needs of the application flow.",
    color: "#66BB6A",
    icon: "emoji_nature",
    tohover: "hover:bg-[#66BB6A]/10",
    bordercolor: "border-[#66BB6A]",
    textcol: "text-[#66BB6A]",
    headerbg: "bg-[#66BB6A]",
    link: "More About Agile Development",
  },

  {
    title: "MVP Target, Iterative + Agile Development",
    text: "This involves working quickly to release early/beta versions of the project with the most essential features that the target audience can start using asap. Iterating on user/client feedback and prioritizing in-demand features and high-priority bugs as we push towards the earliest release of a finalized, mature product.",
    color: "#3F51B5",
    icon: "target",
    tohover: "hover:bg-[#3F51B5]/10",
    bordercolor: "border-[#3F51B5]",
    textcol: "text-[#3F51B5]",
    headerbg: "bg-[#3F51B5]",
    link: "More About Agile Development",
  },

  {
    title: "Deployment Pipelines, Testing + Maintenance",
    text: "This step is intertwined with the previous, but continues afterwards, setting up deployment pipelines and continuous integration for quick and easy updates + hotfixes. This also involves setting up automated tests, system analytics, monitoring and improving service availability/delivery metrics etc.",
    color: "#9C27B0",
    icon: "history",
    tohover: "hover:bg-[#9C27B0]/10",
    bordercolor: "border-[#9C27B0]",
    textcol: "text-[#9C27B0]",
    headerbg: "bg-[#9C27B0]",
    link: "More About Deployment Pipelines",
  },
];

const Process = () => {
  return (
    <div className="-ml-6 flex flex-col items-start gap-10">
      {processData.map((data) => {
        return (
          <ProcessItem
           
            key={data.icon}
            text={data.text}
            title={data.title}
            icon={data.icon}
            color={data.color}
            textcol={data.textcol}
            bordercolor={data.bordercolor}
            tohover={data.tohover}
            headerbg={data.headerbg}
            link={data.link}
          />
        );
      })}
    </div>
  );
};

export default Process;
