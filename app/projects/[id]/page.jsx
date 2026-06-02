// pages/projects/[id].jsx or app/projects/[id]/page.jsx
// import nextnavigate from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const projectsData = {
  "medicine-chatbot": {
    title: "Dawai Sathi",
    description:
      "An AI-powered medicine discovery platform available on WhatsApp and Telegram that helps users find medicine information and locate nearby pharmacies with real-time stock availability.",

    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "WhatsApp API",
      "Telegram Bot API",
      "Hugging Face API",
      "OpenRouter API",
      "LLM Integration",
    ],

    fullDescription: `
Dawai Sathi is a conversational healthcare assistant available on both WhatsApp and Telegram. Users can simply send the name of a medicine and instantly receive detailed information including its generic composition, dosage guidance, common uses, prescription requirements, and popular Indian brands available in the market.

After providing medicine information, the bot requests the user's location and allows them to choose a search radius such as 10 km, 20 km, 50 km, or more. Using a pharmacy inventory database, the platform identifies nearby pharmacies that currently stock the requested medicine.

The platform creates value for both customers and pharmacy owners. Customers can quickly locate medicines that are often difficult to find, while pharmacies gain visibility to potential buyers searching for those products. Additionally, pharmacy owners can use the platform to discover medicine availability across other pharmacies when a particular medicine is unavailable through their regular distributors or suppliers.

The goal of Dawai Sathi is to reduce the time and effort required to find essential medicines while building a connected network between patients and pharmacies.
`,

    features: [
      "WhatsApp and Telegram chatbot support",
      "Medicine information lookup",
      "Generic composition identification",
      "Popular Indian brand recommendations",
      "Prescription requirement detection",
      "Dosage and usage guidance",
      "Location-based pharmacy discovery",
      "Configurable search radius (10km, 20km, 50km+)",
      "Pharmacy inventory management",
      "Medicine availability search for pharmacy owners",
      "Real-time medicine stock matching",
      "Customer-to-pharmacy lead generation",

      "Natural language medicine query handling using LLM APIs",
      "LLM-powered response generation for medicine guidance",
      "Hugging Face inference API integration",
      "OpenRouter-based multi-model AI integration",
    ],

    gitLabLink:
      "https://gitlab.com/MihirTayde/dawai-sathi/-/tree/master?ref_type=heads",
    TelegramLink: "https://t.me/dawai_sathi_bot",
    WhatsappLink: "https://wa.me/1234567890?text=Hi%20Dawai%2",
    image: "/Dawai-Sathi-Image.png",
  },
};

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  console.log(id);

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project not found
          </h1>
          <Link
            href="/#projects"
            className="text-indigo-400 hover:text-indigo-300"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6 sm:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to projects
        </Link>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-slate-300">{project.description}</p>
        </div>

        {/* Project image placeholder */}
        {/* <div className="mb-8 rounded-2xl bg-slate-900 border border-slate-800 h-96 flex items-center justify-center">
          <div className="text-center"> */}
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={500}
          height={300}
          className="h-full w-full rounded-2xl object-cover"
        />
        {/* <svg
              className="h-16 w-16 text-slate-700 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg> */}
        {/* <p className="text-slate-500">Project preview image</p>
          </div> */}
        {/* </div> */}

        {/* Full description */}
        <br />
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About the project
          </h2>
          <p className="text-slate-300 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Key features
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-slate-300"
              >
                <svg
                  className="h-5 w-5 text-indigo-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-800">
          {project.gitLabLink && (
            <a
              href={project.gitLabLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#E24329"
                  d="M22.546 13.128 19.393 3.424a.535.535 0 0 0-1.017.01l-2.125 6.548H7.75L5.625 3.434a.535.535 0 0 0-1.017-.01L1.454 13.128a1.02 1.02 0 0 0 .37 1.14l10.176 7.39 10.176-7.39a1.02 1.02 0 0 0 .37-1.14Z"
                />
                <path
                  fill="#FC6D26"
                  d="m12 21.658 4.251-11.676H7.75L12 21.658Z"
                />
                <path
                  fill="#FCA326"
                  d="M12 21.658 7.75 9.982H1.454L12 21.658Zm10.546-8.53H16.25L12 21.658l10.546-8.53Z"
                />
              </svg>
              View on GitLab
            </a>
          )}
          {project.TelegramLink && (
            <a
              href={project.TelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 4L3 11L10 13L13 20L21 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13L21 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Telegram
            </a>
          )}
          {project.WhatsappLink && (
            <a
              href={project.WhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 8.02 0C3.672 0 .13 3.542.13 7.89c0 1.386.362 2.74 1.05 3.934L0 16l4.29-1.125a7.9 7.9 0 0 0 3.73.95h.003c4.347 0 7.89-3.542 7.89-7.89a7.85 7.85 0 0 0-2.312-5.609ZM8.023 14.49h-.003a6.57 6.57 0 0 1-3.35-.92l-.24-.142-2.544.667.68-2.48-.156-.254a6.56 6.56 0 0 1-1.01-3.47c0-3.63 2.954-6.584 6.587-6.584a6.54 6.54 0 0 1 4.658 1.93 6.54 6.54 0 0 1 1.925 4.656c-.002 3.63-2.956 6.586-6.587 6.586Zm3.61-4.93c-.197-.099-1.17-.578-1.352-.644-.181-.066-.313-.099-.445.1-.131.197-.51.644-.626.775-.115.132-.23.148-.428.05-.197-.1-.832-.307-1.585-.98-.585-.522-.98-1.166-1.095-1.364-.116-.197-.012-.304.087-.402.09-.09.197-.23.296-.346.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.161-.387-.324-.335-.445-.34l-.379-.007a.73.73 0 0 0-.528.248c-.181.198-.693.677-.693 1.65 0 .974.709 1.914.808 2.046.099.132 1.396 2.134 3.383 2.991.473.204.842.326 1.13.417.475.151.907.13 1.249.079.381-.057 1.17-.479 1.336-.941.165-.463.165-.859.115-.941-.049-.083-.18-.132-.378-.231Z" />
              </svg>
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
