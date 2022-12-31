const combineClassNames = (...names: (string | undefined)[]): string => {
  let result = '';

  for (let i = 0; i < names.length; ++i) {
    const name = names[i];

    if (name == null) {
      continue;
    }

    if (result.length === 0) {
      result = name;
    }

    result = `${result} ${name}`;
  }

  return result;
};

export default combineClassNames;
