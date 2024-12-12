  const result = _.chain([1, 2, 3])
    .map(n => n * 2)
    .filter(n => n > 4)
    .value();
  