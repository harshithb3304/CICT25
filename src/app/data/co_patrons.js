export const Co_Patrons = {
  "Patrons": [
    {
      image: "/assets/images/co_patrons/p1.png",
      title: "Prof. Sivaselvan B",
      description: "IIITDM Kancheepuram, Head of the Department, Computer Science and Engineering",
      socialLinks: {
        facebook: "https://www.iiitdm.ac.in/people/faculty/sivaselvanb@iiitdm.ac.in",
        linkedin: "https://www.linkedin.com/in/siva-selvan-a3a24448/"
      },
    },
    {
      image: "/assets/images/co_patrons/p2.png",
      title: "Dr. Chitti Babu B",
      description: "IIITDM Kancheepuram, Head of the Department, Electronics and Communication Engineering ",
      socialLinks: {
        facebook: "https://www.iiitdm.ac.in/people/faculty/bcbabu@iiitdm.ac.in",
        linkedin: "https://www.linkedin.com/in/dr-chitti-babu-b-52a75a89/"
      },
    },
    {
      image: "/assets/images/co_patrons/p3.png",
      title: "Prof. Raja B",
      description: "IIITDM Kancheepuram, Head of the Department, Mechanical Engineering ",
      socialLinks: {
        facebook: "https://www.iiitdm.ac.in/people/faculty/rajab@iiitdm.ac.in",
        linkedin: "https://www.linkedin.com/in/raja-balakrishnan-50827529/"
      },
    },
    {
      image: "/assets/images/co_patrons/p4.png",
      title: "Dr. Raguraman Munusamy",
      description: "IIITDM Kancheepuram, Head, School of Interdisciplinary Design and Innovation",
      socialLinks: {
        facebook: "https://www.iiitdm.ac.in/people/faculty/sudhir@iiitdm.ac.in",
        linkedin: "https://www.linkedin.com/in/sudhirvaradarajan/"
      },
    },
    {
      image: "/assets/images/co_patrons/p5.png",
      title: "Prof. Naveen Kumar",
      description: "IIITDM Kancheepuram, Head of the Department, Sciences and Humanities",
      socialLinks: {
        facebook: "https://www.iiitdm.ac.in/people/faculty/nkumar@iiitdm.ac.in",
        linkedin: "https://www.linkedin.com/in/naveen-kumar-4530a1145/"
      },
    },
  ].sort((a, b) => {
    // Remove titles like "Prof.", "Dr." etc. using a regular expression
    const removeTitle = (name) => name.replace(/^(Prof\.|Dr\.)\s+/i, '').trim();
    
    return removeTitle(a.title).localeCompare(removeTitle(b.title));
  })
};
