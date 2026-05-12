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

  const menuItems = [
    "Dashboard",
    "My Courses",
    "Assignments",
    "Grades",
    "Calendar",
    "Support",
  ];

  return (
    <main className="page">
      {/* announcement bar */}
      <div className="announcement-bar">
        <p className="ticker-text">
          Limited-time learning resources available •
          New courses added this week •
          Student support available 24/7
        </p>
      </div>

      {/* sidebar */}
      <aside className="sidebar">
        <h2>LearnHub</h2>

        <nav aria-label="Sidebar navigation">
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <button className="menu-btn">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* content */}
      <section className="content">

        {/* exam notice */}
        <section className="exam-popup">
          <h2>Exam Reminder</h2>

          <p>
            Your midterm exam begins in
            <strong> 2 hours</strong>.
            Review key materials and
            prepare ahead of time.
          </p>

          <button className="primary-btn">
            Start Preparation
          </button>
        </section>

        {/* hero */}
        <section className="hero">
          <div>
            <h1>
              Welcome Back, Student
            </h1>

            <p>
              Continue learning and
              complete your weekly
              coursework at your own
              pace.
            </p>

            <button className="hero-btn">
              Continue Learning
            </button>
          </div>

          {/* accessible video */}
          <video
            controls
            className="lecture-video"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not
            support video playback.
          </video>
        </section>

        {/* notice */}
        <section className="notice">
          Assignment deadline:
          Today at 11:59 PM
        </section>

        {/* academic updates */}
        <section className="rotating-banner">
          <h2>
            Academic Updates
          </h2>

          <div className="rotating-card">
            Midterm exam starts
            tomorrow
          </div>

          <div className="rotating-card">
            Final project submission
            closes in 8 hours
          </div>

          <div className="rotating-card">
            A new live class is now
            available
          </div>
        </section>

        {/* stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <h3>Courses</h3>
            <p>12 Active</p>
          </div>

          <div className="stat-card">
            <h3>Assignments</h3>
            <p>5 Pending</p>
          </div>

          <div className="stat-card">
            <h3>Attendance</h3>
            <p>92%</p>
          </div>

          <div className="stat-card">
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
              <article
                className="course-card"
                key={index}
              >
                <span className="course-tag">
                  Active
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
                  Open Course
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* notice board */}
        <section className="important">
          <h2>
            Student Notice Board
          </h2>

          <div className="dense-text">
            <p>
              Students are reminded to
              regularly review assignment
              deadlines, coursework,
              quizzes, practical sessions,
              and examination schedules.
            </p>

            <p>
              Please monitor notifications,
              grade releases, classroom
              updates, and online
              submissions to avoid missing
              important academic
              information.
            </p>
          </div>
        </section>

        {/* notifications */}
        <section className="notifications">
          <h2>
            Recent Notifications
          </h2>

          <div className="notification-card">
            New assignment uploaded
          </div>

          <div className="notification-card">
            Lecture slides updated
          </div>

          <div className="notification-card">
            Exam registration closes
            today
          </div>

          <div className="notification-card">
            Live lecture starts soon
          </div>
        </section>
      </section>
    </main>
  );
}