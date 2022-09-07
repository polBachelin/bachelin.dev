const ghpages = require("gh-pages")

ghpages.publish(
  "public", // path to public directory
  {
    branch: "deployement",
    repo: "git@github.com:polBachelin/bachelin.dev.git", // Update to point to your repository
    user: {
      name: "polBachelin", // update to use your name
      email: "pol.bachelin@epitech.eu", // Update to use your email
    },
  },
  (err) => {
    console.log(err)
    console.log("Deploy Complete!")
  }
)
