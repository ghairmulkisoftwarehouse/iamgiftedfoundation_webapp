

import AnyQuestionSvg  from '@/assets/svg/AnyQuestionSvg';
import ContactLocationSvg   from '@/assets/svg/ContactLoactionSvg';
import PhoneSvg   from '@/assets/svg/PhoneSvg';
import EmailSvg   from '@/assets/svg/EmailSvg';




export  const ContactItems = [
  {
    id: 1,
    title: "Address",
    description: "PO Box 3083  San Bernardino, CA 92413",
    icon: ContactLocationSvg,
  },
  {
    id: 2,
    title: "Phone",
    description: "+1 909-200-3595",
    link: "tel:+19092003595",
    icon: PhoneSvg,
  },
  {
    id: 3,
    title: "Email",
    description: "hello@iamgiftedfoundation.org",
    link: "mailto:hello@iamgiftedfoundation.org",
    icon: EmailSvg,
  },
  {
    id: 4,
    title: "Have Questions?",
    description:
      "We’d love to hear from you. Whether you're interested in our youth programs, volunteering, partnerships, or supporting the mission, our team is here to help",
    icon: AnyQuestionSvg,
  },
];
