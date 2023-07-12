# EducationGit
A JavaScript library for fetching real-time GitHub Student Pack benefits. This library allows students to retrieve information about the benefits they have access to as part of the GitHub Student Developer Pack.

### Features

- Fetch real-time information about the GitHub Student Pack benefits.
- Retrieve details about individual benefits, such as name, description, and benefits.
- Filter benefits based on categories or specific keywords. COMING SOON
- Easy integration with your JavaScript projects.

### Installation
```bash
npm install education-github-student-benefits
```

### Usage
```js
const EducationGit = new (require("education-github-student-benefits"))();

EducationGit.getBenefits().then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});
```

### Example Request Content:
```js
{
  requestDate: {
    timestamp: 1689164159356,
    dateFormat: 'YYYY-MM-DD HH:mm:ss',
    date: '2023-07-12 12:15:59'
  },
  benefits: {
    count: 89,
    list: [
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object]
    ]
  },
  applyForGitHubStudentDeveloperPack: 'https://education.github.com/discount_requests/application',
  information: {
    source: 'https://education.github.com/pack',
    libAuthor: 'mazkdevf',
    libName: 'education-git-benefits',
    libVersion: '1.0.0'
  }
}
```


**Disclaimer:** This library is not officially endorsed or supported by GitHub. It is an independent project created by the community for educational purposes.
