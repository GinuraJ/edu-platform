export default function Home() {
  const courses = [
    {
      title: "Machine Learning Fundamentals",
      progress: "75%",
      instructor: "Dr. Silva",
    },
    {
      title: "Web Accessibility Engineering",
      progress: "45%",
      instructor: "Prof. Fernando",
    },
    {
      title: "Advanced React Development",
      progress: "60%",
      instructor: "Mr. Perera",
    },
    {
      title: "Data Science for Beginners",
      progress: "25%",
      instructor: "Dr. Jayasinghe",
    },
    {
      title: "Human Computer Interaction",
      progress: "82%",
      instructor: "Dr. Wijesinghe",
    },
    {
      title: "Software Testing & QA",
      progress: "91%",
      instructor: "Ms. Gunawardena",
    },
  ];

  return (
    <main className="page">

      {/* Moving announcement bar */}
      <div className="announcement-bar">
        <marquee scrollamount="7">
          📢 FINAL EXAM REGISTRATION CLOSES TODAY •
          NEW ASSIGNMENT RELEASED •
          COURSE DEADLINE APPROACHING •
          LIVE SESSION STARTS SOON •
        </marquee>
      </div>

      {/* intrusive popup */}
      <div className="exam-popup">
        <h2>⚠ Exam Alert</h2>

        <p>
          Midterm exam begins in
          <strong> 2 Hours</strong>.
        </p>

        <button>
          START PREPARATION
        </button>
      </div>

      {/* sidebar */}
      <aside className="sidebar">
        <h2>LearnHub</h2>

        <ul>
          <li>Dashboard</li>
          <li>My Courses</li>
          <li>Assignments</li>
          <li>Grades</li>
          <li>Calendar</li>
          <li>Support</li>
        </ul>
      </aside>

      {/* main content */}
      <section className="content">

        {/* hero */}
        <section className="hero">
          <div>

            <h1>
              Welcome Back, Student
            </h1>

            <p>
              Continue learning and
              complete your weekly
              coursework.
            </p>

            <button className="hero-btn">
              Continue Learning
            </button>
          </div>

          {/* autoplay video */}
          <video
            autoPlay
            muted
            loop
            className="lecture-video"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </section>

        {/* blinking notice */}
        <section className="notice blink">
          ⚠ ASSIGNMENT DEADLINE:
          11:59 PM TODAY
        </section>

        {/* dashboard stats */}
        <section className="stats-grid">

          <div className="stat-card">
            <h3>Courses</h3>
            <p>12 Active</p>
          </div>

          <div className="stat-card pulse">
            <h3>Assignments</h3>
            <p>5 Pending</p>
          </div>

          <div className="stat-card">
            <h3>Attendance</h3>
            <p>92%</p>
          </div>

          <div className="stat-card pulse">
            <h3>Upcoming Exams</h3>
            <p>3</p>
          </div>

        </section>

        {/* courses */}
        <section className="courses">

          <h2>
            My Courses
          </h2>

          <div className="course-grid">

            {courses.map((course, index) => (
              <div
                className="course-card"
                key={index}
              >
                <span className="course-tag">
                  ACTIVE
                </span>

                <h3>
                  {course.title}
                </h3>

                <p>
                  Instructor:
                  {" "}
                  {course.instructor}
                </p>

                <div className="progress-wrapper">
                  <div
                    className="progress-bar"
                    style={{
                      width:
                        course.progress,
                    }}
                  />
                </div>

                <p>
                  Progress:
                  {" "}
                  {course.progress}
                </p>

                <button className="tiny-btn">
                  OPEN
                </button>
              </div>
            ))}

          </div>
        </section>

        {/* dense notice section */}
        <section className="important">

          <h2>
            Student Notice Board
          </h2>

          <p className="dense-text">
            Students are reminded that
            assignment deadlines,
            coursework evaluations,
            quizzes, practical sessions,
            examination requirements,
            lecture attendance,
            participation tracking,
            online submissions,
            student portal updates,
            academic announcements,
            and assessment schedules
            must be checked frequently.
            Please monitor notifications,
            deadlines, grade releases,
            and classroom changes to
            avoid missing critical
            academic information.
          </p>

        </section>

        {/* notifications */}
        <section className="notifications">

          <h2>
            Recent Notifications
          </h2>

          <div className="notification-card pulse">
            🔔 New assignment uploaded
          </div>

          <div className="notification-card">
            📘 Lecture slides updated
          </div>

          <div className="notification-card blink">
            ⚠ Exam registration closes
            today
          </div>

        </section>

      </section>

    </main>
  );
}