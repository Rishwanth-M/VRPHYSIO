import { SimpleAccordion } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <SimpleAccordion
  items={[
    {
      question: "What conditions do you treat at VR Physio Rehab?",
      answer:
        "We treat orthopedic injuries, post-surgical cases, neurological conditions (stroke, Parkinson’s), pediatric delays, women’s health concerns, chronic pain, sports injuries, and age-related mobility issues. We also offer Pilates for strength, posture, and recovery."
    },
    {
      question: "How does Virtual Reality (VR) physiotherapy work?",
      answer:
        "VR therapy uses immersive, interactive exercises that improve balance, gait, movement confidence, and pain perception. It helps patients recover faster by providing real-time feedback and safe movement practice."
    },
    {
      question: "How long is each physiotherapy session?",
      answer:
        "A typical session lasts 40–50 minutes. This includes assessment, hands-on treatment if required, exercise therapy, and reviewing home exercises tailored to your condition."
    },
    {
      question: "Will I get a personalized treatment plan?",
      answer:
        "Yes. Every patient receives a customized treatment plan based on their diagnosis, goals, lifestyle, and recovery timeline. We regularly track progress and adjust sessions for best results."
    },
    {
      question: "Do you offer Pilates for fitness and rehabilitation?",
      answer:
        "Yes. We offer Reformer, Ladder Barrel, and Mat Pilates for core strength, posture correction, injury prevention, and post-rehab conditioning. Sessions are guided by certified physiotherapists."
    }
  ]}
/>

  );
}
