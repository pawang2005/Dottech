import Course from "../models/Course.js";

export async function getCourses(_request, response, next) {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    response.json(courses);
  } catch (error) {
    next(error);
  }
}

export async function getCourseById(request, response, next) {
  try {
    const course = await Course.findById(request.params.id);

    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }

    response.json(course);
  } catch (error) {
    next(error);
  }
}

export async function createCourse(request, response, next) {
  try {
    const course = await Course.create(request.body);
    response.status(201).json(course);
  } catch (error) {
    next(error);
  }
}

export async function updateCourse(request, response, next) {
  try {
    const course = await Course.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }

    response.json(course);
  } catch (error) {
    next(error);
  }
}

export async function deleteCourse(request, response, next) {
  try {
    const course = await Course.findByIdAndDelete(request.params.id);

    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }

    response.json({ message: "Course deleted successfully" });
  } catch (error) {
    next(error);
  }
}
