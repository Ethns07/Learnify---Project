const coursesPage = () => {
  return (
    <main>
      <div>
        <div className="container">
          <input type="search" name="search" id="courseSearch" placeholder="Search a course" />
        </div>
        <div className="container">
          <button className="btn btn-info align-content-center">
            Add Course
          </button>
        </div>
      </div>
    </main>
  );
};

export default coursesPage;
