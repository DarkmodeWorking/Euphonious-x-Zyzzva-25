import { WebTooltip } from "./ui/web-tooltip";

const people = [
  {
    id: 1,
    name: "Anurag Bhattacharjee",
    designation: "Dept. of CSE",
    image: "/coreTeam/github.png",
    href:"https://www.linkedin.com/in/anurag-bhattacharjee-65a487275/"
  },
  {
    id: 2,
    name: "Nanda Lal Das",
    designation: "Dept. of CSE",
    image: "/coreTeam/Nanda00.jpg",
    href: "https://www.linkedin.com/in/nanda-das-7b2242243/",
  },
  {
    id: 3,
    name: "Ujjal Bhattacharya",
    designation: "Dept. of IT",
    image: "/coreTeam/author2.png",
    href: "https://www.linkedin.com/in/nanda-das-7b2242243/",
  }
//   {
//     id: 3,
//     name: "Ujjal Bhattacharjee",
//     designation: "Shadow Titan",
//     image: "/coreTeam/Mukta.jpeg",
//     href: "https://www.linkedin.com/in/ujjal-bhattacharya/",
//   },
];

export function WebTeam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <p className="text-white sm:text-2xl text-xl mr-3"> Created By: </p>
      <WebTooltip items={people} />
    </div>
  );
}
