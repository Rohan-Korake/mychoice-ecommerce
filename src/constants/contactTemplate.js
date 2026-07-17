export const CONTACT_ME = {
  PHONE_NUMBER: "919834208689",

  MESSAGE_TEMPLATE: ({ name, subject, message }) => {
    return `*New Contact Message*

*Name:* ${name}

*Subject:* ${subject}

*Message:* ${message}

Thank you!`;
  },
};
