export default [
  {
    title: 'Data engineering setup for customer journey tracking',
    purpose:
      'This step ensures a robust and comprehensive data gathering and storage architecture for analyzing user behavior, perceptions, and sentiments as they move through the funnel.',
    methodology: [
      'Mapping out every user touchpoint in the customer journey',
      'Setting up events for every user action in the funnel',
      'Conducting data streaming QA',
      'Setting up the BigQuery database'
    ]
  },
  {
    title: 'Funnel performance and user behavior analysis',
    purpose:
      'This step identifies underperforming funnel stages to focus CRO efforts and determines user behavior patterns that correlate with high and low revenue metrics.',
    methodology: [
      'Segmented funnel analysis',
      'Regression modelling',
      'User flow analysis',
      'Form analytics',
      'Industry benchmark analysis'
    ]
  },
  {
    title: 'User sentiment and perception analysis',
    purpose:
      'In this step, we identify and examine user drivers, frictions, concerns, intents, and uncertainties at every stage of the customer journey.',
    methodology: [
      'User surveys',
      'Usability testing',
      'Interviews',
      'User review analysis'
    ]
  },
  {
    title: 'Create data-driven CRO/UXO hypotheses',
    purpose:
      'The CRO/UXO hypotheses serve as remedies for the design and copy issues identified through quantitative data analysis and UX research. This step is based on creating the UX/UI/copy for  alternative variations of the underperforming funnel stages.',
    methodology: [
      'Formulating hypotheses based on insights from quantitative analytics and UX research',
      'Designing optimal UX/UI/copy for alternative variations',
      'Pre-validating the alternative UX/UI/copy through user testing'
    ]
  },
  {
    title: 'Validate hypotheses through experimentation',
    purpose:
      'In this phase, we assess whether the proposed alternative variation has enhanced the client’s primary revenue metrics. This stage involves developing and testing experiments, followed by a post-test analysis to confirm that the alterations in the variation directly contributed to the observed outcomes.',
    methodology: [
      'Coding an experiment (eg. A/B test) to validate the hypothesis and the optimal UX/UI/copy of the alternative variation',
      'Test the experiment to ensure bug-free user experience of the alternative variation'
    ]
  },
  {
    title: 'Perform a post-test results analysis',
    purpose:
      'This step is crucial, as it ensures that the observed A/B test outcomes can be directly attributed to the UX/UI/copy changes introduced in the alternative variation. It helps us verify that the hypothesis was accurately validated, and confirms that no external factors influenced the experiment results.',
    methodology: [
      'Segmented funnel analysis',
      'Regression analysis',
      'Visual/interactive engagement analysis'
    ]
  },
  {
    title: 'Deploy the winning variation as the default UX for all user',
    purpose: 'Deploy the winning variation as the default UX for all users.',
    methodology: [
      'Implement the code of the winning alternative variation into the site’s/product’s source code',
      'Test the frontend rendering, backend integrations, and data engineering setup to ensure quality assurance'
    ]
  }
]
