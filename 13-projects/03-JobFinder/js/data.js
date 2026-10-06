// =====================================================
// JOBFINDER - JOB DATA
// =====================================================

const jobsData = [

    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Bengaluru",
        type: "Full Time",
        mode: "Hybrid",
        experience: "1-3 Years",
        salaryMin: 8,
        salaryMax: 14,
        salaryText: "₹8–14 LPA",
        logo: "G",
        description:
            "Build modern and responsive web applications using HTML, CSS and JavaScript.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git"
        ]
    },

    {
        id: 2,
        title: "JavaScript Developer",
        company: "Microsoft",
        location: "Hyderabad",
        type: "Full Time",
        mode: "Remote",
        experience: "1-3 Years",
        salaryMin: 7,
        salaryMax: 12,
        salaryText: "₹7–12 LPA",
        logo: "M",
        description:
            "Develop scalable frontend applications and interactive user interfaces.",
        skills: [
            "JavaScript",
            "HTML",
            "CSS",
            "React",
            "Git"
        ]
    },

    {
        id: 3,
        title: "UI/UX Designer",
        company: "Amazon",
        location: "Mumbai",
        type: "Full Time",
        mode: "On-site",
        experience: "1-3 Years",
        salaryMin: 6,
        salaryMax: 10,
        salaryText: "₹6–10 LPA",
        logo: "A",
        description:
            "Design clean and user-friendly digital experiences for web and mobile applications.",
        skills: [
            "Figma",
            "UI Design",
            "UX Design",
            "Wireframing"
        ]
    },

    {
        id: 4,
        title: "Full Stack Developer",
        company: "TCS",
        location: "Pune",
        type: "Full Time",
        mode: "Hybrid",
        experience: "1-3 Years",
        salaryMin: 5,
        salaryMax: 9,
        salaryText: "₹5–9 LPA",
        logo: "T",
        description:
            "Work on frontend and backend applications using modern web technologies.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "MongoDB"
        ]
    },

    {
        id: 5,
        title: "React Developer",
        company: "Infosys",
        location: "Pune",
        type: "Full Time",
        mode: "Hybrid",
        experience: "Fresher",
        salaryMin: 4,
        salaryMax: 7,
        salaryText: "₹4–7 LPA",
        logo: "I",
        description:
            "Create reusable React components and responsive frontend applications.",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },

    {
        id: 6,
        title: "Python Developer",
        company: "Wipro",
        location: "Noida",
        type: "Full Time",
        mode: "On-site",
        experience: "Fresher",
        salaryMin: 4,
        salaryMax: 8,
        salaryText: "₹4–8 LPA",
        logo: "W",
        description:
            "Develop Python-based applications and work with APIs and databases.",
        skills: [
            "Python",
            "Flask",
            "API",
            "SQL"
        ]
    },

    {
        id: 7,
        title: "Frontend Intern",
        company: "Adobe",
        location: "Noida",
        type: "Internship",
        mode: "Remote",
        experience: "Fresher",
        salaryMin: 2,
        salaryMax: 4,
        salaryText: "₹2–4 LPA",
        logo: "A",
        description:
            "Learn and contribute to frontend development projects with an experienced team.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    {
        id: 8,
        title: "MERN Stack Developer",
        company: "Accenture",
        location: "Bengaluru",
        type: "Full Time",
        mode: "Hybrid",
        experience: "1-3 Years",
        salaryMin: 6,
        salaryMax: 11,
        salaryText: "₹6–11 LPA",
        logo: "A",
        description:
            "Develop full-stack applications using MongoDB, Express, React and Node.js.",
        skills: [
            "MongoDB",
            "Express",
            "React",
            "Node.js"
        ]
    },

    {
        id: 9,
        title: "Web Developer",
        company: "HCLTech",
        location: "Noida",
        type: "Full Time",
        mode: "Hybrid",
        experience: "Fresher",
        salaryMin: 4,
        salaryMax: 7,
        salaryText: "₹4–7 LPA",
        logo: "H",
        description:
            "Build responsive websites and web applications for different clients.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    {
        id: 10,
        title: "Backend Developer",
        company: "IBM",
        location: "Bengaluru",
        type: "Full Time",
        mode: "Remote",
        experience: "1-3 Years",
        salaryMin: 7,
        salaryMax: 13,
        salaryText: "₹7–13 LPA",
        logo: "I",
        description:
            "Develop backend services, APIs and database-driven applications.",
        skills: [
            "Node.js",
            "Express",
            "MongoDB",
            "REST API"
        ]
    }

];


// =====================================================
// HELPER FUNCTION
// FIND JOB BY ID
// =====================================================

function getJobById(id) {

    return jobsData.find(function (job) {

        return job.id === Number(id);

    });

}