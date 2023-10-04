const allTestimonials = `{
    testimonials(where: {id: "cln8hu5onda6r0cmnhonju44x"}) {
        link {
          name
          href
        }
        subtitle
        title
        reviewers(last: 3) {
            id
            name
            place
            videoLink
            photo {
                url
            }
          }
      }
  }`;

export { allTestimonials };
