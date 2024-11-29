"use client";
import React from "react";
import { WebTooltip } from "./ui/web-tooltip";

const people = [
  {
    id: 1,
    name: "Anurag Bhattacharjee",
    designation: "Darkmode Astaroth",
    image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://www.linkedin.com/in/anurag-bhattacharjee-65a487275/"
  },
  {
    id: 2,
    name: "Nanda Lal Das",
    designation: "Heavenly Demon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://www.linkedin.com/in/nanda-das-7b2242243/",
  },
  {
    id: 3,
    name: "Ujjal Bhattacharjee",
    designation: "Henry-N2",
    image: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://www.linkedin.com/in/mukta-das-406336288/",
  },
];

export function WebTeam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <p className="text-white sm:text-2xl text-xl mr-3"> Created By: </p>
      <WebTooltip items={people} />
    </div>
  );
}