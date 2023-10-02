const allTestimonials = `{
    testimonials(where: {id: "cln8hu5onda6r0cmnhonju44x"}) {
        link {
          name
          href
        }
        subtitle
        title
        reviewers {
            id
            name
            place
            photo {
                url
            }
          }
      }
  }`;

export { allTestimonials };
