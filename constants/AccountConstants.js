// Import your SVG components
import DonationHistorySvg from "@/assets/svg/DonationHistorySvg";
import ImpactReportSvg from "@/assets/svg/ImpactReportSvg";
import UpcomingEventSvg from "@/assets/svg/UpcomingEventSvg";
import CheckInSvg from "@/assets/svg/CheckInSvg";
import TrackingHoursSvg from "@/assets/svg/TrackingHoursSvg";
import BadgesSvg   from '@/assets/svg/BadgesSvg'
// Import more icons if you have them


// impact 
import DonarsSvg from "@/assets/svg/DonarsSvg";
import ThinkingSvg from "@/assets/svg/ThinkingSvg";
import PersonSvg from "@/assets/svg/PersonSvg";
import WorkShopSvg from "@/assets/svg/WorkShopSvg";

export const AccountLinks = [
  {
    name: "Donation History",
    path: "/account/donation-history",
    icon: <DonationHistorySvg />,
  },

    {
    name: "Badges Earned",
    path: "/",
    icon: <BadgesSvg />,
  },
  {
    name: "Impact Report",
 path:"/account/impactreport",
    icon: <ImpactReportSvg />,
  },
  {
    name: "Registered Programs",
    path: "/",
    icon: <ImpactReportSvg />, // replace with actual Registered Programs SVG if you have
  },
  {
    name: "Upcoming Events",
    path: "/",
    icon: <UpcomingEventSvg />,
  },
  {
    name: "Check-in / Check-out",
 path: "/",
    icon: <CheckInSvg />,
  },
  {
    name: "Recognition Certificates",
    path: "/",
    icon: <ImpactReportSvg />, // replace with actual Recognition Certificates SVG
  },
  {
    name: "Track Working Hours",
    path: "/",
    icon: <TrackingHoursSvg />,
  },
];


//    donation  account 


export const donationRecords = [
  {
    id: 1,
    title: "Life Skills Camp — Building Future",
    date: "May 1, 2024",
    donated: "$100",
  },
  {
    id: 2,
    title: "Education for All — Summer Program",
    date: "May 2, 2024",
    donated: "$150",
  },
  {
    id: 3,
    title: "Health Awareness Campaign",
    date: "May 3, 2024",
    donated: "$120",
  },
  {
    id: 4,
    title: "Community Development Workshop",
    date: "May 4, 2024",
    donated: "$80",
  },
  {
    id: 5,
    title: "Life Skills Camp — Building Future",
    date: "May 5, 2024",
    donated: "$200",
  },
  {
    id: 6,
    title: "Youth Empowerment Program",
    date: "May 6, 2024",
    donated: "$90",
  },
  {
    id: 7,
    title: "Environmental Awareness Drive",
    date: "May 7, 2024",
    donated: "$110",
  },
  {
    id: 8,
    title: "Community Health Camp",
    date: "May 8, 2024",
    donated: "$130",
  },
  {
    id: 9,
    title: "Education for All — Winter Program",
    date: "May 9, 2024",
    donated: "$140",
  },
  {
    id: 10,
    title: "Life Skills Camp — Advanced Workshop",
    date: "May 10, 2024",
    donated: "$180",
  },
];





export  const reportImpactData = [
  {
    title: "120 Youth Supported This Year",
    description:
      "This year, 120 youth joined our programs, building skills, confidence, and brighter futures.",
    icon: <PersonSvg />,
    bg: "bg-[#BFE5E4]",
  },
  {
    title: "40 Subsidized Mental Health Care",
    description:
      "40 youth received affordable mental health care, strengthening their well-being and resilience.",
    icon: <ThinkingSvg />,
    bg: "bg-[#D8BFD8]",
  },
  {
    title: "62 Generous Donors",
    description:
      "Grateful to 62 donors making a real difference in young lives.",
    icon: <DonarsSvg />,
    bg: "bg-[#B2BCC5]",
  },
  {
    title: "14 Workshops Completed",
    description:
      "14 workshops empowering youth through growth and learning.",
    icon: <WorkShopSvg />,
    bg: "bg-black",
  },
];