import Contact from "../models/Contact.js";

export async function createContact(request, response, next) {
  try {
    const { name, email, phone, message } = request.body;

    if (!name || !email || !message) {
      return response
        .status(400)
        .json({ message: "Name, email and message are required." });
    }

    const contact = await Contact.create({ name, email, phone, message });
    response
      .status(201)
      .json({ message: "Enquiry saved successfully", contact });
  } catch (error) {
    next(error);
  }
}
